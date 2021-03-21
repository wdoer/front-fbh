const swiper = new Swiper('.homebanner-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}"></span>`;
    },
  },
});
const constructionSwiper = new Swiper('.construction-swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: '.construction-swiper-next',
    prevEl: '.construction-swiper-prev',
  },
});
