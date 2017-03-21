(function ($) {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    var links = document.querySelectorAll('.menu-item a');

    burger.onclick = function () {
        header.classList.toggle('menu-opened');
    }
    links.forEach(function (x) {
        x.onclick = function () {
            header.classList.toggle('menu-opened');
        }
    });

    $(document).ready(function () {
        $('a').each(function () {
            var href = window.location.href.split('/');
            href = '/'+href[href.length-1];
            if ($(this).attr('href') === href ) {
                $(this).addClass('active');
            }
        });

        $('li a').click(
            function (e) {
                $('li a').removeClass('active');
                $(e.currentTarget).addClass('active');
            }
        );
    });

}($));