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



function alturaMaxima() {
    var altura = $(window).height();
    $(".full-screen").css('min-height', altura);
}

$(document).ready(function () {
    alturaMaxima();
    $(window).bind('resize', alturaMaxima);
});

wow = new WOW({mobile: false});
wow.init();
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



$(document).ready(function () {
    $("#order").submit(function (e) {
        e.preventDefault();
        let name = $("#order-name").val(),
        tel = $("#order-tel").val(),
        format = $("#order-format").val(),
        place = $("#order-place").val(),
        date = $("#order-date").val(),
        people = $("#order-people").val(),
        services = $("#order-services").val(),
        message = $("#order-message").val(),
        dataString = 'name=' + name + '&tel=' + tel + '&format=' + format + '&place=' + place + '&date=' + date + '&people=' + people + '&services=' + services + '&message=' + message;

/*        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (tel.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST", url: "sendmail.php", data: dataString, success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    document.getElementById('contact').reset()
                }
            });
        }*/
        if ((tel.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST", url: "sendOrder.php", data: dataString, success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    document.getElementById('order').reset();
                }
            });
        }
        else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }
        return false;
    });
});