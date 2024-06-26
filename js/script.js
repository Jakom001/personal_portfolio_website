document.addEventListener('DOMContentLoaded', () =>{

      // ============ NAVMENU TOGGLE ============
    const toogleBurger = document.getElementById('toggleburger');
    const navMEnu = document.getElementById('nav-menu');


        toogleBurger.addEventListener('click', () =>{
            navMEnu.classList.toggle('show-menu');
            toogleBurger.classList.toggle('show-icon');
        });

        // ============ TYPING TEXT ============

        let typingText = document.querySelector('.typing-text');

        let typeText = () =>{
          setTimeout(() =>{
            typingText.textContent = 'Web developer'
          }, 0);
          setTimeout(() =>{
            typingText.textContent = 'App developer'
          }, 4000);

          setTimeout(() =>{
            typingText.textContent = 'IOS developer'
          }, 8000);

        };
        typeText();
        setInterval(typeText, 12000)

        // ============ Testimonial slider ============
        
            let swiperCards = new Swiper(".recommend-content", {
                loop: true,
                spaceBetween: 32,
                grabCursor: true,
              
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets: true,
                },
              
                
                breakpoints:{
                  
                  768: {
                    slidesPerView: 2,
                  },
                },
              });
    
});
