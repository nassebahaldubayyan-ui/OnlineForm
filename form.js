// Load records when the page opens
window.onload = function () {
    loadRecords();
};
// Submit the form
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append("age", document.getElementById("age").value);

        fetch("insert.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {

            if (data.trim() === "success") {
                form.reset();
                loadRecords();
            } else {
                alert("Failed to insert record.");
            }

        });});});
// Load all records
function loadRecords() {

    fetch("display.php")
    .then(response => response.json())
    .then(data => {

        let rows = "";

        data.forEach(record => {

            rows += `
                <tr>
                    <td>${record.ID}</td>
                    <td>${record.name}</td>
                    <td>${record.age}</td>
                    <td>${record.status}</td>
                    <td>
                        <button onclick="toggleStatus(${record.ID})">
                            Toggle
                        </button>
                    </td>
                </tr>
            `;

        });

        document.getElementById("tableBody").innerHTML = rows;

    });}
// Toggle status
function toggleStatus(id) {

    const formData = new FormData();
    formData.append("id", id);

    fetch("toggle.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        if (data.trim() === "success") {
            loadRecords();
        } else {
            alert("Failed to update status.");
        }

    });}