window.addEventListener('DOMContentLoaded', () => {

    /**
     * Header menu scroll styles
     */

    const headerMenu = document.querySelector('.header');
    window.addEventListener("scroll", function() {
        window.scrollY >= 70 ? headerMenu.classList.add("bg_grey") : headerMenu.classList.remove("bg_grey");
    });

    /**
     * menu burger
     */

    const menu = document.querySelector('.menu'),
          link = document.querySelectorAll('.menu__item'),
          burger = document.querySelector('.burger');
          icon = document.getElementById('menu_icon')

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        if (icon.src.includes('icons/burger.svg')) {
            icon.src = 'icons/close.svg'
        } else {
            icon.src = 'icons/burger.svg';
        }
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            icon.src = 'icons/burger.svg';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('active') && icon.src.includes('icons/close.svg')) {
            menu.classList.remove('active');
            icon.src = 'icons/burger.svg';
        }
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
            menu.classList.remove('active');
            icon.src = 'icons/burger.svg';
        }
    });
    


    /**
     * scroll untill section
     */

    document.querySelectorAll('a[href^="#"]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('header').offsetHeight;
    
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });


});