let colorTowerGray = document.querySelector(".border1");
let colorChambray = document.querySelector(".border2");
let colorSilverSand = document.querySelector(".border3");

colorTowerGray.onclick = function () {
    colorTowerGray.classList.toggle("silver");
};
colorChambray.onclick = function () {
    colorChambray.classList.toggle("blue");
};
colorSilverSand.onclick = function () {
    colorSilverSand.classList.toggle("grey");
};

let sizeXsClick = document.querySelector(".size_xs");
let sizeSClick = document.querySelector(".size_s");
let sizeMClick = document.querySelector(".size_m");
let sizeLClick = document.querySelector(".size_l");
let sizeXlClick = document.querySelector(".size_xl");

sizeXsClick.onclick = function () {
sizeXsClick.classList.toggle("size_colour");
};

sizeSClick.onclick = function () {
sizeSClick.classList.toggle("size_colour");
};

sizeMClick.onclick = function () {
sizeMClick.classList.toggle("size_colour");
};

sizeLClick.onclick = function () {
sizeLClick.classList.toggle("size_colour");
};

sizeXlClick.onclick = function () {
sizeXlClick.classList.toggle("size_colour");
};