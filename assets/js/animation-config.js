document.addEventListener('DOMContentLoaded', () => {
    // banner home
    gsap.registerPlugin(ScrollTrigger)
    const socialLinks = document.querySelectorAll('.home-banner .list-social a')
    const tl1 = gsap.timeline()
    tl1.from('nav .container',{
        y:-200,
        opacity:0,
        delay:1,
        ease:'power3.inOut'
    })
    socialLinks.forEach((el, i) => {
        tl1.from((el), {
            scale: 1.5,
            opacity: 0,
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