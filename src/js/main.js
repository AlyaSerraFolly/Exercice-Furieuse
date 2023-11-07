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
    scrub: 1,
  },
  scale: 0.5,
});
