let iconCart = document.querySelector('.icon-cart');
let CartListOpen = document.querySelector('.cart-list-pop-up');
let CartListClose = document.querySelector('.cart-list-close');


iconCart.addEventListener('click' , function() {
  CartListOpen.classList.add('cart-list-open');
});

CartListClose.addEventListener('click' , function() {
  CartListOpen.classList.remove('cart-list-open');  
})