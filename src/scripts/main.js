// Main
$(window).scroll(function() {
    if ($(window).scrollTop() <= 20) {
        $('header').css('opacity', '0.8')
        $('header').css('box-shadow', 'initial')
    } else {
        $('header').css('opacity', '1')
        $('header').css('box-shadow', '0 0px 5px black')
    }
});
// $(window).scroll(function() {
//     $('header').css('opacity', '1')
// });
$(document).ready(function() {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function(e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
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
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            480: {
                nav: false,
                dots: true,
            },
            760: {
                nav: true,
                dots: false,
            },
            992: {
                nav: true,
                dots: false,
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
    });
    // Phần Show Sản Phẩm
    shopCanhCam3()
    $(".canhcam-shop-3 #price").slider({
        formatter: function(value) {
            return value;
        }
    });
    $(".canhcam-shop-3 #price").on("slide", function(slideEvt) {
        $(".canhcam-shop-3 #geVal").text(slideEvt.value);
    });
    selectCountriesShop3()

});

function selectCountriesShop3() {
    var datano = $('.canhcam-shop-3 #selectcountries').attr('data-no')
    $('.canhcam-shop-3 #selectcountries').select2({
        "language": {
            "noResults": function() {
                return datano;
            }
        },
        escapeMarkup: function(markup) {
            return markup;
        }
    }).on('select2:select', function(e) {
        var data = e.params.data;
        var attributes = e.target.value
        window.location.href = attributes
    });
}

function shopCanhCam3() {
    if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
        $('.canhcam-shop-3 #filterSearch').addClass('collapse')
    } else {
        $('.canhcam-shop-3 #filterSearch').removeClass('collapse')
    }
}

$(window).resize(function() {
    shopCanhCam3()
})

$('.canhcam-shop-3 .boxproducts [data-toggle="modal"]').each(function() {
    $(this).click(function() {
        var getcnt = $(this).parents('.item').find('.item-detail')
        $('#quickView .modal-title').html(getcnt.find('h2').html())
        $('#quickView .modal-body').html(getcnt.html())
        $('#quickView .quantity input').TouchSpin({
            min: 0,
            max: 100,
            buttondown_class: "btn btn-default",
            buttonup_class: "btn btn-default"
        });
        $('#quickView .list-thumb').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            autoplay: false
        });
    })
});

$(window).resize(function() {

})