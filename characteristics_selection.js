let colorTowerGray = document.querySelector(".border-color_TowerGray"),
    colorChambray = document.querySelector(".border-color_Chambray"),
    colorSilverSand = document.querySelector(".border-color_SilverSand");

colorTowerGray.onclick = function () {
    colorTowerGray.classList.toggle("TowerGray");
};
colorChambray.onclick = function () {
    colorChambray.classList.toggle("Chambray");
};
colorSilverSand.onclick = function () {
    colorSilverSand.classList.toggle("SilverSand");
};

let sizeXsClick = document.querySelector(".size_xs"),
    sizeSClick = document.querySelector(".size_s"),
    sizeMClick = document.querySelector(".size_m"),
    sizeLClick = document.querySelector(".size_l"),
    sizeXlClick = document.querySelector(".size_xl");

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