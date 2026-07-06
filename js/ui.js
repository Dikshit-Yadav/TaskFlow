function showError(inputId, errorId, message) {

    $(inputId).addClass("input-error");
    $(inputId).removeClass("input-success");

    $(errorId).text(message);

}

function showSuccess(inputId, errorId) {

    $(inputId).removeClass("input-error");
    $(inputId).addClass("input-success");

    $(errorId).text("");

}

function clearValidation(inputId, errorId) {

    $(inputId)
        .removeClass("input-error input-success");

    $(errorId).text("");

}