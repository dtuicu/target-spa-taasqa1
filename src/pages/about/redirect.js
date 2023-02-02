if(document.location.href.indexOf('param1=one&param2=two')>-1) {
    //do nothing
} else  {
    window.location.replace(document.location.search + (document.location.search.indexOf('?')>-1  ? '&param1=one&param2=two' : '?param1=one&param2=two'));
}
