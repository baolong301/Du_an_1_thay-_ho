'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
// Main
$(window).scroll(function () {
    if ($(window).scrollTop() <= 20) {
        $('header').css('opacity', '0.8');
        $('header').css('box-shadow', 'initial');
    } else {
        $('header').css('opacity', '1');
        $('header').css('box-shadow', '0 0px 5px black');
    }
});
// $(window).scroll(function() {
//     $('header').css('opacity', '1')
// });
$(document).ready(function () {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);

        // Increment
    });

    $('.quantity-left-minus').click(function (e) {
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
    $('.home-slider .owl-carousel').owlCarousel(_defineProperty({
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    }, 'loop', true));
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
                nav: false
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
    shopCanhCam3();
    $(".canhcam-shop-3 #price").slider({
        formatter: function formatter(value) {
            return value;
        }
    });
    $(".canhcam-shop-3 #price").on("slide", function (slideEvt) {
        $(".canhcam-shop-3 #geVal").text(slideEvt.value);
    });
    selectCountriesShop3();
});

function selectCountriesShop3() {
    var datano = $('.canhcam-shop-3 #selectcountries').attr('data-no');
    $('.canhcam-shop-3 #selectcountries').select2({
        "language": {
            "noResults": function noResults() {
                return datano;
            }
        },
        escapeMarkup: function escapeMarkup(markup) {
            return markup;
        }
    }).on('select2:select', function (e) {
        var data = e.params.data;
        var attributes = e.target.value;
        window.location.href = attributes;
    });
}

function shopCanhCam3() {
    if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
        $('.canhcam-shop-3 #filterSearch').addClass('collapse');
    } else {
        $('.canhcam-shop-3 #filterSearch').removeClass('collapse');
    }
}

$(window).resize(function () {
    shopCanhCam3();
});

$('.canhcam-shop-3 .boxproducts [data-toggle="modal"]').each(function () {
    $(this).click(function () {
        var getcnt = $(this).parents('.item').find('.item-detail');
        $('#quickView .modal-title').html(getcnt.find('h2').html());
        $('#quickView .modal-body').html(getcnt.html());
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
    });
});

$(window).resize(function () {});
//# sourceMappingURL=main.js.map
