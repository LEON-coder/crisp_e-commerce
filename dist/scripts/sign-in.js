let signIn = document.querySelector('.header__sign-in');
let popUp = document.querySelector('.sign-in__pop-up');
let popUpClose = document.querySelector('.pop-up-close');


signIn.addEventListener('click' , function() {
  popUp.classList.add('active');
})

popUpClose.addEventListener('click' , function() {
  popUp.classList.remove('active');
})



