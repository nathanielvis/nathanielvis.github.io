$(document).ready(function() {

    "use strict";

    BackToTop();

    /*Magnific popup*/
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.project-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

});

// Hamburger Menu
var $window = $(window),
    $menutog = $('#menu-toggle')

// Run On Page Load
$window.on("load", function() {

    //Sidebar open
    $('#menu-toggle').on('click', function(event) {
        $(this).toggleClass('active');
        $('#menu-left').toggleClass('open');
        $('#menu-right').toggleClass('open');
    })

    //Hero slider
    $('.hero-slider-wrapper').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.hero-slider-wrapper .owl-nav').addClass('container')

    var selector = $(this).attr('data-filter');
    jQuery('.project-list').isotope({
        filter: selector
    });

})


/*-------------------------------------------------------------------------------
          SCROLLER
  -------------------------------------------------------------------------------*/

//Back To Top
function BackToTop() {

    $('.scrolltotop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 600) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }
    });

}

//Parallax Hero
$('.parallax-nav li a').on('click', function() {
    $('.parallax-nav li').removeClass('active');
    $(this).parent().toggleClass('active');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

//Testimonial owl carousel
$(".hero-testimonial-carousel").owlCarousel({
    items: 2,
    margin: 0,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//Testimonial Slider
$('.testimonial-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }

    }
})

//Testimonial Slider
$('.partners-wrapper').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})


//Project Details Slider
$('.project-details-slider-wrap').owlCarousel({
    loop: true,
    nav: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Footer Accordian
$(".nav h3").on('click', function() {
    $(this).parent(".nav").toggleClass("open");

});

//shortcode starts
$(".shortcode-wrapper").owlCarousel({
    items: 2,
    margin: 30,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }

});

/*Team Carousel*/
$('.team-wrapper').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
/*-------------------------------------------------------------------------------
  Navbar 
-------------------------------------------------------------------------------*/
//fixed navbar
var nav_offset_top = $('header').height() + 50;


//* Navbar Fixed  
function navbarFixed() {
    if ($('.menu-area-one').length) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".menu-area-one").addClass("navbar_fixed");
            } else {
                $(".menu-area-one").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();

// portfolio isotope
$(".project-filter li").on('click', function() {

    $(".project-filter li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".project-list").isotope({
        filter: selector,
    });

})
// Full screen Search

$(function() {
    $('#searchBtn').on("click", function() {
        $('#search').addClass('open');
        $('#search_element').focus();

    });
    $('.close').on("click", function() {
        $('#search').removeClass('open');
    });
});



//* Navbar Fixed  
function navbarFixed() {
    if ($('.ham-menu').length) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 600) {
                $(".ham-box").addClass("ham-bg-dark");
            } else {
                $(".ham-box").removeClass("ham-bg-dark");
            }
        });
    };
};
navbarFixed();


/*-------------------------------------------------------------------------------
          Portfolio carousel with filter
-------------------------------------------------------------------------------*/
$('.filter-project-carousel').owlCarousel({
    dots: false,
    nav: true,
    margin: 30,
    smartSpeed: 250,
    responsiveRefreshRate: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2

        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.filter-project-carousel2').owlCarousel({
    dots: false,
    nav: true,
    margin: 30,
    smartSpeed: 250,
    responsiveRefreshRate: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2

        },
        768: {
            items: 2
        }
    }
});

//Filter Carousel
$('.js-filter-carousel li a').on('click', function() {
    $('.js-filter-carousel .active').removeClass('active');
    $(this).closest('li').addClass('active');
    var selector = $(this).attr('data-filter');
    $('.filter-project-carousel').fadeOut(300);
    $('.filter-project-carousel').fadeIn(300);
    setTimeout(function() {
        $('.filter-project-carousel .owl-item').hide();
        $(selector).closest('.filter-project-carousel .owl-item').show();
    }, 300);
    return false;
});


//Counter up
$('.partners').animationCounter({
    start: 1,
    end: 49,
    step: 1,
    delay: 40
});
$('.projects').animationCounter({
    start: 5,
    end: 450,
    step: 10,
    delay: 1
});
$('.consultent').animationCounter({
    start: 1,
    end: 30,
    step: 1,
    delay: 50
});

var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);