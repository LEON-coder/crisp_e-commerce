let BurgerMenuIcon=document.querySelector('.navigation__mobile-menu');
let navigationMenu=document.querySelector('.navigation');
let menuStripe=document.querySelector('.mobile-menu-stripe');
let header=document.querySelector('.header');
let CardBlock=document.querySelector('.header__cart-block');
let BlockAutorization=document.querySelector('.header__block-autorization');


BurgerMenuIcon.addEventListener("click", function() {
  navigationMenu.classList.toggle("open_menu");
  header.classList.toggle("header_open");
  menuStripe.classList.toggle("navigation__mobile-menu--close");
  CardBlock.classList.toggle("header__cart-block--active");
  this.classList.toggle("pulse-animation");
});