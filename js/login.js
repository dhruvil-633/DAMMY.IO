const loginLink = document.querySelector('.login-link');
const container = document.querySelector('.container');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const loginLink = document.querySelector('.login-link');
    const creatorOption = document.getElementById('creator-option');

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (formTitle.textContent === 'Sign-up') {
            formTitle.textContent = 'Login';
            submitBtn.textContent = 'Login';
            // Remove additional fields for login
            form.querySelectorAll('.input-box')[1].style.display = 'none';
            form.querySelector('.options').style.display = 'none';
        } else {
            formTitle.textContent = 'Sign-up';
            submitBtn.textContent = 'Sign-up';
            // Show additional fields for sign-up
            form.querySelectorAll('.input-box')[1].style.display = 'block';
            form.querySelector('.options').style.display = 'block';
        }
    });

    submitBtn.addEventListener('click', function() {
        if (creatorOption.checked) {
            window.location.href = 'dashboard.html';
        } else {
            window.location.href = 'aindex.html';
        }
    });
});