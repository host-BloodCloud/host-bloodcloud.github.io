const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".sign-in form");
    const serverPlans = document.querySelector(".server-plans");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Here, you can add authentication logic (e.g., checking credentials)
        // For now, we'll assume login is successful
        
        alert("Login Successful!"); // Temporary feedback
        serverPlans.style.display = "block"; // Show server plans
    });
});
