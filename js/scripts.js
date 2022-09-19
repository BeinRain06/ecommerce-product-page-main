const doc= document.querySelector('body');
const expandMenuItems= document.querySelectorAll("[aria-expanded]")
const collectionItems= document.querySelectorAll("[data-target-collection]")

// cart box action
const cartBoxTrigger= document.querySelector('.icon_cart');
const cartBoxContent= document.querySelector('.cart_box');
const emptyCart= document.querySelector('[data-add-cart]');
const filledCart= document.querySelector('[data-number-exist]')
const cartSelection= document.querySelectorAll('.cart_selection')
const cartPro= document.querySelectorAll('.cart_pro');
const cartAdd= document.querySelector('.cart_add');
const cartLink= document.querySelector('.cart_link');
const cartNumberItem= document.querySelectorAll('.number_item')
const overlayBox= document.querySelector('.overlay');
const overlayNumber= document.querySelector('.overlay_number');
const totalAmount= document.querySelectorAll('.bill_totalprice');

let productPrice;

// cart content action

const callPriceCart= document.querySelectorAll('.edition_range');


// sliding with icon arrow
let slideIndex= 1;
let n;
const mainPictures= document.querySelectorAll('.item_sell');
const advertizingText= document.querySelectorAll('.item_advertising');
const iconArrowLeft= document.querySelector('.icon_arrowleft');
const iconArrowRight= document.querySelector('.icon_arrowright');

const iconArrowLeftNew= document.querySelector('.icon_img_arrowleft');
const iconArrowRightNew= document.querySelector('.icon_img_arrowright');

// price container

const getNumberItems= document.querySelector('#number_selected');
const overallUnitPrice= document.querySelectorAll('.h1_price');
const overallUnitPriceInNumber= document.querySelectorAll('.h1_pricenumber');
const exAmount= document.querySelectorAll('.ft_price');

// icon delete

const deleteSelection= document.querySelector('.icon_delete');


// icon 'plus' and 'minus': incrementation and decrementation 
const getPlus= document.querySelector('.icon_plus');
const getMinus= document.querySelector('.icon_minus');

// item selection float
const itemSelectionFloat= document.querySelector('.item_selection_float');
const mainPicturesNew= document.querySelectorAll('.item_sell_new');
const sliderImageBox= document.querySelectorAll('.sliding_img');
const sliderImagePicture= document.querySelectorAll('.slide_curve');
const sliderImagePictureNew= document.querySelectorAll('.slide_curve_new');
const closeFloat= document.querySelector('.icon_close_float');

let increment= 800;

let collectNumberItems = {
  numItem: 0 ,
  indexPicture: 0
};

let start= 1000;
let previousTimeStamp;
let done= false;


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
   doc.style.setProperty("--body-shadowed", "visible"); 

  } else if(e.target.classList.contains('toggle_hamburger') && e.target.getAttribute("aria-expanded") === 'true'){
    expandMenuItems.forEach((itemMenu) =>{
    itemMenu.setAttribute("aria-expanded", "false");
     });
     doc.style.setProperty("--body-shadowed", "hidden");
     doc.style.setProperty("--animation-body", "animBodyWidth 300ms ease-in-out forwards");
  }
}

cartBoxTrigger.addEventListener('click', cartMenu);

function cartMenu(){
  if(cartBoxContent.getAttribute('data-cart-toggled') === 'false' && collectNumberItems.numItem <= 0){
    cartBoxContent.setAttribute("data-cart-toggled", "true");
    emptyCart.setAttribute("data-add-cart", "true");

  } else if(cartBoxContent.getAttribute('data-cart-toggled') === 'true' && collectNumberItems.numItem <= 0) {
    cartBoxContent.setAttribute("data-cart-toggled", "false");
    emptyCart.setAttribute("data-add-cart", "false");

  } 
}

overlayBox.addEventListener('click', cartMenu1);
function cartMenu1(){
  let j= collectNumberItems.indexPicture;
  
  if(cartBoxContent.getAttribute('data-cart-toggled') === 'false' && collectNumberItems.numItem > 0){
    cartBoxContent.setAttribute("data-cart-toggled", "true");
    filledCart.setAttribute("data-number-exist", "true");
    for(let i=0; i<cartPro.length; i++){
      cartPro[i].setAttribute("data-show-item", "false"); 
    }
    cartPro[j].setAttribute("data-show-item", "true");
    cartNumberItem[j].textContent= collectNumberItems.numItem;  
  } else if(cartBoxContent.getAttribute('data-cart-toggled') === 'true' && collectNumberItems.numItem > 0){
    cartBoxContent.setAttribute("data-cart-toggled", "false");
    filledCart.setAttribute("data-number-exist", "false");
    cartPro[j].setAttribute("data-show-item", "false");
  }
  else if( totalAmount[j].innerHTML === '0' && collectNumberItems.numItem === 0){
    cartBoxContent.setAttribute("data-cart-toggled", "false");
    filledCart.setAttribute("data-number-exist", "false");
    cartPro[j].setAttribute("data-show-item", "false");
    cartBoxTrigger.style.setProperty("--box-numb-selected", "hidden");
  }
}

cartAdd.addEventListener('click', onTopImageCart);

function onTopImageCart(){
  collectNumberItems.numItem= getNumberItems.value;
  if(collectNumberItems.numItem > 0){
    let a= collectNumberItems.numItem;
    let b= collectNumberItems.indexPicture;
    let c;
    // cartBoxTrigger.style.setProperty("--box-numb-selected", "visible");
    cartLink.style.scrollBehavior="smooth";
    overlayBox.style.visibility="visible";
    overlayNumber.innerHTML= `${a}`;
    console.log(overallUnitPriceInNumber[b].innerHTML);
    productPrice= parseInt(overallUnitPriceInNumber[b].innerHTML) * parseInt( overlayNumber.innerHTML);
    console.log(productPrice);
    totalAmount[b].innerHTML= `${productPrice}`;
  }
}

getPlus.addEventListener('click', incrementNumber);

function incrementNumber(){
  let a;
  collectNumberItems.numItem= parseInt(getNumberItems.value) + 1;
  getNumberItems.value= collectNumberItems.numItem;
  a= getNumberItems.value;
  getNumberItems.setAttribute("value", `${a}`);
}

getMinus.addEventListener('click', decrementNumber);

function decrementNumber(){
  let a;
  collectNumberItems.numItem= parseInt(getNumberItems.value) - 1;
  getNumberItems.value= collectNumberItems.numItem;
  a= getNumberItems.value;
  getNumberItems.setAttribute("value", `${a}`);
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
    overallUnitPrice[i].setAttribute("data-h1-view", "false");
    exAmount[i].setAttribute("data-perform-price", "false");
  }
  mainPictures[slideIndex - 1].setAttribute("data-show-item", "true");
  advertizingText[slideIndex - 1].setAttribute("data-show-item", "true");

  overallUnitPrice[slideIndex - 1].setAttribute("data-h1-view", "true");
  exAmount[slideIndex - 1].setAttribute("data-perform-price", "true");

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
    overallUnitPrice[i].setAttribute("data-h1-view", "false");
    exAmount[i].setAttribute("data-perform-price", "false");
  }
  mainPictures[slideIndexPrevious - 1].setAttribute("data-show-item", "true");
  advertizingText[slideIndexPrevious - 1].setAttribute("data-show-item", "true");

  overallUnitPrice[slideIndexPrevious - 1].setAttribute("data-h1-view", "true");
  exAmount[slideIndexPrevious - 1].setAttribute("data-perform-price", "true");

  collectNumberItems.indexPicture= slideIndexPrevious - 1;
}

deleteSelection.addEventListener('click', deleteCartMenuPrice);

function deleteCartMenuPrice(){
  let b= collectNumberItems.indexPicture;
  collectNumberItems.numItem= 0;
  overlayBox.style.visibility="visible";
  overlayNumber.innerHTML= '0';
  totalAmount[b].innerHTML= '0';
  cartNumberItem[b].textContent='0';
  getNumberItems.setAttribute("value", "0");
  getNumberItems.value= collectNumberItems.numItem;
}


// item Selection float for desktop

iconArrowRightNew.addEventListener('click', arrowNextSlideNew);

function arrowNextSlideNew(){
  n= 1;
  slideIndex= slideIndex + n;
  if(slideIndex > mainPicturesNew.length){
    slideIndex=1;
  } else if(slideIndex < 1){
    slideIndex= mainPicturesNew.length;
  }
  for(let i= 0; i<mainPicturesNew.length; i++){
    mainPictures[i].setAttribute("data-show-item", "false");
    mainPicturesNew[i].style.setProperty("--item-float-image", "hidden");
    advertizingText[i].setAttribute("data-show-item", "false");
    overallUnitPrice[i].setAttribute("data-h1-view", "false");
    exAmount[i].setAttribute("data-perform-price", "false");
  }
  mainPictures[slideIndex - 1].setAttribute("data-show-item", "true");
  mainPicturesNew[slideIndex - 1].style.setProperty("--item-float-image", "visible");
  advertizingText[slideIndex - 1].setAttribute("data-show-item", "true");

  overallUnitPrice[slideIndex - 1].setAttribute("data-h1-view", "true");
  exAmount[slideIndex - 1].setAttribute("data-perform-price", "true");

  collectNumberItems.indexPicture= slideIndex -1;
}

iconArrowLeftNew.addEventListener('click', arrowPreviousSlideNew);

function arrowPreviousSlideNew(){
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
  for(let i= 0; i<mainPicturesNew.length; i++){
    mainPicturesNew[i].style.setProperty("--item-float-image", "hidden");
    mainPictures[i].setAttribute("data-show-item", "false");
    advertizingText[i].setAttribute("data-show-item", "false");
    overallUnitPrice[i].setAttribute("data-h1-view", "false");
    exAmount[i].setAttribute("data-perform-price", "false");
  }
  mainPictures[slideIndexPrevious - 1].setAttribute("data-show-item", "true");
  mainPicturesNew[slideIndexPrevious - 1].style.setProperty("--item-float-image", "visible");
  advertizingText[slideIndexPrevious - 1].setAttribute("data-show-item", "true");

  overallUnitPrice[slideIndexPrevious - 1].setAttribute("data-h1-view", "true");
  exAmount[slideIndexPrevious - 1].setAttribute("data-perform-price", "true");

  collectNumberItems.indexPicture= slideIndexPrevious - 1;
}

doc.addEventListener('mousedown', changeMiniImage); 

function changeMiniImage(e){
  let j;
  if( e.target.classList.contains('slide_curve') ){
    for(let i=0; i<mainPictures.length; i++){
      sliderImageBox[i].style.bordercolor="1px solid transparent";
      advertizingText[i].setAttribute("data-show-item", "false");
      overallUnitPrice[i].setAttribute("data-h1-view", "false");
      exAmount[i].setAttribute("data-perform-price", "false");
      mainPictures[i].setAttribute("data-show-item", "false");
      if(sliderImagePicture[i] === e.target){
        collectNumberItems.indexPicture= i;
      }
    }
    j= collectNumberItems.indexPicture;

    sliderImageBox[j].style.bordercolor="1px solid hsl(26, 100%, 55%)";
    advertizingText[j].setAttribute("data-show-item", "true");
    mainPictures[j].setAttribute("data-show-item", "true");

    overallUnitPrice[j].setAttribute("data-h1-view", "true");
    exAmount[j].setAttribute("data-perform-price", "true");
  }
}

doc.addEventListener('mousedown', changeMiniImageNew); 

function changeMiniImageNew(e){
  let j;
  if( e.target.classList.contains('slide_curve_new') ){
    for(let i=0; i<mainPictures.length; i++){
      sliderImageBox[i].style.bordercolor="1px solid transparent";
      advertizingText[i].setAttribute("data-show-item", "false");
      overallUnitPrice[i].setAttribute("data-h1-view", "false");
      exAmount[i].setAttribute("data-perform-price", "false");
      mainPictures[i].setAttribute("data-show-item", "false");
      mainPicturesNew[i].style.setProperty("--item-float-image", "hidden");
      if(sliderImagePictureNew[i] === e.target){
        collectNumberItems.indexPicture= i;
      }
    }
    j= collectNumberItems.indexPicture;

    sliderImageBox[j].style.bordercolor="1px solid hsl(26, 100%, 55%)";
    advertizingText[j].setAttribute("data-show-item", "true");
    mainPictures[j].setAttribute("data-show-item", "true");
    mainPicturesNew[j].style.setProperty("--item-float-image", "visible");

    overallUnitPrice[j].setAttribute("data-h1-view", "true");
    exAmount[j].setAttribute("data-perform-price", "true");
  }
}

doc.addEventListener('mousedown', PopUpMainImageNew);

function PopUpMainImageNew(e){
  let j;
  if(e.target.classList.contains('your_shoes')){
    for(let i=0; i<mainPictures.length; i++){

      mainPictures[i].setAttribute("data-show-item", "false");
      if(mainPictures[i] === e.target){
        collectNumberItems.indexPicture = i;
      }
    }
    j= collectNumberItems.indexPicture;

    doc.style.setProperty("--white", "hsl(25, 100%, 94%)");

    mainPictures[j].setAttribute("data-show-item", "true");
      mainPicturesNew[j].style.setProperty("--item-float-image", "visible");
      itemSelectionFloat.style.setProperty("--item-float-view", "visible");
      itemSelectionFloat.style.transition= " visibility  480ms linear";
  }
}

closeFloat.addEventListener('click', closeItemselectFolatMenu);

function closeItemselectFolatMenu(){
  let j= collectNumberItems.indexPicture; 
  doc.style.setProperty("--white", "hsl(0, 0%, 100%)");
    itemSelectionFloat.style.setProperty("--item-float-view", "hidden");
    mainPicturesNew[j].style.setProperty("--item-float-image", "hidden");
}


