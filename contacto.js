document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const btn = document.getElementById('button');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Enviando...';
  
      emailjs.sendForm('default_service', 'template_0vs1z1e', form)
        .then(() => {
          btn.value = 'Enviar Mensaje';
          alert('¡Mensaje enviado!');
          form.reset();
        }, (error) => {
          btn.value = 'Enviar Mensaje';
          alert('Error: ' + JSON.stringify(error));
        });
    });
  });