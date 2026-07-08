function validateNameField() {

    const fullName = $("#fullName").val().trim();

    clearValidation("#fullName", "#fullNameError");

    if (fullName === "") {

        showError(
            "#fullName",
            "#fullNameError",
            "Full name is required."
        );

        return false;

    }

    if (!isValidName(fullName)) {

        showError(
            "#fullName",
            "#fullNameError",
            "Full name must be at least 3 characters."
        );

        return false;

    }

    showSuccess(
        "#fullName",
        "#fullNameError"
    );

    return true;

}

function validateConfirmPasswordField() {

    const password = $("#password").val().trim();

    const confirmPassword = $("#confirmPassword").val().trim();

    clearValidation(
        "#confirmPassword",
        "#confirmPasswordError"
    );

    if (confirmPassword === "") {

        showError(
            "#confirmPassword",
            "#confirmPasswordError",
            "Confirm password is required."
        );

        return false;

    }

    if (!passwordsMatch(password, confirmPassword)) {

        showError(
            "#confirmPassword",
            "#confirmPasswordError",
            "Passwords do not match."
        );

        return false;

    }

    showSuccess(
        "#confirmPassword",
        "#confirmPasswordError"
    );

    return true;

}

function validateTerms() {

    $("#termsError").text("");

    if (!$("#terms").is(":checked")) {

        $("#termsError").text(
            "Please accept the Terms & Conditions."
        );

        return false;

    }

    return true;

}


$(document).ready(function () {

    console.log("Register Page Loaded");

    $(".toggle-password").on("click", togglePassword);

    $("#fullName").on("input blur", validateNameField);

    $("#email").on("input blur", validateEmailField);

    $("#password").on("input blur", validatePasswordField);

    $("#confirmPassword").on(
        "input blur",
        validateConfirmPasswordField
    );

    $("#registerForm").on("submit", function (event) {

        event.preventDefault();

        const isNameValid = validateNameField();

        const isEmailValid = validateEmailField();

        const isPasswordValid = validatePasswordField();

        const isConfirmPasswordValid =
            validateConfirmPasswordField();

        const isTermsAccepted = validateTerms();

        if (
            !isNameValid ||
            !isEmailValid ||
            !isPasswordValid ||
            !isConfirmPasswordValid ||
            !isTermsAccepted
        ) {
            return;
        }

        const user = {

            fullName: $("#fullName").val().trim(),

            email: $("#email").val().trim(),

            password: $("#password").val().trim()

        };

        console.log("Registration Successful!");

        console.table(user);

    });

});