/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
    function addIcon(el, entity) {
        var html = el.innerHTML;
        el.innerHTML = '' + entity + '' + html;
    }
    var icons = {
        'icon-home': '',
        'icon-starburst': '',
        'icon-calendar': '',
        'icon-star': '',
        'icon-out': '',
        'icon-cancel': '!',
        'icon-checkmark': '$',
        'icon-camera': '&',
        'icon-announcement': '(',
        'icon-tag': ')',
        'icon-phone': '*',
        'icon-mail': '+',
        'icon-location': ',',
        'icon-clock': '-',
        'icon-search': '0',
        'icon-quote': '1',
        'icon-user': '2',
        'icon-equalizer': '3',
        'icon-cog': '4',
        'icon-bug': '5',
        'icon-crown': '6',
        'icon-food': '7',
        'icon-accessibility': '8',
        'icon-target': '9',
        'icon-target-2': ':',
        'icon-list-view': '#',
        'icon-download': ';',
        'icon-globe': '<',
        'icon-link': '=',
        'icon-star-2': '>',
        'icon-star-3': '?',
        'icon-heart': '@',
        'icon-heart-2': 'A',
        'icon-twitter': '"',
        'icon-facebook': 'B',
        'icon-google-plus': 'C',
        'icon-file-pdf': '',
        'icon-arrow-up': 'D',
        'icon-arrow-right': 'E',
        'icon-arrow-down': 'F',
        'icon-arrow-left': 'G',
        'icon-sun': 'J',
        'icon-android': 'L',
        'icon-apple': 'M',
        'icon-pinterest': 'N',
        'icon-sun-2': 'K',
        'icon-help': 'I',
        'icon-comments': "'",
            'icon-file-download': '.',
        'icon-pictures': '/',
        'icon-map': '%',
        'icon-users': 'H'
},
    els = document.getElementsByTagName('*'),
        i, attr, html, c, el;
    for (i = 0; i < els.length; i += 1) {
        el = els[i];
        attr = el.getAttribute('data-icon');
        if (attr) {
            addIcon(el, attr);
        }
        c = el.className;
        c = c.match(/icon-[^s'"]+/);
        if (c) {
            addIcon(el, icons[c[0]]);
        }
    }
};
