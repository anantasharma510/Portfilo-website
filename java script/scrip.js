document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;
      
      console.log('Form submitted:', { name, email, message });
      // Here you can add your form submission logic, like sending data to a server
      
      alert('Thank you for your message!');
      contactForm.reset();
    });
  });
  