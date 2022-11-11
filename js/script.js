/*======== Preloadder =========*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


});
/*======== Team =========*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});
/*======== Progress Bars =========*/
$(document).ready(function() {
$('.progress-elements').waypoint(function() {

     $(".progress-bar").each(function() {

            $(this).animate({

              width: $(this).attr("aria-valuenow")
            },3500);

            });
            this.destroy();
}, {
    offset: 'bottom-in-view'
});

});

/*======== Responsive Tabs =========*/
$(document).ready(function () {
   $('.service-tab').hide();
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});




/*======== Portfolio =========*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active')
    });
});
/* =========================================
               Magnifier
============================================ */

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    })
});
/* =========================================
               Testimonials
============================================ */
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =========================================
               Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    })

});
/* =========================================
               Clients
============================================ */

$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});
/* =========================================
               Google Map
============================================ */
/*$(window).on('load', function () {
    //Map Variables
    var addresString = '230 Brodway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    }

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    //2. Add Marker 
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Adress"
    });

    //3. Add info Window
    var infowindow = new google.maps.InfoWindow({
        content: addresString
    });
    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    //4. Resize Function 
    google.maps.event.addDomListener(window, 'resize', function() {
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});*/

/* =========================================
               Navigation
============================================ */

/* Show & Hide White Navigation */

$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png")

            //show back to top button
            $('#back-to-top').fadeIn();
        } else {
            $("nav").removeClass("white-nav-top")
            $(".navbar-brand img").attr("src", "img/logo/logo.png")
            $('#back-to-top').fadeOut();
        }
    }
});

/* Smooth Scrolling */
$(function () {

    $('a.smooth-scroll').click(function (e) {
        e.preventDefault;
        var section_id = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeOutExpo");
    });
});
/* =========================================
               Mobile Menu
============================================ */

$(function () {
    // Show mobile nav

    $('#mobile-nav-open-btn').click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});
/* =========================================
               WOW Animation
============================================ */

$(function () {
    new WOW().init();
});
// home animation on page load
$(window).on('load',function(){
    $('#home-heading-1').addClass('animated fadeInDown');
    $('#home-heading-2').addClass('animated fadeInLeft');
    $("#home-text").addClass('animated zoomIn');
    $("#home-btn").addClass('animated zoomIn');
    $("#arrow-down i").addClass('animated fadeInDown infinite');
});