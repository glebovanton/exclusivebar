var count = 1;

var coctails = [
    {
        image: 'images/1_coctails/KAR_1995.jpg',
        title: 'Honey Sparkling',
        description: 'Необыкновенное сочетание медового виски и игристого вина.'
    },
    {
        image: 'images/1_coctails/KAR_2000.jpg',
        title: 'Kiwi Chalet',
        description: 'Свежесть и полезность киви гармонирует с лимончелой и игристым вином.'
    },
    {
        image: 'images/1_coctails/KAR_1845.jpg',
        title: 'Fresh flower',
        description: 'Премиум водка/ джин в сочетании со свежестью базилика и цветов бузины, дополненная горечью тоника.'
    },
    {
        image: 'images/1_coctails/KAR_1871.jpg',
        title: 'Basil berry fizz',
        description: 'Насыщенность малины гармонирует с можжевеловой терпкостью джина и свежестью базилика.'
    },
    {
        image: 'images/1_coctails/KAR_2038.jpg',
        title: 'Exclusive Mojito',
        description: 'Непревзойденный эталон свежести, в сочетании рома, мяты и лайма.'
    },
    {
        image: 'images/1_coctails/KAR_2204.jpg',
        title: 'Strawberry Mojito',
        description: 'Насыщенный клубничный вкус дополняет классический рецепт. Также можно подобрать и ваш любимый аромат.'
    },
    {
        image: 'images/1_coctails/KAR_2016.jpg',
        title: 'Tropical nut',
        description: 'Молочно-ореховый Коктейль с добавлением рома и ананаса.'
    },
    {
        image: 'images/1_coctails/KAR_2057.jpg',
        title: 'Mint smash',
        description: 'Ром в сочетании с медовым сиропом и мятной пеной.'
    },
    {
        image: 'images/1_coctails/KAR_2081.jpg',
        title: 'Daiquiri',
        description: 'Основой является светлый ром, сок лайма и сахар.Можно добавить ваш любимый вкус.'
    },
    {
        image: 'images/1_coctails/KAR_2067.jpg',
        title: 'Pomegranat taste',
        description: 'Гранатовый вкус переплетён с насыщенностью текилы и сиропа ананас.'
    },
    {
        image: 'images/1_coctails/KAR_2114.jpg',
        title: 'Bitterly sweet',
        description: 'Крепость бренди, горечь Кампари и грейпфрута, сладость маракуйи. Дают горечи и сладости сбалансированность.'
    },
    {
        image: 'images/1_coctails/KAR_2123.jpg',
        title: 'Brandy Imperator',
        description: 'Яркий вкус алычи, гармонирующий с бренди и цитрусовыми.'
    },
    {
        image: 'images/1_coctails/KAR_1949.jpg',
        title: 'Almond Wiskey',
        description: 'Бескомпромиссное сочетание виски, миндаля и вишни.'
    },
    {
        image: 'images/1_coctails/KAR_1901.jpg',
        title: 'Prune sour',
        description: 'Сочетание виски с черносливом, сбалансированного лимонным соком и белком.'
    },
    {
        image: 'images/1_coctails/KAR_2104.jpg',
        title: 'Whiskey hops',
        description: 'Пивной Коктейль на основе виски и пюре инжира.'
    },
    {
        image: 'images/1_coctails/KAR_1904.jpg',
        title: 'Caramel Oakherd',
        description: 'Насыщенный вкус пряного Рома и солёной карамели, дополненный попкорном.'
    },
    {
        image: 'images/1_coctails/KAR_2139.jpg',
        title: 'Reviver',
        description: 'Крепкий напиток, в основе которого виски или коньяк, вермут и биттер.'
    },
    {
        image: 'images/1_coctails/KAR_1842.jpg',
        title: 'Herb journey',
        description: 'Премиум водка, мятный ликёр, корица, лемонграсс и грейпфрут.'
    },
    {
        image: 'images/1_coctails/KAR_2147.jpg',
        title: 'White Russian',
        description: 'Премиум водка с кофейным ликером, заправленные пеной из пломбира или сливками.'
    },
    {
        image: 'images/1_coctails/KAR_2176.jpg',
        title: 'Martini Royale',
        description: 'Аперитивная классика сочетания вермута и игристого вина.'
    },
    {
        image: 'images/1_coctails/KAR_2167.jpg',
        title: 'Aperol Spritz',
        description: 'Излюбленный рецепт гармонии Апероля, игристого вина и содовой.'
    }
].forEach(function (item) {
        var node = document.createElement('div');
        var parrent = document.getElementById("coctail_list");
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

        node.className = 'col-xs-12 col-sm-6  col-md-4 ';
        node.innerHTML = '<div class="coct">\n' +
            '                    <img src=' + item.image + ' alt=' + getAlt(count) + '>\n' +
            '                    <!-- 1 -->\n' +
            '                    </div>\n' +
            '                    <div class="coct_desc">\n' +
            '                        <h3>' + count + '. ' + item.title + '</h3>\n' +
            '\n' +
            '                        <!-- SERVICE DESCRIPTION -->\n' +
            '                        <p>\n' + item.description +
            '                        </p> \n' +
            '                </div>\n';
        parrent.appendChild(node);
        count++;
    }
);

window.onload = function () {
    /* preloader*/
    setTimeout(function () {
        /*document.getElementById('page-preloader').classList.add('loaded');*/
        $("#page-preloader").fadeOut();

    }, 1000)
}
;


/* =================================
===  Botton to TOP   =====
=================================== */
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {

            $('#backScroll').fadeIn("slow");

        } else {

            $('#backScroll').fadeOut("slow");

        }

        if ($(this).scrollTop() > 300) {

            $('#upScroll').fadeIn("slow");

        } else {

            $('#upScroll').fadeOut("slow");

        }

    });

    $('#upScroll').click(function () {

        $('body,html').animate({scrollTop: 0}, 800);

    });
    /*
        $('#backScroll').click(function () {
            window.close();
        });
    */


});