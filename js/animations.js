
gsap.registerPlugin(ScrollTrigger)


gsap.fromTo('.education-text h3', {
    x: -200,
    opacity: 0,
    duration: 0.5,

}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})

gsap.fromTo('.education-text p', {
    x: -200,
    opacity: 0,
    duration: 0.5,

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
    x: -400,
    opacity: 0,
    duration: 0.5,

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
    x: 400,
    opacity: 0,
    duration: 0.5,

}, {
    x: 0,
    opacity: 1,
    delay: 0,
    scrollTrigger: {
        trigger: '.education-container',
        start: 'top center',
    }
})