window.addEventListener('DOMContentLoaded' , () =>{
  'use strict';
  //запрет на первый клик 
  $('.menu-service-item').click(function(e){
    if(!$(this).hasClass('active')) {
      $('.menu-service-item').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    } else {
      return true;
    }
  });
  //бургер меню
  const burger = () =>{
    const menuToggle = document.querySelector('#menu-togle'),
          html = document.querySelector('html'),
          Menu = document.querySelector('.header-menu-wrapper'),
          headerMenuLogo = document.querySelector('.header-menu-logo'),
          headerMenu = document.querySelector('.header-menu');

    document.addEventListener('click', (elem) =>{
      if(elem.target.closest('#menu-togle')){
        menuToggle.classList.toggle('menu-icon-active');
        Menu.classList.toggle('header-menu-wrapper-active');
        headerMenuLogo.classList.toggle('header-menu-logo-active');
        html.classList.toggle('compensate-for-scrollbar');
        headerMenu.classList.toggle('header-menu-active')
      }else if(!elem.target.closest('.header-menu-wrapper')){
        menuToggle.classList.remove('menu-icon-active');
        Menu.classList.remove('header-menu-wrapper-active');
        headerMenuLogo.classList.remove('header-menu-logo-active');
        html.classList.remove('compensate-for-scrollbar');
        headerMenu.classList.remove('header-menu-active')
      }
    });
  };
  burger();

  //Слайдер № 1
  let slide1 = () =>{
  let modalSwiper= new Swiper('.modal-swiper', {
    slidesPerView:'auto',
    initialSlide: 1,
    spaceBetween: 8,
    slidesPerGroup: 1,  
    autoHeight: true, 
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-modal',
    },
  });
  };
  slide1();

  //Слайдер № 2
  let slide2 = () =>{
    const width = window.innerWidth
      if (width < 1200){
        let optionsSwiper= new Swiper('.options-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 60,
          slidesPerGroup: 1,  
          autoHeight: true, 
          loop: true,
          pagination: {
            el: ".swiper-pagination-options",
            clickable: true,
          },
        });
        optionsSwiper.mousewheel.disable();
      }
  };
  slide2();

   //Слайдер № 1
  let slide3 = () =>{
    let newsSwiper= new Swiper('.news-swiper', {
      slidesPerView:'auto',
      initialSlide: 1,
      spaceBetween: 30,
      autoHeight: true, 
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-news',
      },
      pagination: {
        el: ".swiper-pagination-news",
        clickable: true,
      },
    });
    };
    slide3();
  //запрет на первый клик в меню
  const menuItem = () =>{
    const width = window.matchMedia("(max-width: 1200px)");        
      if (width.matches) {
        //запрет на первый клик 
        $('.menu-service-item').click(function(e){
          if(!$(this).hasClass('active')) {
            $('.menu-service-item').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
          } else {
            return true;
          }
        });
      }
  };
  menuItem();

  $(function(){
    new WOW().init(); 
  });

  // Скролл header 
  const scrollHeader = () =>{
    let lastScroll = 0,
        defaultOffset = 1000;

    const headerMenu  = document.querySelector('.header-menu-logo__wrapper');

      const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

      const width = window.matchMedia("(min-width: 1200px)");        
        if (width.matches) {
        window.addEventListener('scroll', () => {
          if(scrollPosition() < lastScroll && scrollPosition() < defaultOffset) {
            headerMenu.style.display='flex'
          }else if(scrollPosition() > lastScroll && scrollPosition() > defaultOffset){
            headerMenu.style.display='none'
          }
          lastScroll = scrollPosition();
        });
    }
  };
  scrollHeader();
  window.addEventListener("resize", scrollHeader);
});