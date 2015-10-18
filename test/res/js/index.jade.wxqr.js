$(function () {
    var isWX = /MicroMessenger/i.test(navigator.userAgent);
    if (isWX) {
        $('#wxqr').show();
    }
});