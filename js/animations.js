
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
        end: 'bottom bottom'
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


gsap.fromTo('.services-container h3', {
    y: 100,
    opacity: 0,
    duration: 1,
}, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
    }
})

gsap.fromTo('.services-container p', {
    y: 100,
    opacity: 0,
    duration: 1,
}, {
    opacity: 1, y: 0,
    delay: 0.3,
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
    }
})

gsap.fromTo('.intervention-area-container h3', {
    opacity: 0,
    top: 100,
    opacity: 0
}, {
    opacity: 1,
    top: 0,
    scrollTrigger: {
        trigger: '.intervention-area',
        start: 'top center',
    }
})

const cards = document.querySelectorAll('.intervention-area-card-container .card')

gsap.fromTo(cards[0], {
    x: -100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: cards[0],
        start: 'top center',
    }
})

gsap.fromTo(cards[1], {
    x: 100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: cards[1],
        start: 'top center',
    }
})

gsap.fromTo(cards[2], {
    x: -100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: cards[2],
        start: 'top center',
    }
})

gsap.fromTo('#appointment h3', {
    x: -100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '.appointment',
        start: 'top center',
    }
})
gsap.fromTo('#appointment p', {
    x: -100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.appointment',
        start: 'top center',
    }
})

gsap.fromTo('#appointment h4', {
    x: -100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.appointment',
        start: 'top center',
    }
})

gsap.fromTo('form', {
    x: 100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.appointment',
        start: 'top center',
    }
})

gsap.fromTo('#form-text', {
    x: 100,
    opacity: 0,
    duration: 1,
}, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '.appointment',
        start: 'top center',
    }
})
