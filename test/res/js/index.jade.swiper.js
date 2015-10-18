$(function () {
    $.each(['#swiper-cases', '#swiper-lawyers'], function (i, s) {
        new Swiper(s, {
            pagination: s + ' .swiper-pagination',
            loop: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    });
});