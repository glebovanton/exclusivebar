let mySwiper = new Swiper ('.swiper-barshow', {
    autoHeight:true,
    // Optional parameters
    loop: true,
    preloadImages: true,
    // Enable lazy loading
    lazy: true,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        820: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    },
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true
})