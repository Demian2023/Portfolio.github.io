const contacto = () => {
    window.open("https://api.whatsapp.com/send?phone=5493462662288&text=");
}

"use strict";

const trigger = document.querySelectorAll(".trigger");

const cuerpoDer = document.getElementsByClassName("cuerpoDer")[0];
const soy = document.getElementsByClassName("soy")[0];


const verifyVisibility = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            cuerpoDer.classList.add('mov');
            soy.classList.add('movSoy');
        } else {
            cuerpoDer.classList.remove('mov');
            soy.classList.remove('movSoy');
        }
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for (const caja of trigger) {
    observer.observe(caja);
}

// segundo observer

const triggerCuerpoRedes = document.querySelectorAll(".sobreMiMov");

const sobreMiMov = document.getElementsByClassName("sobreMiMov")[0];


const verifyVisibility2 = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            sobreMiMov.classList.add('sobreMi');
        } else {
            sobreMiMov.classList.remove('sobreMi');
        }
    }
}

const observer2 = new IntersectionObserver(verifyVisibility2);

for (const caja of triggerCuerpoRedes) {
    observer2.observe(caja);
}

const boton = document.getElementsByClassName("toggle")[0]
const navBoton = document.getElementsByClassName("der")[0]
const cuerpo = document.getElementsByClassName("cuerpo")[0]

const toggle = () => {
    navBoton.classList.toggle('active');
    cuerpo.classList.toggle('active');
}
