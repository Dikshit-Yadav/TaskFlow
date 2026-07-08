function togglePassword() {

    const wrapper = $(this).closest(".password-wrapper");

    const input = wrapper.find("input");

    const icon = $(this).find("i");

    const isHidden = input.attr("type") === "password";

    input.attr("type", isHidden ? "text" : "password");

    icon.toggleClass("fa-eye fa-eye-slash");
}

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

    if (!isValidEmail(email)) {

        showError(
            "#email",
            "#emailError",
            "Enter a valid email address."
        );

        return false;
    }

    showSuccess(
        "#email",
        "#emailError"
    );

    return true;
}

function validatePasswordField() {

    const password = $("#password").val().trim();

    clearValidation(
        "#password",
        "#passwordError"
    );

    if (password === "") {

        showError(
            "#password",
            "#passwordError",
            "Password is required."
        );

        return false;
    }

    if (!isValidPassword(password)) {

        showError(
            "#password",
            "#passwordError",
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );

        return false;
    }

    showSuccess(
        "#password",
        "#passwordError"
    );

    return true;
}