/* eslint-disable */
const homebannerSwiper = new Swiper('.homebanner-swiper', {
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
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
const servicesPostSwiper = new Swiper('.services-post--swiper', {
  slidesPerView: 6,
  spaceBetween: 0,
  navigation: {
    nextEl: '.services-post-swiper-next',
    prevEl: '.services-post-swiper-prev',
  },
});
// swiper
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function randomLine(){
  const animParent = document.getElementById('randomParentLine');
  if (animParent){
    const animItems = animParent.querySelectorAll('.figure__stroke');
    for(let i = 0; i < animItems.length; i++) {
      const animItemLine = 'stroke-dasharray: ' + randomInteger(200,400) + ' ' + randomInteger(200,400);
      animItems[i].setAttribute('style', animItemLine)
    }
  } else {
    return console.log('Dont have animParent, function close');
  }
}
randomLine();
// generate svg lines
function jobsActiveToMiddle() {
  let jobsItemActive = document.querySelector('.jobs-post-item');
  if(jobsItemActive){
    if(jobsItemActive.nextElementSibling){
      jobsItemActive.parentNode.insertBefore(jobsItemActive.nextElementSibling, jobsItemActive);
      jobsItemActive.parentNode.insertBefore(jobsItemActive.nextElementSibling, jobsItemActive);
      jobsItemActive.classList.add('jobs-post-item--active');
    } else {
      return console.log(jobsItemActive);
    }
  } else {
    return console.log('Dont have jobs-post page, functions close.')
  }
}
jobsActiveToMiddle();
// jobs-post