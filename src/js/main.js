import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to("#bg", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.5,
});

gsap.to("#ysa", {
  scrollTrigger: {
    scrub: 0.8,
  },
  scale: 1.2,
});

gsap.from("#portal", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "200px",
});

gsap.to("#tree-left", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "00px",
});

gsap.to("#tree-right", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "300px",
});

gsap.to("#castle", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "900px",
});

gsap.to("#foreground", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "500px",
});

gsap.to("#midground", {
  scrollTrigger: {
    markers: true,
    scrub: true,
  },
  top: "200px",
});
