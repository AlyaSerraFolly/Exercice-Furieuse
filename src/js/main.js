import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/*-----top-parallax-----*/

/*------Layer-1------*/

gsap.from("#ysa", {
  y: 660,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
    scale: 1,
  },
});

/*------Layer-2------*/

gsap.from("#foreground", {
  y: 200,
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
  y: 300,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
});

/*------Layer-4------*/

gsap.from("#tree-left", {
  y: 750,
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
  y: 800,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
});

/*------Layer-6------*/

gsap.from("#castle", {
  y: 300,
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
  y: 100,
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top top",
    end: "center center",
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
