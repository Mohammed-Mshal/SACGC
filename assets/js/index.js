document.addEventListener('DOMContentLoaded', () => {

    const bannerHome = document.querySelector('.home-banner .swiper-home')
    if (bannerHome) {
        const swiperHome = new Swiper(bannerHome, {
            slidesPerView: 1,
        })
    }
})