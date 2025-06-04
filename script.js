 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,SlowMo,CustomEase)
  // gsap code here!
 });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  opacity: 0.3,
  duration: 1,
  ease: 'power1.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '[animate]',
    start: 'top center',
    scrub: true
  }
})
