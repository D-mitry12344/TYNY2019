const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name');
      const mail = formData.get('mail');
      const textarea = formData.get('mess');
      if(mail && name && textarea){
        console.log(name,mail,textarea)
      }
})

/*burger*/

const burgerTop = document.querySelector('.ipad-all__burger');
const popupMenu = document.querySelector('.popup-menu');

burgerTop.addEventListener('click' , ()=>{
  burgerTop.classList.toggle('active');
  popupMenu.classList.toggle('active');
  if(document.querySelector('body').style.overflow != ''){
    document.querySelector('body').style.overflow = ''
  }else{
    document.querySelector('body').style.overflow = 'hidden'
  }
})