const button = document.getElementById("searchBtn");

button.addEventListener("click", function () {

    const appNo =
    document.getElementById("applicationNo").value.trim();

    if (appNo == "") {

        alert("Enter Application Number.");

        return;

    }

    window.location.href =
    "application.html?app=" +
    encodeURIComponent(appNo);

});