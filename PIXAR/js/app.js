'use strict';
var icono = document.querySelector('.fa-bars');
var nav = document.querySelector('.menu');
icono.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
