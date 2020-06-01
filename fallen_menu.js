 let sliderOne = document.querySelector(".input-left");
 let valueOne = document.querySelector("p.price1");
 let sliderTwo = document.querySelector(".input-right");
 let valueTwo = document.querySelector("p.price2");
 valueOne.innerHTML = sliderOne.value;
 sliderOne.oninput = function () {
   valueOne.innerHTML = this.value;
 };
 valueTwo.innerHTML = sliderTwo.value;
 sliderTwo.oninput = function () {
   valueTwo.innerHTML = this.value;
 };

 let inputLeft = document.querySelector(".input-left");
 let inputRight = document.querySelector(".input-right");

 let thumbLeft = document.querySelector(".slider > .thumb.left");
 let thumbRight = document.querySelector(".slider > .thumb.right");
 let range = document.querySelector(".slider > .range");

 function setLeftValue() {
   let _this = inputLeft,
     min = parseInt(_this.min),
     max = parseInt(_this.max);

   _this.value = Math.min(
     parseInt(_this.value),
     parseInt(inputRight.value) - 1
   );

   let percent = ((_this.value - min) / (max - min)) * 100;

   thumbLeft.style.left = percent + "%";
   range.style.left = percent + "%";
 }
 setLeftValue();

 function setRightValue() {
   let _this = inputRight,
     min = parseInt(_this.min),
     max = parseInt(_this.max);

   _this.value = Math.max(
     parseInt(_this.value),
     parseInt(inputLeft.value) + 1
   );

   let percent = ((_this.value - min) / (max - min)) * 100;

   thumbRight.style.right = 100 - percent + "%";
   range.style.right = 100 - percent + "%";
 }
 setRightValue();

 inputLeft.addEventListener("input", setLeftValue);
 inputRight.addEventListener("input", setRightValue);


 let filterElem = document.querySelector(".menu__filter-block");
 let filterVector = document.querySelector(".menu__filter");

filterVector.onclick = function() {
   filterElem.classList.toggle("menu__filter-fall");
   filterVector.classList.toggle("menu__filter-vector");
 }
 
 let priceElem = document.querySelector(".price__box");
 let priceVector = document.querySelector(".menu__price");

 priceVector.onclick = function() {
   priceElem.classList.toggle("price__filter-fall");
   priceVector.classList.toggle("menu__price-vector");
 }
 
 let colorElem = document.querySelector(".menu__color-all");
 let colorVector = document.querySelector(".menu__color");

 colorVector.onclick = function() {
   colorElem.classList.toggle("menu__color-fall");
   colorVector.classList.toggle("menu__color-vector");
 }
 
 let collectionElem = document.querySelector(".collection__box");
 let collectionVector = document.querySelector(".menu__collection");

 collectionVector.onclick = function() {
   collectionElem.classList.toggle("menu__collection-fall");
   collectionVector.classList.toggle("menu__collection-vector");
 }

 
 let colorOne = document.querySelector(".border1");
 let colorTwo = document.querySelector(".border2");
 let colorThree = document.querySelector(".border3");
 let colorFour = document.querySelector(".border4");
 let colorFive = document.querySelector(".border5");
 let colorSix = document.querySelector(".border6");

 colorOne.onclick = function () {
   colorOne.classList.toggle("click_border1");
 };
 colorTwo.onclick = function () {
   colorTwo.classList.toggle("click_border2");
 };
 colorThree.onclick = function () {
   colorThree.classList.toggle("click_border3");
 };
 colorFour.onclick = function () {
   colorFour.classList.toggle("click_border4");
 };
 colorFive.onclick = function () {
   colorFive.classList.toggle("click_border5");
 };
 colorSix.onclick = function () {
   colorSix.classList.toggle("click_border6");
 };

 let casual = document.querySelector(".casual");
 let petite = document.querySelector(".petite");
 let classic = document.querySelector(".classic");
 let soulluxe = document.querySelector(".soulluxe");

 casual.onclick = function () {
   casual.classList.toggle("collection_click");
 };
 petite.onclick = function () {
   petite.classList.toggle("collection_click");
 };
 classic.onclick = function () {
   classic.classList.toggle("collection_click");
 };
 soulluxe.onclick = function () {
   soulluxe.classList.toggle("collection_click");
 };