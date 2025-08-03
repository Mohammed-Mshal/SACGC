document.addEventListener('DOMContentLoaded', () => {
    // banner home
    gsap.registerPlugin(ScrollTrigger)
    const socialLinks = document.querySelectorAll('.home-banner .list-social a')
    const tl1 = gsap.timeline()
    socialLinks.forEach((el, i) => {
        tl1.from((el), {
            scale: 1.5,
            opacity: 0,
            delay: i === 0 ? 1 : 0,
            duration: .4,
            ease: 'power2.inOut',
            immediateRender: true
        })
    })
    tl1.from('.home-banner .swiper-controls .navigation button', {
        scale: 1.4,
        opacity: 0,
        duration: .4,
        ease: 'power2.inOut',
        immediateRender: true
    })
})