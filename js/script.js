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
            typingText.textContent = 'Full-stack dev'
          }, 4000);

          setTimeout(() =>{
            typingText.textContent = 'Front-end dev'
          }, 8000);

        };
        typeText();
        setInterval(typeText, 12000)

    
});


    (function(){
        emailjs.init("8QRl6C-gTdBxPAXIY"); 
    })();

    //  emailjs.sendForm('service_4muuiqf', 'template_cerlne8', this)

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Clear previous error messages
      document.getElementById('fname-error').textContent = '';
      document.getElementById('email-error').textContent = '';
      document.getElementById('subject-error').textContent = '';
      document.getElementById('message-error').textContent = '';

      // Perform validation
      const fname = document.getElementById('fname').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let isValid = true;

      if (!fname) {
          document.getElementById('fname-error').textContent = 'Please enter your name.';
          isValid = false;
      }

      if (!email) {
          document.getElementById('email-error').textContent = 'Please enter your email.';
          isValid = false;
      } else if (!validateEmail(email)) {
          document.getElementById('email-error').textContent = 'Please enter a valid email address.';
          isValid = false;
      }

      if (!subject) {
          document.getElementById('subject-error').textContent = 'Please enter a subject.';
          isValid = false;
      }

      if (!message) {
          document.getElementById('message-error').textContent = 'Please enter your message.';
          isValid = false;
      }

      // If valid, send the email
      if (isValid) {
          emailjs.sendForm('service_4muuiqf', 'template_cerlne8', this)
              .then(function() {
                  alert('Message sent successfully!');
                  document.getElementById('contact-form').reset(); // Clear the form
              }, function(error) {
                  alert('Failed to send message. Please try again.');
                  console.log(error);
              });
      }
  });

  // Email validation function
  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
  }
