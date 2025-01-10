$(window).scrollTop(0);

$(window).scroll(function () {
    var sticky = $(".header"),
        scroll = $(window).scrollTop();

    if (scroll >= 200)
        sticky.addClass("header-fixed animate__animated animate__fadeInDown");
    else sticky.removeClass("header-fixed animate__animated animate__fadeInDown");
});

$(".testimonialSlider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '150px',
    slidesToScroll: 1,
    swipe: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                centerPadding: '100px',
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                centerPadding: '60px',
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                centerPadding: '60px',
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$('.marqueesliderwrapper .slick.marquee').slick({
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
});


$('.marqueesliderwrapper .slick.marquee_rtl').slick({
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true
});

