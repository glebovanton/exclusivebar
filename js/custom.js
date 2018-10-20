window.onload = function () {
    setTimeout(function () {
        $("#page-preloader").fadeOut();
    }, 1000)
};
$(".video-container").fitVids();
$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http://workglebov@gmail.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353"
});

function mailchimpCallback(resp) {
    if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
    } else if (resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }
}

$(document).ready(function () {
    $('.main-navigation').onePageNav({scrollThreshold: 0.2, filter: ':not(.external)', changeHash: true});
});
$(document).ready(function () {
    $('.fetaure-details, .buttons').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 500);
    });
    $('#brief1').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top + 80}, 500);
    });
});
$('.main-navigation>li').click(function () {
    $(this).parents('.navbar-collapse').removeClass('in');
});
if (matchMedia('(max-width: 480px)').matches) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}

function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 40) $('.sticky-navigation').css({'background-color': 'rgba(0, 0, 0, 0.85)'}); else $('.sticky-navigation').css({'background-color': 'rgba(0, 0, 0, 0.19)'});
}

$(document).ready(function () {
    mainNav();
});
$(window).scroll(function () {
    mainNav();
});

/*if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'}); else $('.sticky-navigation').stop().animate({"top": '-95'});
    }
}
if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'}); else $('.sticky-navigation').stop().animate({"top": '-120'});
    }
}*/


function alturaMaxima() {
    var altura = $(window).height();
    $(".full-screen").css('min-height', altura);
}

$(document).ready(function () {
    alturaMaxima();
    $(window).bind('resize', alturaMaxima);
});
/*var scrollAnimationTime = 1200, scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({'scrollTop': $(target).offset().top}, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});*/
wow = new WOW({mobile: false});
wow.init();
$(document).ready(function () {
    var count = 1;
    var coctails = [{
        image: 'images/1_coctails/KAR_1995.jpg',
        title: 'Honey Sparkling',
        description: 'Необыкновенное сочетание медового виски и игристого вина.'
    }, {
        image: 'images/1_coctails/KAR_2000.jpg',
        title: 'Kiwi Chalet',
        description: 'Свежесть и полезность киви гармонирует с лимончелой и игристым вином.'
    }, {
        image: 'images/1_coctails/KAR_1845.jpg',
        title: 'Fresh flower',
        description: 'Премиум водка/ джин в сочетании со свежестью базилика и цветов бузины, дополненная горечью тоника.'
    }, {
        image: 'images/1_coctails/KAR_1871.jpg',
        title: 'Basil berry fizz',
        description: 'Насыщенность малины гармонирует с можжевеловой терпкостью джина и свежестью базилика.'
    }, {
        image: 'images/1_coctails/KAR_2038.jpg',
        title: 'Exclusive Mojito',
        description: 'Непревзойденный эталон свежести, в сочетании рома, мяты и лайма.'
    }, {
        image: 'images/1_coctails/KAR_2204.jpg',
        title: 'Strawberry Mojito',
        description: 'Насыщенный клубничный вкус дополняет классический рецепт. Также можно подобрать и ваш любимый аромат.'
    }, {
        image: 'images/1_coctails/KAR_2016.jpg',
        title: 'Tropical nut',
        description: 'Молочно-ореховый Коктейль с добавлением рома и ананаса.'
    }, {
        image: 'images/1_coctails/KAR_2057.jpg',
        title: 'Mint smash',
        description: 'Ром в сочетании с медовым сиропом и мятной пеной.'
    }, {
        image: 'images/1_coctails/KAR_2081.jpg',
        title: 'Daiquiri',
        description: 'Основой является светлый ром, сок лайма и сахар.Можно добавить ваш любимый вкус.'
    }, {
        image: 'images/1_coctails/KAR_2067.jpg',
        title: 'Pomegranat taste',
        description: 'Гранатовый вкус переплетён с насыщенностью текилы и сиропа ананас.'
    }, {
        image: 'images/1_coctails/KAR_2114.jpg',
        title: 'Bitterly sweet',
        description: 'Крепость бренди, горечь Кампари и грейпфрута, сладость маракуйи. Дают горечи и сладости сбалансированность.'
    }, {
        image: 'images/1_coctails/KAR_2123.jpg',
        title: 'Brandy Imperator',
        description: 'Яркий вкус алычи, гармонирующий с бренди и цитрусовыми.'
    }, {
        image: 'images/1_coctails/KAR_1949.jpg',
        title: 'Almond Wiskey',
        description: 'Бескомпромиссное сочетание виски, миндаля и вишни.'
    }, {
        image: 'images/1_coctails/KAR_1901.jpg',
        title: 'Prune sour',
        description: 'Сочетание виски с черносливом, сбалансированного лимонным соком и белком.'
    }, {
        image: 'images/1_coctails/KAR_2104.jpg',
        title: 'Whiskey hops',
        description: 'Пивной Коктейль на основе виски и пюре инжира.'
    }, {
        image: 'images/1_coctails/KAR_1904.jpg',
        title: 'Caramel Oakherd',
        description: 'Насыщенный вкус пряного Рома и солёной карамели, дополненный попкорном.'
    }, {
        image: 'images/1_coctails/KAR_2139.jpg',
        title: 'Reviver',
        description: 'Крепкий напиток, в основе которого виски или коньяк, вермут и биттер.'
    }, {
        image: 'images/1_coctails/KAR_1842.jpg',
        title: 'Herb journey',
        description: 'Премиум водка, мятный ликёр, корица, лемонграсс и грейпфрут.'
    }, {
        image: 'images/1_coctails/KAR_2147.jpg',
        title: 'White Russian',
        description: 'Премиум водка с кофейным ликером, заправленные пеной из пломбира или сливками.'
    }, {
        image: 'images/1_coctails/KAR_2176.jpg',
        title: 'Martini Royale',
        description: 'Аперитивная классика сочетания вермута и игристого вина.'
    }, {
        image: 'images/1_coctails/KAR_2167.jpg',
        title: 'Aperol Spritz',
        description: 'Излюбленный рецепт гармонии Апероля, игристого вина и содовой.'
    }].forEach(function (item) {
        var node = document.createElement('div');
        var parrent = document.getElementById("screenshots");
        var getAlt = function (number) {
            let listAlt = ['coctail',
                'коктейль',
                '"exclusive bar"',
                'эксклюзивбар',
                '"эксклюзив бар"',
                'exclusivebar',
                'коктейли',
                '"бар"',
                '"bar"',
                '"кейтеринг"',
                '"catering"',
                '"бармен"',
                '"бармен шоу"',
                '"barman show"',
                '"barmanshow"',
            ];
            let index = number % listAlt.length;
            return listAlt[index];

        };
        node.className = 'shot ';
        /*        node.innerHTML = '<img src=' + item.image + ' alt="коктейль">\n' + '                        <!-- INFORMATION -->\n' + '                    <div class="screenshots-descr">\n' + '                        <div class="name">\n' + count + '. ' + item.title + ' </div>\n' + '                        <div class="white-line">\n' + '                        </div>\n' + '                        <div class="message">\n' + item.description + '                        </div>\n' + '                    </div>\n';*/
        node.innerHTML = '<a href=' + item.image + ' data-lightbox-gallery="screenshots-gallery">\n' +
            '<img src=' + item.image + ' alt=' + getAlt(count) + '>\n' +
            '<div class="screenshots-descr">\n' +
            '<div class="name">' + count + '. ' + item.title + '</div>\n' +
            '<div class="white-line">\n' +
            '</div><!-- INFORMATION -->\n' +
            '<div class="message">' + item.description + '</div>' +
            '</div>\n' +
            '</a>';
        parrent.appendChild(node);
        count++;
    });
});
$(document).ready(function () {
    var owl = $("#screenshots");
    owl.owlCarousel({
        autoPlay: 5000,
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false
    });
});
$(document).ready(function () {
    $('#screenshots a').nivoLightbox({effect: 'fadeScale',});
});
$("#subscribe").submit(function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    if (isValidEmail(email)) {
        console.log('hi');
        this.form.reset();
        $.ajax({
            type: "POST", url: "subscribe/subscribe.php", data: dataString, success: function () {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.subscription-error').fadeIn(1000);
    }
    return false;
});
$("#contact").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST", url: "sendmail.php", data: dataString, success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
                document.getElementById('contact').reset()
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }
    return false;
});
$('.expand-form').simpleexpand({'defaultTarget': '.expanded-contact-form'});
$(window).stellar({horizontalScrolling: false});
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.querySelector('head').appendChild(msViewportStyle)
}
;$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#upScroll').fadeIn("slow");
        } else {
            $('#upScroll').fadeOut("slow");
        }
    });
    $('#upScroll').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});
$(document).ready(function () {
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
    player.setColor('#b5894a').then(function (color) {
    }).catch(function (error) {
        switch (error.name) {
            case'ContrastError':
                break;
            case'TypeError':
                break;
            case'EmbedSettingsError':
                break;
            default:
                break;
        }
    });
});