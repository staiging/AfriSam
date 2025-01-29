(function ($) {
    $(function () {

        $('#phone-nav').click(() => {
            $('body').toggleClass('navShown')
        })

        var header = new Headroom(document.querySelector("header"), {
            tolerance: 5,
            offset: 40,
            classes: {
                initial: "animated",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();

        if ($('.scroll-nav-wrap').length) {
            var scrollNavwrap = new Headroom(document.querySelector(".scroll-nav-wrap"), {
                tolerance: 5,
                offset: 40,
                classes: {
                    initial: "scroll-nav-show",
                    pinned: "scroll-nav-slideUp",
                    unpinned: "scroll-nav-slideDown"
                }
            });
            scrollNavwrap.init();
        }



        if($(window).width() > 768){
            var screenHeight = window.screen.availHeight - 128;
            console.log(screenHeight)
            $('.fixed-height').css({'height': screenHeight});
        }

        



        if ($('.section-scroll').length) {
            // $('.scroll-nav-link ul li a').bind('click', function (e) {
            //     e.preventDefault();
            //     var target = $(this).attr("href");
            //     $('html, body').stop().animate({
            //         scrollTop: $(target).offset().top - 50
            //     }, 600, function () {
            //         location.hash = target;
            //     });
            //     return false;
            // });
            $(window).scroll(function () {
                var scrollDistance = $(window).scrollTop()+50
                $('.section-scroll').each(function (i) {
                    if ($(this).position().top <= scrollDistance) {
                        $('.scroll-nav-link ul li a.nav-active').removeClass('nav-active');
                        $('.scroll-nav-link ul li a').eq(i).addClass('nav-active');
                    }
                });
            }).scroll();
        }

        $('.calculator-tab-trigger ul li:first-child').addClass('tab-active');
        $('.calculator-tab-content:first').show();

        $('.calculator-tab-trigger ul li a').click(function (e) {
            e.preventDefault();
            $('.calculator-tab-trigger ul li').removeClass('tab-active');
            $(this).parent('li').addClass('tab-active');
            $('.calculator-tab-content').hide();
            $('.calculator-tab-row-wrap').show()
            $('.calculator-result-row').hide()

            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        /*  Btn Animation */
        $('.circle-btn').parent('a').parent('li').addClass('circle-btn-hover');
        $('.sub-menu').parent('li').addClass('has-sub-nav')
        $('.main-nav ul li.has-sub-nav').append('<em></em>')




        if ($('.category-card-item-wrap').length) {
            $('.category-card-item-wrap').slick({
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
                infinite: false,
                responsive: [{
                    breakpoint: 999999,
                    settings: "unslick"

                }, {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,

                    }
                }, {
                    breakpoint: 480,
                    settings: "unslick"
                }]
            });
            $(window).on('resize', function () {
                $('.category-card-item-wrap').slick('resize');
            });
        }

        if ($('.position-sticky').length) {
            $('body').addClass('is-sticky')
        }

        $('.calculator-tab-row-item').each(function () {
            var $$this = $(this);
            $$this.find('.calculator-tab-select-dropdown em').click(function () {
                $(this).parent('.calculator-tab-select-dropdown').addClass('dropdown-active');
                $$this.find('.calculator-tab-select-dropdown').find('ul').slideToggle();
            })
            $$this.find('.calculator-tab-select-dropdown ul li').click(function () {
                var valText = $(this).text(),
                    showText = $$this.find('.calculator-tab-select-dropdown em')
                console.log(valText)
                $('.calculator-tab-select-dropdown ul li').removeClass('dropdown-inner-active')
                $(this).parents('.calculator-tab-select-dropdown').addClass('dropdown-inner-active')
                $(this).parents('.calculator-tab-select-dropdown').addClass('dropdown-inner-active')
                $$this.find('.calculator-tab-select-dropdown').removeClass('dropdown-active')
                $$this.find('.calculator-tab-select-dropdown').find('ul').slideUp();
                showText.text(valText)
            })
        })

        //FAQs Accordion Function
        $(".faq-tab-content ul li").each(function () {
            var $this = $(this);
            $this.find(" > a").on("click touch", function (e) {
                e.preventDefault();
                $(".faq-tab-content ul li").removeClass("active")
                $(".faq-accordion").slideUp();
                if ($this.find(".faq-accordion:visible").length) {
                    $(".faq-tab-content ul li").removeClass("active")
                    $(".faq-accordion").slideUp();
                } else {
                    $this.addClass("active")
                    $(".faq-accordion").slideUp();
                    $this.find(" > .faq-accordion").slideDown();
                }
            })
        })

        $('.faq-tab-trigger ul li:first-child').addClass('tab-active');
        $('.faq-tab-content:first').show();

        $('.faq-tab-trigger ul li a').click(function (e) {
            e.preventDefault();
            $('.faq-tab-trigger ul li').removeClass('tab-active');
            $(this).parent('li').addClass('tab-active');
            $('.faq-tab-content').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });

        // $('a.details-btn').on("click", function (e) {
        //     e.preventDefault();
        //     var dest = $(this).attr("href");
        //     $("html, body").animate({
        //         'scrollTop': $(dest).offset().top
        //     }, 1500);
        // });
        if($(window).width() > 992){
            if ($('.scroll-nav-wrap').length) {
                var sectionHeight = $('.product-content-wrap').outerHeight(true);
                $(window).on('resize', function () {
                    sectionHeight = $('.product-content-wrap').outerHeight(true);
                })
                $(window).scroll(function () {
                    var sectionscrollTop = $(window).scrollTop();
                    if (sectionscrollTop > sectionHeight) {
                        $('body').removeClass('headerHide')
                    } else {
                        $('body').addClass('headerHide')
                    }
                    if (sectionscrollTop == 0) {
                        $('body').removeClass('headerHide')
                    }
                })
            }

        }

        $('.calculator-tab-content').find('.calculator-tab-row-wrap').eq(0).fadeIn()
        $('.calculator-btn').click(function (e) {
            e.preventDefault()
            $(this).parents('.calculator-tab-content').find('.calculator-tab-row-wrap').hide()
            $(this).parents('.calculator-tab-content').find('.calculator-result-row').fadeIn()
        })
        $('.reset').click(function (e) {
            e.preventDefault();
        })

        $('.scroll-nav-slide-trigger a, .see-different-products ').click(function (e) {
            e.preventDefault();
            $('body').addClass('slide-out-show');
            $('html').addClass('slideShown');
            $(function () {
                var el = $('.slide-out-card');
                var index = 0;
                var timer = window.setInterval(function () {
                    if (index < el.length) {
                        el.eq(index++).addClass('slide-out-card-show');
                    } else {
                        window.clearInterval(timer);
                    }
                }, 200);
            });

        })

        $('.slide-out-cross').click(function () {
            $('body').removeClass('slide-out-show');
            $('html').removeClass('slideShown');
            $(function () {
                var el = $('.slide-out-card');
                var index = 0;
                var timer = window.setInterval(function () {
                    if (index < el.length) {
                        el.eq(index++).removeClass('slide-out-card-show');
                    } else {
                        window.clearInterval(timer);
                    }
                }, 100);
            });

        })

        $('.slide-out-wrap').click(function(e){
            $('body').removeClass('slide-out-show');
            $('html').removeClass('slideShown')
        })
        $('.slide-out-inner').click(function(e){
            e.stopPropagation();
        })

        if($(window).width() < 481){

            $('.calculator-tab-trigger').each(function(){
                var $$this = $(this),
                    showValue = $('.calculator-tab-trigger em');
                console.log('test')
                $$this.find('em').click(function(){
                    $$this.find('ul').slideToggle();
                })

                $('.calculator-tab-trigger ul li a').click(function(){

                    textValue = $(this).text();
                    $$this.find('ul').slideUp();
                    showValue.text(textValue)
                })

            })
        }

        // Start Cement 
        $('.product-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.product-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.product-tab-item-wrap .product-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if($('.second-product').length){
            $('body').addClass('second-product-page')
        }

        // Start Subnav
        $('.has-sub-nav > a').append('<dfn></dfn>')
        if($(window).width() > 993){
        //     $('.sub-menu-content > ul > li').each(function(){
        //         var $this = $(this);
        //         $this.mouseenter( function(){

        //             // $('.sub-sub-nav').fadeOut(0);
        //             // $this.find('.sub-sub-nav').fadeIn(0);
        //             $('.sub-menu-content > ul > li').removeClass('sub-sub-nav-active');
        //             $this.addClass('sub-sub-nav-active');

        //         })

        //         $this.find('> a').click( function(e){
        //             e.preventDefault()

        //         })

        //     })

        //     $('.main-nav > ul > li').each(function(){
        //         var $this = $(this);

        //         $this.mouseenter( function(){
        //             $('.sub-menu').hide();
        //             $this.find('.sub-menu').show();
        //             $this.find('.sub-menu').addClass('sub-menu-show');
        //             $('.main-nav > ul > li').removeClass('submenu-active')
        //             $this.addClass('submenu-active')
        //         })
        //         $this.find('> a').mouseenter(function(){
        //             $this.find('.sub-menu').fadeToggle();
        //             // $('.sub-sub-nav').fadeOut(0);
        //             $this.find('.sub-menu').removeClass('sub-menu-show');
        //             $('.sub-menu-content > ul > li').removeClass('sub-sub-nav-active');
        //             /*   $('.main-nav > ul > li').removeClass('submenu-active')*/
        //             $this.toggleClass('submenu-active')
        //         })

        //         $this.click(function(e){
        //             e.preventDefault();
        //         })
        //     })

        //     $('.sub-menu').click(function(){
        //         $(this).hide();
        //         $('.submenu-active').removeClass('submenu-active')
        //     })

        //     $('.sub-menu-innar').click(function(e){
        //         e.stopPropagation();
        //     })


            $('.main-nav > ul > li').each(function(){
                var $this = $(this);
                $this.mouseenter( function(){
                    $('.sub-menu').hide();
                    $this.find('.sub-menu').show();
                    $('.main-nav > ul > li').removeClass('submenu-active')
                    $this.addClass('submenu-active')
                })
            })

             $('.sub-menu-innar').mouseleave(function(e){
                $('.sub-menu').hide();
                $('.submenu-active').removeClass('submenu-active')
            })
        }

        if($(window).width() < 993){
            $(".has-sub-nav").each(function(){
                var $this = $(this);
                $this.find("> a, em").on("click touch", function(e){
                    e.preventDefault();
                    $(".main-nav > ul > li").removeClass("accordion-active")
                    $(".sub-menu").slideUp();
                    if($this.find(".sub-menu:visible").length){
                        $(".main-nav > ul > li").removeClass("accordion-active")
                        $(".sub-menu").slideUp();
                    }
                    else{
                        $this.addClass("accordion-active")
                        $(".sub-menu").slideUp();
                        $this.find(" > .sub-menu").slideDown();
                    }
                })
            })


            $(".sub-menu-content > ul > li").each(function(){
                var $this = $(this);
                $this.find(" > a").on("click touch", function(e){
                    e.preventDefault();
                    $(".sub-menu-content > ul > li").removeClass("accordion-active")
                    $(".sub-sub-nav").slideUp();
                    if($this.find(".sub-sub-nav:visible").length){
                        $(".sub-menu-content > ul > li").removeClass("accordion-active")
                        $(".sub-sub-nav").slideUp();
                    }
                    else{
                        $this.addClass("accordion-active")
                        $(".sub-sub-nav").slideUp();
                        $this.find(" > .sub-sub-nav").slideDown();
                    }
                })
            })

        }

        $('.calculator-tab-content').each(function(){
            $$_this = $(this);

            $$_this.find('.calculator-btn').click(function(e){
                e.preventDefault()
                $$_this.find('.calculator-tab-row-wrap').hide();
                $$_this.find('.calculator-result-row').show();
                console.log('show')

            })

            $$_this.find('.back-btn').click(function(e){
                e.preventDefault()
                $('.calculator-tab-row-wrap').show();
                $('.calculator-result-row').hide();

            })

        })

        if($(window).width() > 480){
            if ($('#product-slider').length) {
                $('#product-slider').slick({
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: false,
                    arrows: false,
                    responsive: [{
                        breakpoint: 999999,
                        settings: "unslick"

                    }, {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false,

                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    }]
                });
                $(window).on('resize', function () {
                    $('#product-slider').slick('resize');
                });
            }

            if ($('#expert-advice-card-wrap').length) {
                $('#expert-advice-card-wrap').slick({
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    responsive: [{
                        breakpoint: 999999,
                        settings: "unslick"

                    }, {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false,

                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    }]
                });
                $(window).on('resize', function () {
                    $('#expert-advice-card-wrap').slick('resize');
                });
            }
            if ($('#latest-news-card-slider').length) {
                $('#latest-news-card-slider').slick({
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: false,
                    arrows: false,
                    infinite: true,
                    responsive: [{
                        breakpoint: 999999,
                        settings: "unslick"

                    }, {
                        breakpoint: 993,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false,

                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    }]
                });
                $(window).on('resize', function () {
                    $('#latest-news-card-slider').slick('resize');
                });
            }

            if ($('.how-to-wrap .latest-news-card-wrap').length) {
                $('.how-to-wrap .latest-news-card-wrap').slick({
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    responsive: [{
                        breakpoint: 999999,
                        settings: "unslick"

                    }, {
                        breakpoint: 767,
                        settings: "unslick"
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    }]
                });
                $(window).on('resize', function () {
                    $('.how-to-wrap .latest-news-card-wrap').slick('resize');
                });
            }

            if ($('.product-slider').length) {
                var prevArrow = $('.product-arrow-prev'),
                    nextArrow = $('.product-arrow-next');
                $(".product-slider").not('.slick-initialized').slick({
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: false,
                    arrows: true,
                    prevArrow: prevArrow,
                    nextArrow: nextArrow,
                    infinite: false,
                    responsive: [ {
                        breakpoint: 922,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    },{
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            autoplaySpeed: 2000,
                        }
                    }]

                });
                $(window).on('resize', function () {
                    $('.product-slider').slick('resize');
                });
            }   

        }



        if($(window).width() < 481){


            if ($('#product-slider').length) {
                window._ = new Glider(document.querySelector('#product-slider'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                });
            }

            if ($('#expert-advice-card-wrap').length){
                window._ = new Glider(document.querySelector('#expert-advice-card-wrap'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                }); 
            }

            if ($('#latest-news-card-slider').length) {
                window._ = new Glider(document.querySelector('#latest-news-card-slider'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                }); 
            }

            if ($('.how-to-wrap .latest-news-card-wrap').length){
                window._ = new Glider(document.querySelector('.how-to-wrap .latest-news-card-wrap'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                });
            }

            if ($('.product-slider').length){
                window._ = new Glider(document.querySelector('.product-slider'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                });
            }


        }

        // $(".about-intro-scroll .scroll-bottom-btn a, .history-content .scroll-bottom-btn a ").click(function (e) {
        //     e.preventDefault()
        //     $('html, body').animate({
        //         scrollTop: $("#scroll-section").offset().top
        //     }, 500);
        // })

        $('.expert-our-team-wrap .expert-advice-card').click(function (e) {
            e.preventDefault()
            $('.expert-our-team-wrap .expert-advice-card').removeClass('expert-advice-active');
            $(this).addClass('expert-advice-active');
            $('.team-member-slideout-wrap').removeClass('expert-advice-modal-active');
            $('.executive-modal-overlay').fadeIn();
            $('body').addClass('expert-advice-modal-show')
            $('html').addClass('slideShown')
            var activeTab = $(this).attr('href');
            $(activeTab).addClass('expert-advice-modal-active');
            return false;
        });


        $('.next-member-name').click(function(){
            $(this).parents('.team-member-slideout-wrap').removeClass('expert-advice-modal-active');
            $(this).parents('.team-member-slideout-wrap').next().addClass('expert-advice-modal-active');
        })

        $('.team-member-slideout-wrap:last .next-member-name').click(function(){
            $('.executive-modal-overlay').fadeOut();
            $('body').removeClass('expert-advice-modal-show')
            $('html').removeClass('slideShown')
        })

        $('.team-member-slideout-cross').click(function(){
            $('.team-member-slideout-wrap').removeClass('expert-advice-modal-active');
            $('.executive-modal-overlay').fadeOut();
            $('body').removeClass('expert-advice-modal-show')
            $('html').removeClass('slideShown')
        })
        $('.executive-modal-overlay').click(function(){
            $('.team-member-slideout-wrap').removeClass('expert-advice-modal-active');
            $('.executive-modal-overlay').fadeOut();
        })

        if($('.blog-article').length){
            $('body').addClass('is-sticky')
        }

        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .not('.calculator-tab-trigger ul li a')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top-32
                }, 1000 );
              }
            }
          });


    }) // End ready function.


    $('h1,h2,h3,h4,h5').addClass('anim-el')

    // ANIMATION CHECK IF IN VIEW
    var $animation_elements = $('.anim-el');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var insetAmount = window_height / 20 // fifth of the screen
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height) - insetAmount;

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {
                if(!$element.hasClass('anim-once')) {
                    $element.removeClass('in-view');
                }
            }
        });
    }
    $window.on('scroll orientationchange resize', check_if_in_view);
    $window.trigger('scroll');
    const updateProperties = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`)
        elem.style.setProperty('--y', `${state.y}px`)
        elem.style.setProperty('--width', `${state.width}px`)
        elem.style.setProperty('--height', `${state.height}px`)
        elem.style.setProperty('--radius', state.radius)
        elem.style.setProperty('--scale', state.scale)
    }  




    if($('.home').length){
        $('body').addClass('home-page')
    }

    var windowHeight = $('.main-wrap').height() / 3

    $('.related-product-scroll .scrolling-text-content').css({'left': windowHeight});

    $('.scrolling-text-content').each(function () {
        var scrollText = $(this) 
        $(window).on('scroll', function () {
            var pos = $(window).scrollTop() / 1.5
            scrollText.css({'-webkit-transform':'translateX(' + -pos + 'px)'});
        })
    })



    var mac = 0;
    if (navigator.userAgent.indexOf('Mac') > 0) {
        mac = 1;
    } else {
        mac = 0;
    }
    if (1 == mac) {
        $('body').addClass('mac-os');
    }else {
        $("body").addClass('win-os');
    }



})(jQuery)