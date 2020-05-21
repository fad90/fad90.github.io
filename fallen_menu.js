 let slider1 = document.querySelector(".input-left");
 let val1 = document.querySelector("p.price1");
 let slider2 = document.querySelector(".input-right");
 let val2 = document.querySelector("p.price2");
 val1.innerHTML = slider1.value;
 slider1.oninput = function () {
   val1.innerHTML = this.value;
 };
 val2.innerHTML = slider2.value;
 slider2.oninput = function () {
   val2.innerHTML = this.value;
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

 function menuFall() {
   filterElem.classList.toggle("menu__filter-fall");
   filterVector.classList.toggle("menu__filter-vector");
 }
 
 let priceElem = document.querySelector(".price__box");
 let priceVector = document.querySelector(".menu__price");

 function priceFall() {
   priceElem.classList.toggle("price__filter-fall");
   priceVector.classList.toggle("menu__price-vector");
 }
 
 let colorElem = document.querySelector(".menu__color-all");
 let colorVector = document.querySelector(".menu__color");

 function colorFall() {
   colorElem.classList.toggle("menu__color-fall");
   colorVector.classList.toggle("menu__color-vector");
 }
 
 let collectionElem = document.querySelector(".collection__box");
 let collectionVector = document.querySelector(".menu__collection");
 function collectionFall() {
   collectionElem.classList.toggle("menu__collection-fall");
   collectionVector.classList.toggle("menu__collection-vector");
 }

 
 let color1 = document.querySelector(".border1");
 let color2 = document.querySelector(".border2");
 let color3 = document.querySelector(".border3");
 let color4 = document.querySelector(".border4");
 let color5 = document.querySelector(".border5");
 let color6 = document.querySelector(".border6");

 color1.onclick = function () {
   color1.classList.toggle("click_border1");
 };
 color2.onclick = function () {
   color2.classList.toggle("click_border2");
 };
 color3.onclick = function () {
   color3.classList.toggle("click_border3");
 };
 color4.onclick = function () {
   color4.classList.toggle("click_border4");
 };
 color5.onclick = function () {
   color5.classList.toggle("click_border5");
 };
 color6.onclick = function () {
   color6.classList.toggle("click_border6");
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