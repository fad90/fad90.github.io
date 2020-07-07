 let inputLeft = document.querySelector(".input-left"),
     valueLeft = document.querySelector("p.price__input-left"),
     inputRight = document.querySelector(".input-right"),
     valueRight = document.querySelector("p.price__input-right");

 valueLeft.innerHTML = inputLeft.value;
 inputLeft.oninput = function () {
   valueLeft.innerHTML = this.value;
 };
 valueRight.innerHTML = inputRight.value;
 inputRight.oninput = function () {
   valueRight.innerHTML = this.value;
 };

 let thumbLeft = document.querySelector(".slider > .thumb.left"),
     thumbRight = document.querySelector(".slider > .thumb.right"),
     range = document.querySelector(".slider > .range");

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


 let filterElem = document.querySelector(".menu__filter-block"),
     filterVector = document.querySelector(".menu__filter");

filterVector.onclick = function() {
   filterElem.classList.toggle("menu__filter-fall");
   filterVector.classList.toggle("menu__filter-vector");
 }
 
 let priceElem = document.querySelector(".price__box"),
     priceVector = document.querySelector(".menu__price");

 priceVector.onclick = function() {
   priceElem.classList.toggle("price__filter-fall");
   priceVector.classList.toggle("menu__price-vector");
 }
 
 let colorElem = document.querySelector(".menu__color-all"),
     colorVector = document.querySelector(".menu__color");

 colorVector.onclick = function() {
   colorElem.classList.toggle("menu__color-fall");
   colorVector.classList.toggle("menu__color-vector");
 }
 
 let collectionElem = document.querySelector(".collection__wrap"),
     collectionVector = document.querySelector(".menu__collection");

 collectionVector.onclick = function() {
   collectionElem.classList.toggle("menu__collection-fall");
   collectionVector.classList.toggle("menu__collection-vector");
 }

 
 let colorTowerGray = document.querySelector(".border_TowerGray"),
     colorChambray = document.querySelector(".border_Chambray"),
     colorSilverSand = document.querySelector(".border_SilverSand"),
     colorOuterSpace = document.querySelector(".border_OuterSpace"),
     colorGallery = document.querySelector(".border_Gallery"),
     colorHavelockBlue = document.querySelector(".border_HavelockBlue");

 colorTowerGray.onclick = function () {
  colorTowerGray.classList.toggle("click__border_TowerGray");
 };
 colorChambray.onclick = function () {
   colorChambray.classList.toggle("click__border_Chambray");
 };
 colorSilverSand.onclick = function () {
   colorSilverSand.classList.toggle("click__border_SilverSand");
 };
 colorOuterSpace.onclick = function () {
   colorOuterSpace.classList.toggle("click__border_OuterSpace");
 };
 colorGallery.onclick = function () {
   colorGallery.classList.toggle("click__border_Gallery");
 };
 colorHavelockBlue.onclick = function () {
   colorHavelockBlue.classList.toggle("click_border_HavelockBlue");
 };

 let casual = document.querySelector(".casual"),
     petite = document.querySelector(".petite"),
     classic = document.querySelector(".classic"),
     soulluxe = document.querySelector(".soulluxe");

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