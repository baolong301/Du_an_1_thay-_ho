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
        } });
});

$(window).resize(function () {});
//# sourceMappingURL=main.js.map
