document.getElementById('createMembershipBtn').addEventListener('click', function() {
    window.location.href = 'memberShipinfo.html';
});

function signIn() {
    const numeroEmail = document.getElementById('numeroEmail').value;
    const senha = document.getElementById('senha').value;

    if (numeroEmail.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    console.log(`Tentativa de login com ${numeroEmail} e senha ${senha}`);

    window.location.href = 'dashboard.html';
}

const signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', signIn);

function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName === '' || lastName === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return false;
    }

    console.log('Formulário validado com sucesso.');
    console.log(`Nome: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${phone}`);
    return true;
}

const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Formulário enviado com sucesso!');

    }
});
