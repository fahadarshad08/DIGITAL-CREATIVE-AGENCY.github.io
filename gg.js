
/* how to use Jquery */
/* =========================================
                Preloader
============================================ */
$(window).on('load',function(){
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut();
});


/* =========================================
                team
============================================ */
$('.team-mamber-slider').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    items:2,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
});

/*owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});*/

$('.testimonialslider2').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    items:1,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
});


/* =========================================
                team
============================================ */

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


/* =========================================
                responsive
============================================ */

$(function (){
    $("#services-tabs").responsiveTabs({
        animation:'slide'

    });
});
/* =========================================
                portfolio
============================================ */
$(window).on('load',function(){

    $('#isotope-container').isotope({

    });

    $("#isotope-filters").on('click','button', function(){

        var filterValue = $(this).attr('data-filter');
         $('#isotope-container').isotope({
                filter:filterValue
    });
    });

       $("#isotope-filters").find('.active').removeClass('active');
       $(this).addClass('active');
});

/* =========================================
                magnifier
============================================ */
$(function (){

   $("#portfolio-wrapper").magnificpopup({
        delegate: 'a',
        type:'image',
        gallery:{
            enabled: true
        }

    });
})

/* =========================================
                Testimonials
============================================ */
    $("#Testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></a>', '<i class="fa fa-angle-right"></a>' ]
    })
/* =========================================
                stats
============================================ */
$(function (){
    $(".counter").counterUp({
        delay:2,
        time:2000
    });    
    
})
/* =========================================
                clients
============================================ */
$(function (){
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></a>', '<i class="fa fa-angle-right"></a>' ]
    })
})

/* =========================================
                animation
============================================ */
$(function (){  
    new wow().init();
}); 

$(window).on('load', function() {
    $("#home-heading-1").addclass("animated fadeinInDown");
    $("#home-heading-2").addclass("animated fadeinInLeft");
    $("#home-text").addclass("animated zoomIn");
    $("#home-btn").addclass("animated zoomIn");
    $("#home-down i").addclass("animated fadeinInDown infinite");
});    




    /* Colors:
    Moon Yellow:            #f4c613
    Grey:                   #212226
    White Smoke:            #f4f4f4
    White:                  #fff
    Black:                  #000
    */

    /* =========================================
                    HTML, Body
    ============================================ */

    html,
    body {
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        color: #212226;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Raleway", sans-serif;
    }

    p {
        font-family: "Open Sans", sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
    }

    section {
        background: #fff;
        overflow: hidden;
    }
    *{
        margin: 0px;
        padding: 0px;
        border: 0px;
    }

    /* =========================================
                    Preloader
    ============================================ */

    #preloader {
        background-color: #fff;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }

    #status {
        background-image: url("../img/preloader/preloader.gif");
        background-repeat: no-repeat;
        width: 70px;
        height: 70px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -35px;
        margin-left: -35px;
    }


    /* =========================================
                        Home
    ============================================ */
#home {
    background: none;
    height: 100%;
}
    #home-bg-video {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    background: url(../video/solo.jpg) no-repeat;
    background-size: cover;
}
    #home-overlay{
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left:0 ;
        z-index: -1;
    }
    #home-content{
        width: 100%;
        height: 100%;
        display: table;
        
    }
    #home-content-inner{
        display: table-cell;
        text-align: center;
        vertical-align: middle;

    }
    #home-heading h1{
        color: #fff;
        font-size: 65px;
        font-weight: 100;
        text-transform: uppercase;
        margin: 0;
        display: inline-block;
    }
    #home-heading h1 span{
        color: #f4c613;
        font-weight: 500;
    }
    #home-text p {
        color: #fff;
        font-weight: 100;
        font-size: 17px;
        margin: 8px 0 30px 0;
    }
    /* =========================================
                   Buttons
    ============================================ */

    
/* =========================================
               Buttons
============================================ */

.btn-general {
    font-family: "Releway", sans-serif;
    border-radius: 28px;
    font-size: 13px;
    text-transform: uppercase;
    margin: 0 6px;
    padding: 12px 46px 12px 46px;
    -webkit-transition: all .5s;
    transition: all .10s;
}

.btn-home {
    color: #fff;
    border: 1px solid #fff;
}

.btn-home:hover,
.btn-home:focus {
    color: #fff;
    background-color: #f4c613;
    border: 1px solid #f4c613;
}

.btn-yellow {
    color: #fff;
    border: 1px solid #f4c613;
    background-color: #f4c613;
}

.btn-yellow:hover,
.btn-yellow:focus {
    color: #fff;
    background-color: #212226;
    border: 1px solid #212226;
}

.btn-white {
    color: #212226;
    border: 1px solid #fff;
    background-color: #fff;
}

.btn-white:hover,
.btn-white:focus {
    color: #fff;
    background-color: #212226;
    border: 1px solid #212226;
}

.btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 3px 15px;
    border-radius: 4px;
    font-size: 22px;
    display: none;
}



    /* =========================================
                   Arrow down 
    ============================================ */

    #arrow-down{
        position: absolute;
        left: 50%;
        bottom: 20px;
        color: #fff;
        font-size: 32px;
        width: 32px;
        height: 32px;
        text-align: center;
        margin-left: -16px;
        z-index: 1;
        font-weight: 500;
    }
    #arrow-down:hover,
    #arrow:focus {
        color: #f4c613;
    }
    #arrow-down i {
        animation-duration: 1.5s;
        animation-delay: 3s;
            }
    .animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;}

    /* =========================================
                    about
    ============================================ */
.content-box-lg {
    padding: 120px 0px;
}

.content-box-md {
    padding: 100px 0px
}

.content-box-sm {
    padding: 90px 0;
}
/* =========================================
        Vertical / Horizontal Headings
============================================ */

.vertical-heading h5 {
    color: #f4c613;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    word-spacing: 9px;
    display: inline-block;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: relative;
    top: 60px;
    left: -100px;
}

.vertical-heading h2 {
    margin: 0 0 0 35px;
    font-size: 42px;
    font-weight: 100;
    line-height: 45px;
}

.horizontal-heading h2,
.vertical-heading h2 {
    font-size: 42px;
    font-weight: 500;
    line-height: 45px;
}

.horizontal-heading {
    margin-bottom: 80px;
}

.horizontal-heading h5 {
    font-size: px;
    color: #f4c613;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 10px;
}

.horizontal-heading h2 {
    margin: 0;
}
/* =========================================
               About 01 
============================================ */

#about-right p:first-child {
    margin-bottom: 30px;
}

#about-bottom {
    margin-top: 60px;
}

#about-bottom img {
    margin: 0 auto;
}
/* =========================================
               about 02 
============================================ */
#about-02{
    background-color: #f4f4f4;
}
.about-item{
    background-color: white;
    padding: 80px 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.about-item i{
    font-size: 42px;
    margin: 0;
}
.about-item h3{
    font-size: 24px;
    margin-bottom: 10px;
}
.about-item hr{
    width: 45px;
    height: 3px;
    background-color: #f4c613;
    margin: 0 auto;
    border: none;
}
.about-item p{
    margin-top:20px;
}
/* =========================================
               hover state 
============================================ */
.about-item:hover {
    background-color: #f4c613;
}

.about-item:hover i,
.about-item:hover h3,
.about-item:hover p {
    color: #fff;
}

.about-item:hover hr {
    background-color: #fff;
}

.about-item:hover i {
    transform: translateY(-30px);
}








/* =========================================
               team 
============================================ */
#team-left .vertical-heading{
    min-height: 160px;
}
.team-mamber{
    margin: 8px;
}
.team-mamber-overlay{
    background-color: rgba(33,34, 38, .9);
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    transition: all 300ms linear
}
.team-member-info {
    width:100%;
    height: 100%;
    padding: 80px 0;


}
.team-member-info h6{
    color: #f4c613;
    font-size: 16px;

}
.team-member-info p{
    color: #fff;

}
.team-member:hover .team-mamber-overlay{
    opacity: 1;
}
/* =========================================
               SOCIAL ICON 
============================================ */
ul.social-list{
    padding: 0;
    margin-top: 20px;
}
ul.social-list li{
    display: inline-block;
    padding: 0;
}
ul.social-list li a{
    border: 1px solid #fff;
    width: 35px;
    height: 35px;
    display: inline-block;
    line-height: 35px;
    color: #fff;
    border-radius: 50%;

}
ul.social-list li:nth-child(1) a:hover{
    background: #3b5998;
    border-color: transparent;
}
ul.social-list li:nth-child(2) a:hover{
    background: #00aced;
    border-color: transparent;
}
ul.social-list li:nth-child(3) a:hover{
    background: #cd486b    ;
    border-color: transparent;
}
.owl-theme .owl-nav[class*=owl-]{
    color: #212226;
    font-size: 40px;
    background: none;
    margin: 0;
}
.owl-theme .owl-nav[class*=owl-]:hover{
    background: none;
    color: #212226;
}
/* =========================================
               skill 
============================================ */
.skill{
    margin-bottom: 20px;
}
.skill h4{
    line-height: 62px;
    margin: 0;
    font-weight: normal;
}
.progress{
    height: 25px;
    border-radius: 0;
    background: #efefef;
     overflow: visible;
}

.progress-bar {
    background-color: #f4c613;
    position: relative;
}

.progress-bar span {
    font-size: 11px;
    font-weight: 100;
    font-family: "Open sans", sans-serif;
    background: #212226;
    padding: 3px;
    position: absolute;
    left: 97%;
    top: -47px;
}

.progress-bar span:before {
    content: "";
    border-top: 8px solid #212226;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    bottom: -8px;
    left: 23%;
}
/* =========================================
               Statement 
============================================ */
#statement{
    background:url("../img/tech/tech-fahad.png") no-repeat fixed center;
    background-size: cover;
}
#tech-statement{
    color: black;
    font-size: 28px;
    line-height: 45px;
}
#statement .content-box-lg{
    background: rgba(0, 0, 0, 0.3);


}

.fahad{
   font-size: 35px;
    padding: 45px;
    color: black;
}
/* =========================================
                Services 01
============================================ */

#services-01 img {
    margin: 5px -207px;
}

.service {
    margin: 35px 0;
}

.service .icon {
    font-size: 42px;
    margin: 0;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}

.service:hover .icon {
    color: #f4c613;
    -webkit-transform: all 400ms linear;
    transform: translateX(-20px);
}

.service h5 {
    font-size: 12px;
    text-transform: uppercase;
    color: #f4c613;
    margin: 0 0 6px 0;
}

.service:hover h5 {
    color: #212226;
}

.service h4 {
    font-size: 24px;
    margin: 0 0 8px 0;
}

.service p {
    line-height: normal;
}
/* =========================================
        Services 02  (Responsive Tabs)
============================================ */

#services-02 {
    background: #f4f4f4;
}

#services-tabs ul {
    margin-bottom: 40px;
}

#services-tabs li {
    padding: 5px 30px;
}

#services-tabs ul li a {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    color: #212226;
    text-transform: uppercase;
    font-weight: 400;
    padding: 0;
    text-decoration: none;
}

/* =========================================
                Tab active state 
============================================ */

#services-tabs ul li.r-tabs-state-active a {
    color: #f4c613;
    font-weight: 700;
    border-bottom: 3px solid #f4c613;
    padding-bottom: 5px;
    -webkit-transition: border-color 300ms linear;
    transition: border-color 300ms linear;
}

.service-tab .col-md-6 {
    padding: 0;
}

.service-tab img {
    width: 100%;
    margin: 0 auto;
}

.service-tab .tab-bg {
    background: #fff;
    padding: 58px 30px;
    min-height: 481px;
}

.service-tab h2 {
    font-size: 48px;
    color: #bbb;
    margin-bottom: 20px;
    font-weight: 100;
}

.service-tab h3 {
    font-size: 32px;
    margin-bottom: 30px;
}

.service-tab p {
    line-height: 24px;
    margin-bottom: 30px;
}


    /* =========================================
                    fillter css
    ============================================ */



/* Filters CSS */

#isotope-filters {
    margin-bottom: 10px;
    padding: 20px 25px 20px 0;
}

#isotope-filters button {
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background: transparent;
    box-shadow: none;
    -webkit-box-shadow: none;
    padding-right: 35px;
    outline: 0;
}

#isotope-filters button span {
    display: block;
    padding-bottom: 5px;
    transition: border-color .4s ease-in-out;
    -webkit-transition: border-color .4s ease-in-out;
}

#isotope-filters button.active span {
    color: #f4c613;
    border-bottom: 3px solid #f4c613;
}

/* Zoom Effect  */

.portfolio-item img {
    width: 100%;
    height: auto;
    -webkit-transition: -webkit-transform .5s ease;
    transition: -webkit-transform .5s ease;
    transition: transform .5s ease, -webkit-transform .5s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
}

/* Overlay Effect  */

.portfolio-item-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(14, 14, 17, 0.9);
    cursor: -webkit-pointer;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

/* Item Details Effect */

.portfolio-item-details {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}

.portfolio-item-details h3 {
    color: #f4c613;
    text-transform: uppercase;
    font-size: 30px;
    margin: 0;
    padding: 0;
    transform: translateY(-20%);
    -webkit-transform: translateY(-20%);
    -webkit-transition: all 0.5s;
    transition: all 0.5s
}

.portfolio-item-details span {
    display: inline-block;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    height: 6px;
    width: 30px;
    margin: 11px auto 5px auto;
}

.portfolio-item-details p {
    font-size: 17px;
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    transform: translateY(20%);
    -webkit-transform: translateY(20%);
    -webkit-transition: all 0.5s;
    transition: all 0.5s
}

/* Show Overlay on mouse over */

.portfolio-item:hover .portfolio-item-details h3 {
    transform: translateY(0);
    -webkit-transform: translateY(0);
}

.portfolio-item:hover .portfolio-item-details p {
    transform: translateY(0);
    -webkit-transform: translateY(0);
}

.portfolio-item:hover .portfolio-item-overlay {
    opacity: 1;
}
.portfolio-item{
    overflow: hidden;
    position: relative;
}


/* =========================================
                Testimonials
============================================ */

#testimonials {
    background: #f4f4f4;
    padding-bottom: 45px;
    overflow: visible;
}

#testimonials .vertical-heading {
    padding: 80px 0;
    margin-bottom: 50px;
}

#testimonial-slider {
    background: #f4c613;
    top: -120px;
}

.testimonail .row {
    margin-bottom: 25px;
}

.testimonail {
    padding: 20px 45px 0 45px;
    color: #fff;
}

.testimonail h3 {
    font-size: 32px;
    line-height: 35px;
}

.testimonail .stars {
    font-size: 20px;
    margin: 20px 0 10px 0;
}

.testimonail p {
    line-height: normal;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 20px;
}

.autor .author-name-des {
    width: 106px;
    margin-top: 25px;
    text-align: left;
}

.autor .author-name-des p {
    margin: 0;
}


/* =========================================
                Pricing
============================================ */

.pricing-table {
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 32px 21px;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}

.pricing-table:hover {
    background: #f4c613;
}

.pricing-table .type h4 {
    color: #f4c613;
    font-size: 25px;
    margin-bottom: 25px;
}

.pricing-table .price {
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding: 24px 0;
}

.pricing-table .price h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 42px;
    font-weight: 100;
    margin: 0 0 0 24px;
    position: relative;
}

.pricing-table .price h2 span {
    font-family: "Raleway", sans-serif;
}

.pricing-table .price h2 span.dollar {
    font-size: 18px;
    font-weight: 300;
    position: absolute;
    left: -20px;
    top: 5px;
}

.pricing-table .price h2 span.month {
    font-size: 11px;
    font-weight: 400;
    position: absolute;
    left: 5px;
    bottom: -12px;
}

.pricing-table .price p {
    line-height: normal;
    font-weight: 200;
    margin: 0;
    padding: 0;
}

.pricing-table ul.package {
    list-style: none;
    padding: 20px 0
}

.pricing-table ul.package li {
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 40px;
}

.pricing-table ul.package li i {
    width: 24px;
}

.pricing-table .btn-yellow,
.pricing-table.black .btn-white {
    width: 96%;
}

.pricing-table:hover h4,
.pricing-table:hover h2,
.pricing-table:hover p,
.pricing-table:hover ul.package {
    color: #fff;
}

.pricing-table:hover .btn-yellow {
    background: #fff;
    color: #212226;
    border: 1px solid #fff;
}

.pricing-table .btn-yellow:hover,
.pricing-table .btn-yellow:focus {
    background: #212226;
    color: #fff;
    border: 1px solid #212226;
}

/* Black Pricing Table */

.pricing-table.black {
    background: #212226;
    color: #fff;
}

.pricing-table.black .type h4 {
    color: #fff;
}

.pricing-table.black:hover {
    background: #f4c613;
}


/* =========================================
            navbar-toggler-icon
============================================ */

.navbar-toggler-icon i{
    color: #f4c613;
}


/* =========================================
                Stats
============================================ */

#stats {
    background: url("../img/stats/stats-bg.jpg") no-repeat fixed center;
    background-size: cover;
}

#stats .content-box-md {
    background: rgba(0, 0, 0, 0.8);
}

#stats .vertical-heading {
    margin-bottom: 50px;
}

#stats .vertical-heading h2 {
    color: #fff;
}

.stats-item {
    background: rgba(61, 68, 68, 0.6);
    border-radius: 4px;
    min-height: 170px;
    padding: 25px 50px;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}

.stats-item i {
    font-size: 42px;
    color: #f4c613;
    margin: 0 0 6px 0;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}

.stats-item h3 {
    font-size: 32px;
    color: #fff;
    margin: 5px 0 5px 0;
}

.stats-item p {
    color: #fff;
    margin: 0;
}

.stats-item:hover {
    background: #f4c613;
}

.stats-item:hover i {
    color: #212226;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
}

/* =========================================
                Clients
============================================ */

#clients .horizontal-heading {
    margin-bottom: 30px;
}

#clients-list {
    padding: 45px 0 0 0;
}

.client {
    padding: 0 10px;
    max-width: 150px;
    margin: 0 auto;
    line-height: 100px;
}

.client img {
    display: inline-block !important;
}

/* =========================================
                Blog
============================================ */

#blog {
    background: #f4f4f4;
}

#blog-left p {
    margin: 25px 0;
}

#blog-btn a {
    margin: 0;
}

.blog-post {
    background: #fff;
    padding: 20px;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.blog-post h4 {
    line-height: 40px;
    margin: 0;
}

.blog-post>p {
    line-height: 24px;
    margin: 0;
    font-weight: 300;
}

.blog-post a {
    display: inline-block;
    margin-top: 25px;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    color: #f4c613;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}

.blog-post a:hover {
    color: #212226;
}

.blog-post .post-meta {
    border-top: 1px solid #e0e0e0;
    margin-top: 30px;
    padding-top: 10px;
}

.blog-post .post-meta p {
    font-size: 11px;
    font-family: "Raleway", sans-serif;
    line-height: 24px;
    font-weight: 500;
    margin: 0;
}

/* =========================================
                content
============================================ */

/* Contact Left */

#contact-left p {
    margin: 25px 0 20px 0;
}

ul.office-details {
    list-style: none;
    padding: 0;
}

ul.office-details li {
    font-family: "Open Sans", sans-serif;
    margin-top: 12px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}

ul.office-details li i {
    font-size: 20px;
    width: 45px;
}

#contact-left ul.social-list li a {
    color: #212226;
    border: 1px solid #212226;
    text-align: center;
}

#contact-left ul.social-list li a:hover {
    color: #fff;
    border-color: transparent;
}

/* Contact Right */

#contact-right {
    padding: 25px 30px;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

#contact-right {
    font-size: 24px;
}

#contact-right p {
    margin-bottom: 25px;
}

#contact-right form .form-control {
    font-family: "Open Sans", sans-serif;
    padding: 10px 15px;
    font-size: 12px;
    line-height: 24px;
}

#contact-right form textarea.form-control {
    min-height: 164px;
}


/* =========================================
                Google Map
============================================ */

#map {
    height: 450px;
    width: 100%;
}

/* =========================================
                Footer
============================================ */

footer {
    background: #212226;
    padding: 30px;
}

footer p {
    color: #fff;
    line-height: 20px;
    margin: 0;
}

footer p span {
    color: #f4c613;
}

/* =========================================
                Navigation
============================================ */

.navbar {
    padding: 35px 0 20px 0;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
}

.site-nav-wrapper {
    padding: 0 20px;
}

.nabar-brand {
    padding: 13px 15px;
}

ul.navbar-nav>li>a {
    font-family: "Raleway", sans-serif;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
}

ul.navbar-nav>li>a:hover,
ul.navbar-nav>li>a:focus {
    background: none;
    color: #f4c613;
}

/* White Navigation */

.white-nav-top {
    background: #fff;
    padding: 10px 0;
    -webkit-box-shadow: 0 8px 6px -9px #999;
    box-shadow: 0 8px 6px -9px #999;
    z-index: 2;
}

.white-nav-top ul.navbar-nav>li>a {
    color: #212226;
}

.white-nav-top ul.navbar-nav>li>a:hover,
.white-nav-top ul.navbar-nav>li>a:focus {
    color: #f4c613;
}

/* Scroll spy active state */

.white-nav-top ul.navbar-nav>li.active a {
    color: #f4c613;
    font-weight: 500;
}
 /* =========================================
                    Animation
    ============================================ */
    #home-heading-1 {
        animation-duration: `2.5s;
        animation-delay: 1s;
    }
    #home-heading-2 {
        animation-duration: 1.5s;
        animation-delay: 1s;
    }
    #home-text {
        animation-duration: 1.5s;
        animation-delay: 2s;
    }
    #home-btn {
        animation-duration: 1.5s;
        animation-delay: 2.5s;
    }
    #arrow-down i {
        animation-duration: 1.5s;
        animation-delay: 3s;
    }

    .content-box-lg {
    padding: 120px 0px;
}

.btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 3px 15px;
    border-radius: 4px;
    font-size: 22px;
    display: none;
}
