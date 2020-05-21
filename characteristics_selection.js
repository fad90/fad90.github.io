let silver_border_color = document.querySelector(".border1");
let blue_border_color = document.querySelector(".border2");
let grey_border_color = document.querySelector(".border3");

silver_border_color.onclick = function () {
    silver_border_color.classList.toggle("silver");
};
blue_border_color.onclick = function () {
    blue_border_color.classList.toggle("blue");
};
grey_border_color.onclick = function () {
    grey_border_color.classList.toggle("grey");
};

let size_xs_click = document.querySelector(".size_xs");
let size_s_click = document.querySelector(".size_s");
let size_m_click = document.querySelector(".size_m");
let size_l_click = document.querySelector(".size_l");
let size_xl_click = document.querySelector(".size_xl");

size_xs_click.onclick = function () {
size_xs_click.classList.toggle("size_colour");
};

size_s_click.onclick = function () {
size_s_click.classList.toggle("size_colour");
};

size_m_click.onclick = function () {
size_m_click.classList.toggle("size_colour");
};

size_l_click.onclick = function () {
size_l_click.classList.toggle("size_colour");
};

size_xl_click.onclick = function () {
size_xl_click.classList.toggle("size_colour");
};