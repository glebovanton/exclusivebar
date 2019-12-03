let count = 1;
let count2 = 1;

let examples = [
    {
        image: 'images/examples/IMG_1741.jpg',
        title: 'Kiwi Chalet',
        description: 'Свежесть и полезность киви гармонирует с лимончелой и игристым вином.'
    },
    {
        image: 'images/examples/IMG_1911.jpg',
        title: 'Fresh flower',
        description: 'Премиум водка/ джин в сочетании со свежестью базилика и цветов бузины, дополненная горечью тоника.'
    },
    {
        image: 'images/examples/IMG_1917.jpg',
        title: 'Basil berry fizz',
        description: 'Насыщенность малины гармонирует с можжевеловой терпкостью джина и свежестью базилика.'
    },
    {
        image: 'images/examples/IMG_9723.jpg',
        title: 'Bitterly sweet',
        description: 'Крепость бренди, горечь Кампари и грейпфрута, сладость маракуйи. Дают горечи и сладости сбалансированность.'
    },
    {
        image: 'images/examples/IMG_2008.jpg',
        title: 'Exclusive Mojito',
        description: 'Непревзойденный эталон свежести, в сочетании рома, мяты и лайма.'
    },
    {
        image: 'images/examples/IMG_8825.jpg',
        title: 'Strawberry Mojito',
        description: 'Насыщенный клубничный вкус дополняет классический рецепт. Также можно подобрать и ваш любимый аромат.'
    },
    {
        image: 'images/examples/IMG_8827.jpg',
        title: 'Tropical nut',
        description: 'Молочно-ореховый Коктейль с добавлением рома и ананаса.'
    },
    {
        image: 'images/examples/IMG_8840.jpg',
        title: 'Mint smash',
        description: 'Ром в сочетании с медовым сиропом и мятной пеной.'
    },
    {
        image: 'images/examples/IMG_8845.jpg',
        title: 'Daiquiri',
        description: 'Основой является светлый ром, сок лайма и сахар.Можно добавить ваш любимый вкус.'
    },
    {
        image: 'images/examples/IMG_8852.jpg',
        title: 'Pomegranat taste',
        description: 'Гранатовый вкус переплетён с насыщенностью текилы и сиропа ананас.'
    }
].forEach(function (item) {
        let node = document.createElement('div');
        let parrent = document.getElementById("examples_list");
        let getAlt = function (number) {
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
            '                </div>\n';
        parrent.appendChild(node);
        count++;
    }
);

let examples2 = [
    {
        image: 'images/examples/pyramids/IMG_2407.jpg',
        title: 'Kiwi Chalet',
        description: 'Свежесть и полезность киви гармонирует с лимончелой и игристым вином.'
    },
    {
        image: 'images/examples/pyramids/IMG_3959.jpg',
        title: 'Fresh flower',
        description: 'Премиум водка/ джин в сочетании со свежестью базилика и цветов бузины, дополненная горечью тоника.'
    },
    {
        image: 'images/examples/pyramids/IMG_6661.jpg',
        title: 'Basil berry fizz',
        description: 'Насыщенность малины гармонирует с можжевеловой терпкостью джина и свежестью базилика.'
    },
    {
        image: 'images/examples/pyramids/IMG_6662.jpg',
        title: 'Bitterly sweet',
        description: 'Крепость бренди, горечь Кампари и грейпфрута, сладость маракуйи. Дают горечи и сладости сбалансированность.'
    }
].forEach(function (item) {
        let node = document.createElement('div');
        let parrent = document.getElementById("examples-pyramids_list");
        let getAlt = function (number) {
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
            '                    <img src=' + item.image + ' alt=' + getAlt(count2) + '>\n' +
            '                    <!-- 1 -->\n' +
            '                    </div>\n' +
            '                    <div class="coct_desc">\n' +
            '                </div>\n';
        parrent.appendChild(node);
    count2++;
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