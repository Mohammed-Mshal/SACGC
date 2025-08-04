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
    const menu = document.querySelector('nav .popup-menu')
    const closeMenu = document.querySelector('nav .popup-menu .close-button')
    const toggleMenu = document.querySelector('nav .options .toggle-menu')
    const toggleInnerList = document.querySelectorAll('nav .popup-menu .list-menu li .toggle-inner-list')
    toggleMenu.addEventListener('click', () => {
        menu.classList.add('show')
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('show')
        toggleInnerList.forEach((e) => e.classList.remove('show'))
        
    })
    toggleInnerList.forEach((btn) => {
        btn.addEventListener('click', () => {
            toggleInnerList.forEach((e) => e.classList.remove('show'))
            btn.classList.add('show')
        })
    })
    const closeSearch = document.querySelector('nav .search-popup .close-button')
    const searchPopup = document.querySelector('nav .search-popup')
    const toggleSearch = document.querySelector('nav .container .options .search-button')
    toggleSearch.addEventListener('click', () => {
        searchPopup.classList.add('show')
    })
    closeSearch.addEventListener('click', () => {
        searchPopup.classList.remove('show')
        
    })
})