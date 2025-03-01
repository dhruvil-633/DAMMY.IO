const loginLink = document.querySelector('.login-link');
const container = document.querySelector('.container');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.toggle('active');
});