 let inputLeft = document.querySelector(".input-left");
 let valueLeft = document.querySelector("p.price1");
 let inputRight = document.querySelector(".input-right");
 let valueRight = document.querySelector("p.price2");
 valueLeft.innerHTML = inputLeft.value;
 inputLeft.oninput = function () {
   valueLeft.innerHTML = this.value;
 };
 valueRight.innerHTML = inputRight.value;
 inputRight.oninput = function () {
   valueRight.innerHTML = this.value;
 };

 let thumbLeft = document.querySelector(".slider > .thumb.left");
 let thumbRight = document.querySelector(".slider > .thumb.right");
 let range = document.querySelector(".slider > .range");

 function setLeftValue() {
   let thisValue = inputLeft,
     min = parseInt(thisValue.min),
     max = parseInt(thisValue.max);

   thisValue.value = Math.min(
     parseInt(thisValue.value),
     parseInt(inputRight.value) - 1
   );

   let percent = ((thisValue.value - min) / (max - min)) * 100;

   thumbLeft.style.left = percent + "%";
   range.style.left = percent + "%";
 }
 setLeftValue();

 function setRightValue() {
   let thisValue = inputRight,
     min = parseInt(thisValue.min),
     max = parseInt(thisValue.max);

   thisValue.value = Math.max(
     parseInt(thisValue.value),
     parseInt(inputLeft.value) + 1
   );

   let percent = ((thisValue.value - min) / (max - min)) * 100;

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

 
 let colorTowerGray = document.querySelector(".border1");
 let colorChambray = document.querySelector(".border2");
 let colorSilverSand = document.querySelector(".border3");
 let colorOuterSpace = document.querySelector(".border4");
 let colorGallery = document.querySelector(".border5");
 let colorHavelockBlue = document.querySelector(".border6");

 colorTowerGray.onclick = function () {
  colorTowerGray.classList.toggle("click_border1");
 };
 colorChambray.onclick = function () {
   colorChambray.classList.toggle("click_border2");
 };
 colorSilverSand.onclick = function () {
   colorSilverSand.classList.toggle("click_border3");
 };
 colorOuterSpace.onclick = function () {
   colorOuterSpace.classList.toggle("click_border4");
 };
 colorGallery.onclick = function () {
   colorGallery.classList.toggle("click_border5");
 };
 colorHavelockBlue.onclick = function () {
   colorHavelockBlue.classList.toggle("click_border6");
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