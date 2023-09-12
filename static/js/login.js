document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    const showForm = (form) => {
        loginForm.classList.add("hidden");
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
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Assuming data.json contains an array of user objects with username and password fields
        fetch("/static/js/data.json") // Adjust the path as needed
            .then((response) => response.json())
            .then((data) => {
                const user = data.find((user) => user.username === username && user.password === password);
                if (user) {
                    alert("Login successful");
                } else {
                    alert("Invalid username or password");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });

    forgotPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Simulated forgot password logic
        alert("Email sent for reset password");
    });
});
