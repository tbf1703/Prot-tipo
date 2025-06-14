document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Responderemos em breve.');
    this.reset();
});