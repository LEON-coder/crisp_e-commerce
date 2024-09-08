let signIn = document.querySelector('.header__sign-in');
let signInForm = document.querySelector('.sign-in-form');
let popUp = document.querySelector('.sign-in__pop-up');
let popUpClose = document.querySelector('.pop-up-close');



signIn.addEventListener('click' , function() {
  popUp.classList.add('active');

  const timerId = setTimeout(() => {
    signInForm.classList.add('sign-in-form-active');
  }, 1000);
  

})

popUpClose.addEventListener('click' , function() {
  popUp.classList.remove('active');
  signInForm.classList.remove('sign-in-form-active');
})



