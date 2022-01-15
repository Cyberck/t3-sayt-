window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header__nav');
        header.classList.toggle('sticky', window.scrollY > 0) //Kosda menshe nulya budet skroll
    })

    const menuBtn = document.querySelector('.menu-btn') // podkluchaemsy klassu
    const navList = document.querySelector('.header__nav-list')
    const navItems = document.querySelectorAll('.header__nav-link') //Chtob udalit link pri najatii


    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active') // dobavlaem aktiva
        navList.classList.toggle('active')
    }) 

    navItems.forEach(navItem => { //chtob udalit links perebegaem forEchom i udalaem active
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navList.classList.remove('active')
        })
    })
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })    
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })

})
