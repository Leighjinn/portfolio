const words = [
    "Software Developer",
    "Web Developer",
    "UI Designer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

reveals.forEach(sec=>{

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight-100){

sec.classList.add("active");

}

});

}

reveal();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

const text = new SplitType("#portfolioText", {
    types: "chars"
});

gsap.set("#portfolioIcon", {
    opacity: 0,
    scale: 0
});

const tl = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

tl.to({}, {
    duration: 2
})

.to("#portfolioIcon", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out(2)"
}, "-=0.2")

.to(text.chars, {
    opacity: 0,
    x: -40,
    y: () => gsap.utils.random(-20,20),
    rotate: () => gsap.utils.random(-90,90),
    scale: 0,
    stagger: .03,
    duration: .6
}, "<")

.to(".logo", {
    x: -120,
    duration: .7,
    ease: "power2.inOut"
}, "-=0.2");

