$(function () {
    if (!g_IS_MOBILE)
        return;

    var url = "./res/lib/Swiper-3.1.7/dist/js/swiper.jquery.min.js";

    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = function () {

        $.each(['#swiper-cases', '#swiper-lawyers'], function (i, s) {
            new Swiper(s, {
                pagination: s + ' .swiper-pagination',
                loop: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        });

    };
    document.body.appendChild(script);
});