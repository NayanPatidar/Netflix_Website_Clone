const storedEmail = sessionStorage.getItem('userEmail');
if (storedEmail) {
    document.getElementById('email').value = storedEmail;
}