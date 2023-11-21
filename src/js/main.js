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
    markers: true,
    scrub: true,
  },
  scale: 0.9,
});

gsap.from("#logo", {
  y: 800,
  scrollTrigger: {
    trigger: "#section-parallax",
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
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
    markers: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});
