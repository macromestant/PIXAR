'use strict'

const icono = (document.querySelector('.fa-bars') as HTMLElement)
const nav   = (document.querySelector('.menu') as HTMLElement)

icono.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
})
