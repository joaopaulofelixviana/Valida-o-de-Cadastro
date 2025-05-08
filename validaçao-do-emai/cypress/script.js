function isValidEmail(email) {
    // Uma regex simples para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const validationResultDiv = document.getElementById('validationResult');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

        if (isValidEmail(emailValue)) {
            emailError.textContent = '';
            validationResultDiv.textContent = `O e-mail "${emailValue}" é válido.`;
            validationResultDiv.className = 'result valid';
        } else {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            validationResultDiv.textContent = `O e-mail "${emailValue}" é inválido.`;
            validationResultDiv.className = 'result invalid';
        }
    });
});
