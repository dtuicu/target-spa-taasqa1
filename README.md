#### Site published at:

Vercel: https://target-spa-taasqa1.vercel.app/#/

If you're deploying somewhere else, you need to change cookieDomain from /public/index.html:

```
window.targetGlobalSettings = {
        cookieDomain: "spa-six.vercel.app",
      };
```

If you want to test on a tenant other than taasqa1, you need to replace the at.js script from /public/index.html and replace the new script in /public/scripts:

```
<script src="%PUBLIC_URL%/scripts/at-taasqa1-spa.js"></script>
```

And then add this to the footer of your new at.js file:

```

function sanitizeViewName(viewName) {
 if (viewName.startsWith("#")) {
   viewName = viewName.substr(1);
 }
 if (viewName.startsWith("/")) {
   viewName = viewName.substr(1);
 }
 return viewName;
}
function triggerView(viewName) {
 viewName = sanitizeViewName(viewName) || "home";
 // Validate if the Target Libraries are available on your website
 if (
   typeof adobe != "undefined" &&
   adobe.target &&
   typeof adobe.target.triggerView === "function"
 ) {
   adobe.target.triggerView(viewName);
   console.log("AT: View triggered on page load: " + viewName);
 }
}
//fire triggerView when the SPA loads and when the hash changes in the SPA
if (window.location.pathname.indexOf("/") > -1) {
 triggerView(location.hash);
}
window.onhashchange = function () {
 if (window.location.pathname.indexOf("/") > -1) {
   triggerView(location.hash);
 }
};
```

## Adding mboxes

Install https://www.npmjs.com/package/@adobe/target-react-component/v/0.4.2
Follow the instructions from the link above:

```
import createTargetComponent from '@adobe/target-react-component';
const Target = createTargetComponent(React);

...

<Target data-mbox="testMbox">
 Default mbox content
</Target>
```
