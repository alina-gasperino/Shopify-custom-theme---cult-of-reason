document.addEventListener('DOMContentLoaded', initSwiper, false);
function initSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        touchReleaseOnEdges: true,
    });


    setSlideCounter(swiper.activeIndex)
    swiper.on('slideChange', function () {
        setSlideCounter(swiper.activeIndex)
    });
}


function setSlideCounter(index) {
    const slideCountEl = document.getElementById('slide-count-el');
    let currentSlide = index + 1;
    slideCountEl.innerHTML = currentSlide;
}
// debounce((event) => {
//         this.onSubmitHandler(event);
//       }, 500);
// }
