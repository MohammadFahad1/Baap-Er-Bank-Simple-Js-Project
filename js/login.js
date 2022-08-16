document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    let email = emailField.value; //get the value
    const passwordField = document.getElementById('user-password');
    let password = passwordField.value;

    if (email === "fahad@gorib.com" && password === "secret") {
        window.location.href = 'bank.html'
    } else {
        alert("Invalid User");
    }
});