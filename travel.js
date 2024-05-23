function showForm() {
    var transportType = document.getElementById("transport-type").value;
    var forms = document.querySelectorAll(".form-hidden");

    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }

    var selectedForm = document.getElementById(transportType + "-form");
    selectedForm.style.display = "block";
}
