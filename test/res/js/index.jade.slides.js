$(function () {
    var $slideEl = $('#lawyer-slides');
    if ($slideEl[0] && $slideEl.is(':visible')) {

        $slideEl.carousel({
            interval: 4500
        });

    }
});