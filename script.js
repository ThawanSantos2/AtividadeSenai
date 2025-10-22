function openModal(src, alt) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    modalImg.src = src;
    modalCaption.textContent = alt;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        event.target.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    return false;
}
