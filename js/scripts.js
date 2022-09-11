const doc= document.querySelector('body');
const expandMenuItems= document.querySelectorAll("[aria-expanded]")
const collectionItems= document.querySelectorAll("[data-target-collection]")

// cart box action
const cartBoxTrigger= document.querySelector('.image_cart');
const cartBoxContent= document.querySelector('.cart_box');
const emptyCart= document.querySelector('[data-add-cart]');
const filledCart= document.querySelector('[data-number-exist]')
const cartPro= document.querySelectorAll('.cart_pro');
const cartAdd= document.querySelector('.cart_add');

// sliding with icon arrow
let slideIndex= 1;
let n;
const mainPictures= document.querySelectorAll('.item_sell');
const advertizingText= document.querySelectorAll('.item_advertising');
const iconArrowLeft= document.querySelector('.icon_arrowleft');
const iconArrowRight= document.querySelector('.icon_arrowright');

const getNumberItems= document.querySelector('#number_selected');

let increment= 800;

let collectNumberItems = {
  numItem: 0 ,
  indexPicture: 0
};



doc.addEventListener('click', test);
function test(e) {
  console.log(e.target);
}

doc.addEventListener('click', displayMenu);


function displayMenu(e){
  if(e.target.classList.contains('toggle_hamburger') && e.target.getAttribute("aria-expanded") === 'false'){
   expandMenuItems.forEach((itemMenu) =>{
    itemMenu.setAttribute("aria-expanded", "true");
   });

  } else if(e.target.classList.contains('toggle_hamburger') && e.target.getAttribute("aria-expanded") === 'true'){
    expandMenuItems.forEach((itemMenu) =>{
    itemMenu.setAttribute("aria-expanded", "false");
     })
  }
}

cartBoxTrigger.addEventListener('click', cartMenu);

function cartMenu(){
  let j= collectNumberItems.indexPicture;

  if(cartBoxContent.getAttribute('data-cart-toggled') === 'false' && collectNumberItems.numItem <= 0){
    cartBoxContent.setAttribute("data-cart-toggled", "true");
    emptyCart.setAttribute("data-add-cart", "true");

  } else if(cartBoxContent.getAttribute('data-cart-toggled') === 'true' && collectNumberItems.numItem <= 0) {
    cartBoxContent.setAttribute("data-cart-toggled", "false");
    emptyCart.setAttribute("data-add-cart", "false");
  } else if(cartBoxContent.getAttribute('data-cart-toggled') === 'false' && collectNumberItems.numItem > 0){
    cartBoxContent.setAttribute("data-cart-toggled", "true");
    filledCart.setAttribute("data-number-exist", "true");
    cartPro[j].setAttribute("data-show-item", "true");
  } else if(cartBoxContent.getAttribute('data-cart-toggled') === 'true' && collectNumberItems.numItem > 0){
    cartBoxContent.setAttribute("data-cart-toggled", "false");
    filledCart.setAttribute("data-number-exist", "false");
    cartPro[j].setAttribute("data-show-item", "false");
  }
}

cartAdd.addEventListener('click', onTopImageCart);

function onTopImageCart(){
  collectNumberItems.numItem= getNumberItems.value;
  if(collectNumberItems.numItem > 0){
    let a= collectNumberItems.numItem;
   cartBoxTrigger.style.setProperty("--box-numb-selected", "visible")
   cartBoxTrigger.style.setProperty("--content-variable", "`${a}`");
  }
}


iconArrowRight.addEventListener('click', arrowNextSlide);

function arrowNextSlide(){
  n= 1;
  slideIndex= slideIndex + n;
  if(slideIndex > mainPictures.length){
    slideIndex=1;
  } else if(slideIndex < 1){
    slideIndex= mainPictures.length;
  }
  for(let i= 0; i<mainPictures.length; i++){
    mainPictures[i].setAttribute("data-show-item", "false");
    advertizingText[i].setAttribute("data-show-item", "false");
  }
  mainPictures[slideIndex - 1].setAttribute("data-show-item", "true");
  advertizingText[slideIndex - 1].setAttribute("data-show-item", "true");
  collectNumberItems.indexPicture= slideIndex -1;

}

iconArrowLeft.addEventListener('click', arrowPreviousSlide);

function arrowPreviousSlide(){
  let slideIndexPrevious;
  n= -1;
  slideIndex= slideIndex + n;
  if(slideIndex < -3){
    slideIndex= 0;
    slideIndexPrevious = slideIndex + 4;

  } else if(slideIndex >= 1){
    slideIndexPrevious= slideIndex;
  }
  else{
    slideIndexPrevious = slideIndex + 4;
  }
  for(let i= 0; i<mainPictures.length; i++){
    mainPictures[i].setAttribute("data-show-item", "false");
    advertizingText[i].setAttribute("data-show-item", "false");
  }
  mainPictures[slideIndexPrevious - 1].setAttribute("data-show-item", "true");
  advertizingText[slideIndexPrevious - 1].setAttribute("data-show-item", "true");
  collectNumberItems.indexPicture= slideIndexPrevious - 1;
}

