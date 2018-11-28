// Main
$(document).ready(function() {
	var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });

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
        autoplayHoverPause: true,
        callbacks: true
    });
    //Phần Sản Phẩm Hot Detail
    // if ($('.canhcam-carousel-2 .owl-carousel').length) {
    //     $('.canhcam-carousel-2 .owl-carousel').owlCarousel({
    //         animateIn: 'fadeIn',
    //         animateOut: 'fadeOut',
    //         items: 1,
    //         loop: false,
    //         center: false,
    //         padding: 10,
    //         margin: 20,
    //         navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    //         nav: true,
    //         dots: false,
    //         autoplay: false,
    //         autoplayTimeout: 5000,
    //         autoplayHoverPause: true,
    //         callbacks: true,
    //         responsive: {
    //             480: {
    //                 items: 2
    //             },
    //             768: {
    //                 items: 3,
    //                 nav: true,
    //                 dots: false
    //             },
    //             992: {
    //                 items: 4
    //             }
    //         }
    //     });
    // } else {
    //     $('.canhcam-carousel-2 .owl-carousel').owlCarousel({
    //         animateIn: 'fadeIn',
    //         animateOut: 'fadeOut',
    //         items: 1,
    //         loop: false,
    //         center: false,
    //         padding: 10,
    //         margin: 20,
    //         navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    //         nav: true,
    //         dots: false,
    //         autoplay: false,
    //         autoplayTimeout: 5000,
    //         autoplayHoverPause: true,
    //         callbacks: true,
    //         responsive: {
    //             480: {
    //                 items: 2
    //             },
    //             768: {
    //                 items: 3,
    //                 nav: true,
    //                 dots: false
    //             },
    //             992: {
    //                 items: 4
    //             }
    //         }
    //     });
    // }
    $('.carousel-2 .owl-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        center: false,
        padding: 10,
        margin: 20,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        callbacks: true,
        responsive: {
            480: {
                items: 2
            },
            768: {
                items: 3,
                nav: true,
                dots: false
            },
            992: {
                items: 4
            }
        }
        // items: 1,
        // loop: true,
        // center: false,
        // padding: 10,
        // margin: 20,
        // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        // nav: false,
        // dots: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        // callbacks: true
    });
});

$(window).resize(function() {

})
