const headerRef = document.querySelector('header');

const scrollWindow = () => {
    window.scrollY > 100 ?
        headerRef.classList.add('scrolled') : headerRef.classList.remove('scrolled')

}

window.addEventListener('scroll', scrollWindow)


