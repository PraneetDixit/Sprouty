gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: "true"
});

const header = document.querySelector("header");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active")
});

document.addEventListener("click", function(e){
    if((!header.contains(e.target)) && nav.classList.contains("active")){
        nav.classList.toggle("active");
    }
});