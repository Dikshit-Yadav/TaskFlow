function validateEmailField() {
    const email = $("#email").val().trim();

    clearValidation("#email", "#emailError");

    if (email === "") {
        showError(
            "#email",
            "#emailError",
            "Email is required."
        );

        return false;
    }
    else if (!isValidEmail(email)) {
        showError(
            "#email",
            "#emailError",
            "enter a valid email address."
        );
        return false;
    }
    else {
        showSuccess(
            "#email",
            "#emailError",
        )
        return true;
    }
}

function validatePasswordField() {

    const password = $("#password").val().trim();

    clearValidation("#password", "#passwordError");

    if (password === "") {

        showError(
            "#password",
            "#passwordError",
            "Password is required."
        );

        return false;
    }
    else if (!isValidPassword(password)) {

        showError(
            "#password",
            "#passwordError",
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );

        return false;
    }
    else {

        showSuccess(
            "#password",
            "#passwordError"
        );
        return true;
    }
}

$(document).ready(function () {
    console.log("Auth Page Loaded");

    $("#togglePassword").click(function () {
        const password = $("#password");
        const icon = $(this).find("i");

        if (password.attr("type") === "password") {
            password.attr("type", "text");
            icon.removeClass("fa-eye").addClass("fa-eye-slash");

        }
        else {
            password.attr("type", "password");
            icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        const isEmailValid = validateEmailField();
        const isPasswordValid = validatePasswordField();

        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        console.log("Login Successful!");
    });

    $("#email").on("input blur", function(){
        validateEmailField();
    });

    $("#password").on("input blur", function(){
        validatePasswordField();
    });
});
