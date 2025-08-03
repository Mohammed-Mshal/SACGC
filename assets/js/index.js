document.addEventListener('DOMContentLoaded', () => {
    const bannerHome = document.querySelector('.home-banner .swiper-home')
    if (bannerHome) {
        const swiperHome = new Swiper(bannerHome, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        })
    }
})