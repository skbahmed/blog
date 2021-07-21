/* ------------------- */
/* PRELOADER */
/* ------------------- */
setTimeout(function(){
    $('.loader').fadeToggle();
}, 1500);

/* ------------------- */
/* ANIMATE ON SCROLL */
/* ------------------- */
AOS.init({
    offset: 120,
    duration: 1500,
});

/* ------------------- */
/* NAV ACTIVATION */
/* ------------------- */
let collapse = document.querySelectorAll(".collapse");
let toggle = document.querySelector(".toggle-button");
toggle.addEventListener('click', function() {
    collapse.forEach(n => n.classList.toggle('collapse-toggle'));
    toggle.classList.toggle('toggle')
});

/* ------------------- */
/* LINK ACTIVATION */
/* ------------------- */
const activeIt = document.querySelectorAll('.active-it');
function linkAction(){
    activeIt.forEach(n => n.classList.remove('active'))
    this.classList.add('active');
}
activeIt.forEach(n => n.addEventListener('click', linkAction));

/* ------------------- */
/* MASONRY GRID SYSTEM */
/* ------------------- */
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

/* ------------------- */
/* SWIPER LIBRARY INITIALIZE */
/* ------------------- */
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    mousewheel: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsiveness
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5
        }
    }
});