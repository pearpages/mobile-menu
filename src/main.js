(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    var links = document.querySelectorAll('.menu-item a');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
    links.forEach(function (x) {
        x.onclick = function () {
            header.classList.toggle('menu-opened');
        }
    });
}());