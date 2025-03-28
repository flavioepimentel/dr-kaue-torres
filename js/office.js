$(document).ready(function(){
    $('.office-slider-fullwidth').slick({
        dots: true,
        arrows: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 4000,
        // pauseOnHover: true,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>'
    });
});