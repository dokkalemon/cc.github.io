
gsap.registerPlugin(ScrollTrigger)


gsap.fromTo('.education-text h3', {
    x: -50,
    opacity: 0,

}, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})

gsap.fromTo('.education-text p', {
    x: -50,
    opacity: 0,
    duration: 2,

}, {
    x: 0,
    opacity: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})

gsap.fromTo('.education-text button', {
    x: -50,
    opacity: 0,
    duration: 1,

}, {
    x: 0,
    opacity: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})

gsap.fromTo('.education-photo-img', {
    x: 50,
    opacity: 0,
    duration: 1,

}, {
    x: 0,
    opacity: 1,
    delay: 0,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})