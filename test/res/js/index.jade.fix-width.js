(function (doc, head) {
    var css = '.page-wrap .container { width:' + Math.round(screen.availWidth - 40) + 'px; max-width: 1200px; }';
    var style;
    if (doc.createStyleSheet) {
        style = doc.createStyleSheet();
        style.cssText = css;
    } else {
        style = doc.createElement('style');
        style.innerHTML = css;
    }
    head.appendChild(style);
})(document, document.getElementsByTagName('head')[0]);