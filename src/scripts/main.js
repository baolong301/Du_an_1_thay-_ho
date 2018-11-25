// Main
$(document).ready(function() {
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        loop: true,
        autoplayHoverPause: true,
    });
    // Phần Banner Sản Phẩm
    $('.home_service .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            480: {
                nav: false,
            },
            760: {
                nav: true
            },
            992: {
                nav: true
            }

        }
    });
    // Phần Khách Hàng
    $(document).ready(function() {
        $('.canhcam-testimonials-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true
        });

    });

    $(window).resize(function() {

    })


});