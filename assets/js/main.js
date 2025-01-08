$(window).scrollTop(0);

// Hide Header on on scroll down
var lastScrollTop = 0;
var header = $('.header');
var threshold = 200; // Scroll position threshold

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
        // Scrolling Down: Hide the header with fade-out and slide-up effects
        if (!header.hasClass('fadeOutUp')) {
            header.removeClass('fadeInDown').addClass('fadeOutUp').fadeOut();
        }
    } else if (scrollTop < lastScrollTop) {
        // Scrolling Up: Show the header with fade-in and slide-down effects
        if (scrollTop > 0 && !header.hasClass('fadeInDown')) {
            header.removeClass('fadeOutUp').addClass('fadeInDown').fadeIn();
        }
    }

    // Remove fadeInDown class at the top of the page
    if (scrollTop === 0) {
        header.removeClass('fadeInDown').fadeIn();
    }

    lastScrollTop = scrollTop;
});

$(".testimonialSlider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
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
    speed: 500,
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
    speed: 500,
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

