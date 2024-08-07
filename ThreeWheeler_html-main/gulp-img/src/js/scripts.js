
$(document).ready(function () {

    $('.banner-slider').slick({
        arrows: false,
        draggable: true,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 300,
        infinite: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        },

        ],
    });

    /* ICE & EV Video Slider  */
    $('.iceev-video-slider').slick({
        arrows: true,
        draggable: true,
        infinite: false,
        dots: false,
        slidesToShow: 3,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ],
    });

    $('.testimonials-slider').slick({
        arrows: true,
        draggable: true,
        infinite:false,
        dots: false,
        slidesToShow: 3,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        ],
    });

    // * Our Product Section * //
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    //centerPadding: '50px 0px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    autoplay: false,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    $('.passenger-slider').slick({
        arrows: true,
        draggable: true,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            }
        },
        ],
    });
    /* Feature Slider */
    $('.feature-slider').slick({
        arrows: true,
        draggable: false, 
        dots: false,
        slidesToShow: 3,    
        infinite: false, 
        prevArrow: '<button type="button" data-role="none" class="slick-prev" onClick="PushDataLayerGeneral(\'Vehicle_Features\',\'Vehicle Features\',$(\'#our-product-section .nav-link.active\').text(),\' left arrow\')">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" onClick="PushDataLayerGeneral(\'Vehicle_Features\',\'Vehicle Features\',$(\'#our-product-section .nav-link.active\').text(),\' right arrow\')">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        ],
    });
    $('.feature-slider-mobile').slick({
        arrows: true,
            draggable: false, 
            dots: false,
            slidesToShow: 3,    
            infinite: false, 
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: false,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        ],
    });

    /* Finance Slider */
    $('.finance-slider').slick({
        arrows: false,
        draggable: false,
        dots: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToScroll: 2,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1,
            },
        },

        ],
    });

    /* Product page slider */
    $('.tvs-product-slider').slick({
        arrows: true,
        draggable: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        fade: true,
        speed: 30,
        infinite: true,
        cssEase: 'ease-in-out',
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            },
        }
        ],
    });

    /* Accessories slider */
    $('.accessories-slider').slick({
        arrows: true,
        draggable: true,
        dots: false,
        //infinite: false,
        slidesToShow: 1,
        fade: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" onClick="PushDataLayerSubmit(\'Accessories\',\'Accessories\',\'Arrow Click\',\'Left Arrow\',$(\'#variantName\').val())">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" onClick="PushDataLayerSubmit(\'Accessories\',\'Accessories\',\'Arrow Click\',\'Right Arrow\',$(\'#variantName\').val())">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            },
        },
        ],
    });

    /* product card slider */
    $('.productvarient-slider').slick({
        arrows: false,
        draggable: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            },
        },
        ],
    });

    $('.target-link').on('click', function (e) {
        var screenWidth = window.outerWidth;
        e.preventDefault();
        var targetValue = $(this).attr('href');
        tabsTarget = $(this).attr('data-target');
        if (tabsTarget) {
            $('#pills-tab a[href="' + tabsTarget + '"]').tab('show');
        }
        if (tabsTarget) {
            $('#pills-tab a[href="' + tabsTarget + '"]').tab('show');
        }
        var htmlString = $(this).html();
        $('.responsive-link').text(htmlString);
        if (targetValue === '#smartXonnect-section') {
            if (screenWidth > 992) {
                $('html, body').animate({
                    scrollTop: $(targetValue).offset().top,
                },
                    1000
                );
            } else if (screenWidth < 991.98) {
                $('html, body').animate({
                    scrollTop: $(targetValue).offset().top - 50,
                },
                    1000
                );
            }
        } else {
            if (screenWidth > 992) {
                $('html, body').animate({
                    scrollTop: $(targetValue).offset().top - 50,
                },
                    1000
                );
            } else if (screenWidth < 991.98) {
                $('html, body').animate({
                    scrollTop: $(targetValue).offset().top - 80,
                },
                    1000
                );
            }
        }
    });
    /* Map Toggle button code */
    $('.map-btn').on('click', function (e) {
        $('.list-btn').removeClass('active');
        $(this).addClass('active');
        $('.ride-change-wrapper.bg-none').addClass('map-view');
    });

    $('.list-btn').on('click', function (e) {
        $('.map-btn').removeClass('active');
        $(this).addClass('active');
        $('.ride-change-wrapper.bg-none').removeClass('map-view');
    });

    /* Go to top Code */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".arrow-goto-top").fadeIn();
        } else {
            $(".arrow-goto-top").fadeOut();
        }
    });
    $(".arrow-goto-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500)
    });

    $('#multiselect').multiselect({
        includeSelectAllOption: true,
        numberDisplayed: 2,
        nonSelectedText: 'Interested In'
    });
    
    
});

if (window.outerWidth < 991) {  
    $('#multiselect').multiselect({
        includeSelectAllOption : true,
        numberDisplayed: 1,
            nonSelectedText: 'Interested in'
      });
}
/* Fade in Fade out Text */

(function ($) {
    $.fn.extend({
        rotaterator: function (options) {
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
                child: null
            };
            var options = $.extend(defaults, options);
            return this.each(function () {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function () { $(this).hide(); })
                if (!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function () {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                        var next = $(this).next();
                        if (next.length == 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({ child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed });
                    })
                });
            });
        }
    });
})(jQuery);

$(document).ready(function () {
    $('#rotate').rotaterator({ fadeSpeed: 800, pauseSpeed: 200 });
    $('#rotate-mobile').rotaterator({ fadeSpeed: 800, pauseSpeed: 200 });
}); 

function savCookie() {
    localStorage.setItem("cookieenabled", "Yes"),
        $(".cookie_bot").fadeOut(),
        $(bottomCtaSticky).addClass("nocookie"),
        $(bottomCtaSticky).removeClass("yescookie")
}

(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function (d) {
    var c = "ellipsis",
        b = '<span style="white-space: nowrap;">',
        e = {
            lines: "auto",
            ellipClass: "ellip",
            responsive: false
        };

    function a(h, q) {
        var m = this,
            w = 0,
            g = [],
            k, p, i, f, j, n, s;
        m.$cont = d(h);
        m.opts = d.extend({}, e, q);

        function o() {
            m.text = m.$cont.text();
            m.opts.ellipLineClass = m.opts.ellipClass + "-line";
            m.$el = d('<span class="' + m.opts.ellipClass + '" />');
            m.$el.text(m.text);
            m.$cont.empty().append(m.$el);
            t()
        }

        function t() {
            if (typeof m.opts.lines === "number" && m.opts.lines < 2) {
                m.$el.addClass(m.opts.ellipLineClass);
                return
            }
            n = m.$cont.height();
            if (m.opts.lines === "auto" && m.$el.prop("scrollHeight") <= n) {
                return
            }
            if (!k) {
                return
            }
            s = d.trim(m.text).split(/\s+/);
            m.$el.html(b + s.join("</span> " + b) + "</span>");
            m.$el.find("span").each(k);
            if (p != null) {
                u(p)
            }
        }

        function u(x) {
            s[x] = '<span class="' + m.opts.ellipLineClass + '">' + s[x];
            s.push("</span>");
            m.$el.html(s.join(" "))
        }
        if (m.opts.lines === "auto") {
            var r = function (y, A) {
                var x = d(A),
                    z = x.position().top;
                j = j || x.height();
                if (z === f) {
                    g[w].push(x)
                } else {
                    f = z;
                    w += 1;
                    g[w] = [x]
                }
                if (z + j > n) {
                    p = y - g[w - 1].length;
                    return false
                }
            };
            k = r
        }
        if (typeof m.opts.lines === "number" && m.opts.lines > 1) {
            var l = function (y, A) {
                var x = d(A),
                    z = x.position().top;
                if (z !== f) {
                    f = z;
                    w += 1
                }
                if (w === m.opts.lines) {
                    p = y;
                    return false
                }
            };
            k = l
        }
        if (m.opts.responsive) {
            var v = function () {
                g = [];
                w = 0;
                f = null;
                p = null;
                m.$el.html(m.text);
                clearTimeout(i);
                i = setTimeout(t, 100)
            };
            d(window).on("resize." + c, v)
        }
        o()
    }
    d.fn[c] = function (f) {
        return this.each(function () {
            try {
                d(this).data(c, (new a(this, f)))
            } catch (g) {
                if (window.console) {
                    console.error(c + ": " + g)
                }
            }
        })
    }
}));

$('.overflow').ellipsis();
$('.ellipsis-3').ellipsis({
    lines: 3
});
$('.box--responsive').ellipsis({
    responsive: true
});

$(document).ready(function () {
    $("li.product-nav-menu").click(function () {
        $(".mega-menu").toggle(300);
    });
});

$('.menu-button').on('click', function () {
    $('.jumplinks-menu-wrapper').toggleClass('jlinks-menu-hidden');
    $('.menu-cross').toggleClass('cross-hidden');
});
