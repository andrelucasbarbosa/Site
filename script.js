function ValidationForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message  = document.getElementById("message").value;
    const tel = document.getElementById("tel").value;

    if (name === '' || email === '' || message === '' || tel === '') {
        alert('Campos obrigatórios');
        return false;
    }

    if (name.length < 3 || name.length > 50) {
        alert('O nome deve ter entre 3 e 50 caracteres');
        return false;
    }

    if (email.length < 3 || email.length > 50) {
        alert('O email deve ter entre 3 e 50 caracteres');
        return false;
    }

    const emailPatern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    if (!emailPatern.test(email)) {
        alert('Por favor! Insira um email válido.');
        return false;
    }

    const telPatern = /^\(?([0-9]{2})?\)? ?([0-9]{4,5})-?([0-9]{4})$/;

    if (!telPatern.test(tel)) {
        alert('Por favor! Insira um telefone válido.');
        return false;
    }

    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    if (ValidationForm()) {
        alert('Formulário validado');
    }
});