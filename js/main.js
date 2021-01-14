$(function () {
    if ( $(window).innerWidth() <= 640 ) {
        const mySiema = new Siema({
            selector: '.siema',
            perPage: 1,
            draggable: true,
            loop: true,
            duration: 400
        });
    } else if ( $(window).innerWidth() >= 641 && $(window).innerWidth() <= 860 ) {
        const mySiema = new Siema({
            selector: '.siema',
            perPage: 2,
            draggable: true,
            loop: true,
            duration: 400
        });
    } else if ( $(window).innerWidth() >= 861 ) {
        const mySiema = new Siema({
            selector: '.siema',
            perPage: 3,
            draggable: true,
            loop: true,
            duration: 400
        });
        document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
        document.querySelector('.next').addEventListener('click', () => mySiema.next());
    }

    $(window).scroll(function () {
        var bo = $("html").scrollTop();
        if (bo < 400) {
            $('.top-anchor').hide();
        } else if (bo > 400) {
            $('.top-anchor').show();
        }
    });
    $('.mobile-menu').click(function () {
        $('.header__menu').slideToggle("fast", function () {
            if ($('.header__menu').is(':hidden')) {
                $('.header__menu').removeAttr('style');
                $('.mobile-menu').css({
                    'background': 'url("./img/menu-button.png")',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat'
                });
            }
        });
        if ($('.header__menu').is(':visible')) {
            $('.mobile-menu').css({
                'background': 'url("./img/close-menu.png")',
                'background-size': 'contain',
                'background-repeat': 'no-repeat'
            });
        }
    });
});