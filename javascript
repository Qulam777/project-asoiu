var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
});
// header
let header = document.querySelector('.header')

window.onscroll=()=>{
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        header.classList.add('activeHeader')
    }
    else{
        header.classList.remove('activeHeader')
    }
}
