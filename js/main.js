
// import 'swiper/css/bundle';
let swiper = new Swiper(".swiper", {
  effect: 'cards',
  // speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});
const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header__list');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  headerMenu.classList.toggle('active');
})
document.querySelectorAll('.list-header__link').forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove('active');
  headerMenu.classList.remove('active');
}))
//
window.onload = function(){
  document.getElementById('scroll-to-top').onclick = function(){
    
    window.scrollTo(0,0);
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  let header = document.querySelector('.header');
  let projects = document.querySelector('#projects');
  let headerContainer = document.querySelector('.container__header');
  let hero = document.querySelector('.main-block__body');
  let mySkills = document.querySelectorAll('.scroll-item');
  let aboutDesc = document.querySelector('.about__desc');
  const animationSkills = ()=>{
    let windowCenter = window.innerHeight/2 + window.scrollY;
    mySkills.forEach(el=>{
      let scrollOffset = el.offsetTop;
      if(windowCenter>=scrollOffset){
        el.classList.add('animation-class');
      }else{
        el.classList.remove('animation-class');
      }
    })
  }
  animationSkills();
  window.addEventListener('scroll',()=>{
    let heroCenter = hero.offsetHeight/2;
    let projectstop = projects.offsetHeight;
    let scrollTop = window.scrollY;
    let hamburger = document.querySelector('.hamburger');
    animationSkills();
    if(scrollTop>=projectstop){
      document.getElementById('scroll-to-top').setAttribute('style','display:block;');
    }else{
      document.getElementById('scroll-to-top').setAttribute('style','display:none;');
    }
    if(scrollTop>=heroCenter){
      headerContainer.classList.add('fixed');
      hamburger.setAttribute('style','top:24px;');
      hero.style.marginTop = `${header.offsetHeight}px`;
    }else{
      headerContainer.classList.remove('fixed');
      hero.style.marginTop = `0px`;
      hamburger.setAttribute('style','top:84px');
    }
  })
})