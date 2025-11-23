// Animation.js
import { gsap } from "gsap";

export const heroContainer = () => {
  gsap.to(".heroText", {
    rotate: 360,
    duration: 2,
    delay: 1,
    repeat: 4,
    yoyo: true,
    ease: "power2.inOut",
  });

  gsap.fromTo(
    ".herocontainer",
    { scale: 0.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: "power1.out" }
  );

  gsap.to(".herocontainer", {
    rotate: 360,
    duration: 2,
    delay: 1,
    repeat: 4,
    yoyo: true,
    ease: "power2.inOut",
  });
};

export const homeContainer = (boxesRef) => {
  gsap.from(boxesRef.current.children, {
    y: 100,
    opacity: 0,
    duration:10,
    ease: "back.out(1.7)",
    stagger: 0.2,
  });
};


