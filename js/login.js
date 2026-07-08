$(document).ready(function () {

    console.log("Login Page Loaded");

    $("#togglePassword").on("click", togglePassword);

    $("#email").on("input blur", validateEmailField);

    $("#password").on("input blur", validatePasswordField);

    $("#loginForm").on("submit", function (event) {

        event.preventDefault();

        const isEmailValid = validateEmailField();

        const isPasswordValid = validatePasswordField();

        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        console.log("Login Successful!");

    });

});