# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

<!-- Mobile Responsiveness -->

![./Mobile-Screenshot_1.png](./screenshot.jpg)
![./Mobile-Screenshot_2.png](./screenshot.jpg)
![./Mobile-Screenshot_3.png](./screenshot.jpg)
![./Mobile-Screenshot_4.png](./screenshot.jpg)

<!-- Desktop Responsiveness -->

![./Desktop-Screenshot_1.png](./screenshot.jpg)
![./Desktop-Screenshot_2.png](./screenshot.jpg)
![./Desktop-Screenshot_3.png](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/BeinRain06/ecommerce-product-page-main.git]
- Live Site URL: [https://beinrain06.github.io/ecommerce-product-page-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

*make **icon** keep regular spacing*

Through the process of styling **slider arrow icons** with css *iconsArrowrigth* and  *iconsArrowLeft* tend to randomly change spacing in either x-axis or Y-axis between them, each time the web browser is barely resize in order to achieve responsiveness.
By going right the project We find out a way to **fix** the x-position of the two icons using **top and left** , with **top and right**.

here a snippet code belonging to the button icon arrow left and the button icon arrow right:

```css
.slider_arrow_new button.icon_arrowleft{
  position: absolute;
  top: 0;
  left: calc(4vw - 5vw);
  width: 30px;
  height: 30px;
  padding: 0.5rem;
}

.slider_arrow_new button.icon_arrowright{
  position: absolute;
  top: 0;
  right: calc(4vw - 1vw);
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  margin: 0 auto;
}
```

*resizing a box with `position:absolute` as same iin width as **background-image** where is **popping up over***

At the other hand according to a size continuously growing of the **main shoes background-image** we need to aettle **CartBox**  size  with the actual size each time reaches by the **background-image**.
We come up with the idea of using **vw** for `width` and the method **calc()** the `height`.
here below are the lines code used:

```css
.cart_box[data-cart-toggled="true"]{
  position: absolute;
  top: 1.22rem;
  left: 0;
  transform: translateX(-4%);
  width: 100vw;
  height: calc(84vw);
}
```
the CartBox is accessible by clicking the *image cart* nest to the avatar.

*`input:button` with **position:fixed***

 `Position:fixed` property set to **a button** within a box that is set with `position:absolute`  design sometimes looks suitable than using `Position:relative` as it leads to few **customization**.  
the small codes uunderneath is the one use for the style of the `button:checkout` :

```css
button[class="cart_checkout"]{
  position: fixed;
  top: -2rem;
  left: 0;
  padding: 0.8rem 1rem;
  transform: translate(0, 480%);
  width: 100%;
  margin: 0 auto;
}
```

### Continued development

This project leads us to use many =**data-attributes** all along his writing. This, associate a need to know much about **managing and storing data**. Goods skills to ease the code  comprehension , and too, to reduce tremendously the numbers of lines codes *being written*.  

### Useful resources

- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded] This resource allow me to find out what is `aria-expanded` attribute and how to use it to toggle and control a *button menu*.

- [https://stackoverflow.com/questions/14483589/z-index-not-working-with-position-absolute]- I learned with stackoverflow that you cannot affect a property **z-index** to a floating box. When saying floating, i talk about a box where position is set to `absolute`. By that i review how to handle *the function* that display the **itemSelectionFloat section** to overlap *the body default style* essentially achieves

- [https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree]- I learned to set attribute created by myself with these examples being given with *mdn reference*.

## Author

- Website - [Ngouend Raoul Gerard](https://www.your-site.com)
- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [https://www.twitter.com/nest_Ngoueni](https://www.twitter.com/yourusername)
- LinkedIn - [https://www.linkedin.com/ngouend-gerard-5a0584244](https://www.twitter.com/yourusername)


