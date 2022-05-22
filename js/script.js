const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const checkEmail = document.getElementById('check-email');

form.onsubmit = e => {
    e.preventDefault();
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(regexEmail)) {
        emailInput.classList.remove('error');
        checkEmail.classList.remove('visible');
        alert('All done!');
    } else {
        emailInput.classList.add('error');
        checkEmail.classList.add('visible');
    }
}