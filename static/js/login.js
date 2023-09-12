document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    const showForm = (form) => {
        loginForm.classList.add("hidden");
        signupForm.classList.add("hidden");
        forgotPasswordForm.classList.add("hidden");
        form.classList.remove("hidden");
    };

    document.getElementById("show-login").addEventListener("click", function (e) {
        e.preventDefault();
        showForm(loginForm);
    });

    document.getElementById("show-forgot-password").addEventListener("click", function (e) {
        e.preventDefault();
        showForm(forgotPasswordForm);
    });

    // Simulated form submissions (no actual backend logic)
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Simulated login logic
        alert("Simulated login submitted");
    });


    forgotPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Simulated forgot password logic
        alert("Simulated forgot password submitted");
    });

});
