let fullHeight = window.innerHeight;

ScrollTrigger.saveStyles(".bowl, .logo-transparent");

ScrollTrigger.matchMedia({
    "(min-width: 750px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: `+=${fullHeight * 4}px`,
                pin: ".hero",
                scrub: "2",
                invalidateOnRefresh: "true"
            }
        });
        tl.to(".logo-transparent", {
            x: () => {
                return document.querySelector(".see-through").offsetWidth / -4;
            },
            scale: "0.8"
        }).fromTo(".bowl", {
            y: 0,
            x: 0
        }, {
            y: () => {
                return document.querySelector(".see-through").offsetHeight / 2 - 170;
            },
            x: () => {
                return document.querySelector(".see-through").offsetWidth * 3 / 4 - 170;
            }
        }, "<").to(".bowl", {
            opacity: "1",
            delay: "0.2"
        }).to(".hero", {
            backgroundSize: "105% 105%"
        });
    },
    "(max-width: 749px) and (hover: hover)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: `+=${fullHeight * 4}px`,
                pin: ".hero",
                scrub: "1",
                invalidateOnRefresh: "true"
            }
        });
        tl.to(".logo-transparent", {
            y: () => {
                return document.querySelector(".see-through").offsetHeight / -4;
            },
            scale: "0.9"
        }).fromTo(".bowl", {
            x: 0,
            y: 0
        }, {
            x: () => {
                return document.querySelector(".see-through").offsetWidth / 2 - 170;
            },
            y: () => {
                return document.querySelector(".see-through").offsetHeight * 3 / 4 - 200;
            },
            scale: "0.7"
        }, "<").to(".bowl", {
            opacity: "1",
            delay: "0.2"
        }).to(".hero", {
            backgroundSize: "105% 105%"
        });
    },
    "(hover: none)" : function(){
        gsap.set(".logo-transparent", {
            y: () => {
                return document.querySelector(".see-through").offsetHeight / -4;
            },
            scale: "0.9"
        });
        gsap.set(".bowl", {
            x: () => {
                return document.querySelector(".see-through").offsetWidth / 2 - 170;
            },
            y: () => {
                return document.querySelector(".see-through").offsetHeight * 3 / 4 - 200;
            },
            scale: "0.7",
            opacity: "1",
        });
    }
});

gsap.fromTo(".feature-card", {
    y: "30px",
    opacity: "0"
},{
    y: "0px",
    opacity: "1",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".feature-trigger",
        start: "top 200px"
    }
});

gsap.to("header", {
    y: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".hero",
        start: "bottom top",
        toggleActions: "play none reverse none"
    }
});

smoother.effects("span", {
    lag: (i) => (i*0.06) + 0.16
});