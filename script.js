document.addEventListener('DOMContentLoaded', () =>{
    const toogleBurger = document.getElementById('toggleburger');
    const navMEnu = document.getElementById('nav-menu');


        toogleBurger.addEventListener('click', () =>{
            navMEnu.classList.toggle('show-menu');
            toogleBurger.classList.toggle('show-icon');
        });
    
});