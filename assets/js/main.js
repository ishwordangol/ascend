$(window).scrollTop(0);

$("#toggleLangDir").click(function () {
    const isEnglish = $("html").attr("lang") === "en";

    if (isEnglish) {
        $("html").attr("lang", "ar").attr("dir", "rtl");
        $("body").removeClass("ltr").addClass("rtl");
        $(this).attr("src", "assets/images/english-icon.png").attr("alt", "Switch to English (LTR)").attr("title", "Switch to English (LTR)");
    } else {
        $("html").attr("lang", "en").attr("dir", "ltr");
        $("body").removeClass("rtl").addClass("ltr");
        $(this).attr("src", "assets/images/arabic-icon.png").attr("alt", "Switch to Arabic (RTL)").attr("title", "Switch to Arabic (RTL)");
    }
});

$(window).scroll(function () {
    var sticky = $(".header"),
        scroll = $(window).scrollTop();

    if (scroll >= 200)
        sticky.addClass("header-fixed animate__animated animate__fadeInDown");
    else sticky.removeClass("header-fixed animate__animated animate__fadeInDown");
});

const isRtl = $('html').attr('dir') === 'rtl';

$(".testimonialSlider").slick({
    rtl: isRtl,
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
    rtl: isRtl,
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
    rtl: !isRtl,
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
});

$('.rtl section .marqueesliderwrapper .slick.marquee_rtl').slick({
    rtl: isRtl,
});


