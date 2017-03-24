(function ($) {

    init();

    function init() {
        toggleMenu();
        setActiveLinkOnLoad();
        setActiveOnClick();
        scrollSmoothlyFromAnchor();
        changeMenuColorOnScrollAndHighlightActiveSection();
    }

    function toggleMenu() {
        var burger = document.querySelector('.burger-container'),
            header = document.querySelector('.header-menu');

        burger.onclick = function () {
            header.classList.toggle('menu-opened');
        }
        $('.header-menu .menu .menu-item a').click(function (x) {
            header.classList.toggle('menu-opened');
        });
    }

    function setActiveLinkOnLoad() {
        var href = window.location.href;
        $('.header-menu ul.desktop a').each(function () {
            var link = $(this).attr('href');
            if (href.includes(link) == true) {
                $(this).addClass('active');
            }
        });
    }

    function setActiveOnClick() {
        $('.header-menu li a').click(
            function (e) {
                $('.header-menu li a').removeClass('active');
                var href = $(e.currentTarget).attr('href');
                $('a[href="' + href + '"]').addClass('active');
            }
        );
    }

    function scrollSmoothlyFromAnchor() {
        $(".header-menu li a[href*=\\#]").click(function (e) {
            var dest = $(this).attr('href');
            if (isTheAnchorInTheCurrentPage(dest)) {
                e.preventDefault();
                if (dest[0] === '/') {
                    dest = $(this).attr('href').substr(1);
                }
                $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
                window.location.href = window.location.origin + '/' + dest;
            } else {
                // do the normal thing...
            }
        });
    }

    function isTheAnchorInTheCurrentPage(dest) {
        if (dest[0] === '/') {
            dest = dest.substr(2);
        } else {
            dest = dest.substr(1);
        }
        if ($("section[id*=" + dest + "]").length > 0) {
            return true;
        } else {
            return false;
        }
    }

    function changeMenuColorOnScrollAndHighlightActiveSection() {
        $(window).scroll(function () {
            var scrollPos = $(window).scrollTop();

            changeMenuColorOnScroll(scrollPos);
            if(scrollPos > 0) {
                highlightActiveSection();
            }

            function highlightActiveSection() {
                $('section[id]').each(function () {
                    var section = $(this);
                    var top = section.position().top;
                    var id = section.attr('id');
                    if (top <= scrollPos + 1 && top + section.height() > scrollPos) {
                        $('.header-menu ul.desktop a').removeClass("active");
                        $('.header-menu ul.desktop a[href*="\\#' + id + '"]').addClass("active");
                    }
                    else {
                        section.removeClass("active");
                    }
                });
            }

            function changeMenuColorOnScroll(scrollPos) {
                if (scrollPos >= 50) {
                    $(".header-menu").addClass("scrolling");
                } else {
                    $(".header-menu").removeClass("scrolling");
                }
            }
        });
    }

}($));