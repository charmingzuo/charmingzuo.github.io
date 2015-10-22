(function () {
    var q = function (s) {
        return document.getElementById(s);
    };
    var fixPosition = function () {

        var container = q('ceo-wrap');
        var img = q('ceo-img');

        img.style.maxHeight = container.scrollHeight - container.firstChild.offsetTop + 'px';
    };
    fixPosition();

    if (window.addEventListener)
        window.addEventListener('resize', fixPosition, false);
    else if (window.attachEvent)
        window.attachEvent('resize', fixPosition);
})();