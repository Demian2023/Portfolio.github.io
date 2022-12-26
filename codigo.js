const contacto = () => {
    window.open("https://api.whatsapp.com/send?phone=5493462662288&text=");
}

var tl = gsap.timeline();
tl.from(".foto", { delay: 1, duration: 2, opacity: 0, x: 200, rotate: 25, ease: "power2" });
tl.from(".soy", { duration: 1.5, y: 100, x: '-100vw', ease: "power1" }, "-=1.5");


const cuerpoRedes = document.querySelector('.cuerpoRedes');

gsap.registerPlugin(ScrollTrigger);

gsap.from(".cuerpoRedes", {
    scrollTrigger: {
        trigger: ".cuerpoRedes",
        toggleActions: "restart restart",
    },
    delay: .25,
    x: "-100vw",
    duration: 2,
})

const boton = document.getElementsByClassName("toggle")[0]
const navBoton = document.getElementsByClassName("der")[0]
const cuerpo = document.getElementsByClassName("cuerpo")[0]

const toggle = () => {
    navBoton.classList.toggle('active');
    cuerpo.classList.toggle('active');
}
