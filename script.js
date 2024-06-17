document.addEventListener('DOMContentLoaded', () =>{
    const toggleBurger = document.querySelector('.nav-item');
    // const navItem = document.querySelector('.nav-menu');


    toggleBurger.addEventListener('click', () =>{
        // navItem.classList.toggle('show-menu');
        toggleBurger.classList.toggle('show-icon')


    });
});