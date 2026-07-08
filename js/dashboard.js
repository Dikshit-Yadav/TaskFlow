$(document).ready(function () {

    console.log("Dashboard Loaded");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        $("body").addClass("dark");

    }

    $(".nav-item").on("click", function () {

        $(".nav-item").removeClass("active");

        $(this).addClass("active");

    });

    $("#themeBtn").on("click", function () {

        $("body").toggleClass("dark");

        const theme = $("body").hasClass("dark")
            ? "dark"
            : "light";

        localStorage.setItem("theme", theme);

    });

});