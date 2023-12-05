import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/*-----top-parallax-----*/

/*------Layer-1------*/

gsap.from("#ysa", {
  y: 750,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  scale: 0.9,
});

gsap.from("#logo", {
  y: 800,
  scrollTrigger: {
    trigger: "#section-parallax",
    scrub: true,
  },
  scale: 1,
});

/*------Layer-2------*/

gsap.from("#foreground", {
  y: 3000,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/*------Layer-3------*/

gsap.from("#midground", {
  y: 730,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  scale: 1,
});

/*------Layer-4------*/

gsap.from("#tree-left", {
  y: 550,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/*------Layer-5------*/

gsap.from("#tree-right", {
  y: 350,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  scale: 0.9,
});

/*------Layer-6------*/

gsap.from("#castle", {
  y: 140,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/*------Layer-7------*/

gsap.from("#portal", {
  y: 200,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/*------Layer-8------*/

gsap.from("#bg", {
  y: 0,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

/*-----bottom-parallax-----*/

window.addEventListener("load", function () {
  gsap.from("#section-parallax", {
    opacity: 0,
    y: "100%",
    duration: 2,
    ease: "power4.out",
  });
});

/*-----section-character-animation-----*/

/*------King------*/

gsap.from("#character-left", {
  x: -250,
  opacity: 1,
  scrollTrigger: {
    trigger: "#character-presentation",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    ease: "power1.inOut",
    duration: 0.5,
  },
});

gsap.from("#character-right", {
  x: 100,
  scrollTrigger: {
    trigger: "#character-presentation",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    ease: "power1.inOut",
    duration: 0.5,
  },
});

/*-----slider-----*/

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});

/*-----slider-LAYERS-----*/

gsap.to(".layer-1-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "middle",
    end: "+=40%",
    scrub: true,
  },
  scale: 1.1,
  x: "-35%",
  ease: "sine.inOut",
});

gsap.to(".layer-2-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "middle",
    end: "+=60%",
    scrub: true,
  },
  scale: 1.1,
  x: "35%",
  ease: "sine.inOut",
});

gsap.to(".layer-3-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "middle",
    end: "+=40%",
    scrub: true,
  },
  x: "10%",
  ease: "sine.inOut",
});

gsap.to(".layer-4-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "middle",
    end: "+=110%",
    scrub: true,
  },
  x: "-10%",
  ease: "sine.inOut",
});

/*-----slider-LAYERS-SECTION-2-----*/

gsap.to(".layer-11-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=30%",
    end: "+=150%",
    scrub: true,
  },
  scale: 1.1,
  x: "45%",
  ease: "sine.inOut",
});

gsap.to(".layer-8-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=50%",
    end: "+=90%",
    scrub: true,
  },

  scale: 1.3,
  x: "50%",
  ease: "sine.inOut",
});

gsap.to(".layer-6-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=20%",
    end: "=80%",
    scrub: true,
  },
  x: "30%",
  ease: "sine.inOut",
});

gsap.to(".layer-12-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=20%",
    end: "+=150%",
    scrub: true,
  },
  x: "60%",
  ease: "sine.inOut",
});

gsap.to(".layer-14-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=10%",
    end: "+=350%",
    scrub: true,
  },
  scale: 0.9,
  x: "180%",
  ease: "sine.inOut",
});

gsap.to(".layer-15-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "=100%",
    end: "+=350%",
    scrub: true,
  },
  x: "80%",
  ease: "sine.inOut",
});

gsap.to(".layer-16-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=10%",
    end: "+=650%",
    scrub: true,
    scale: 0.9,
  },
  x: "80%",
  ease: "sine.inOut",
});

gsap.to(".layer-17-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=0%",
    end: "+=0%",
    scrub: true,
  },
  x: "60%",
  ease: "sine.inOut",
});

gsap.to(".layer-18-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=0%",
    end: "+=10%",
    scrub: true,
  },
  x: "60%",
  ease: "sine.inOut",
});

gsap.to(".layer-13-horizontal", {
  scrollTrigger: {
    trigger: ".slider-track",
    scrub: true,
  },
  scale: 1.4,
  ease: "sine.inOut",
});
