(function ($) {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header-menu');

    burger.onclick = function () {
        header.classList.toggle('menu-opened');
    }
    $('.header-menu .menu .menu-item a').click(function (x) {
            header.classList.toggle('menu-opened');
    });

    $(document).ready(function () {
        var href = window.location.href.split('/');
        href = href[href.length-1];
        $('.header-menu a').each(function () {
            var link = $(this).attr('href');
            console.log(link);
            if ( link === href ) {
                $(this).addClass('active');
            }
        });

        $('.header-menu li a').click(
            function (e) {
                $('li a').removeClass('active');
                var href = $(e.currentTarget).attr('href');
                $('a[href="'+href+'"]').addClass('active');
            }
        );
    });

}($));