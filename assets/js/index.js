document.addEventListener('DOMContentLoaded', () => {
    // banner home
    gsap.registerPlugin(ScrollTrigger)
    const socialLinks=document.querySelectorAll('.home-banner .list-social a')
    const tlSocial=gsap.timeline()
    socialLinks.forEach((el,i)=>{
        tlSocial.from((el),{
            scale:1.5,
            opacity:0,
            delay:i===0?1:0,
            duration:.4,
            ease:'power2.inOut'
        })
    })
    const bannerHome = document.querySelector('.home-banner .swiper-home')
    if (bannerHome) {
        const swiperHome = new Swiper(bannerHome, {
            slidesPerView: 1,
            loop: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
})