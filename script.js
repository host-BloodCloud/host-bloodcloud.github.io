const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Login redirection
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".sign-in form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Redirect to home page
        window.location.href = "https://host-bloodcloud.github.io/home/";
    });
});
