var radioButtons = document.querySelectorAll('.accordion input[type="radio"]');
let clickCount = 0;
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
        console.log("Is checked:", this.checked);
        clickCount++;

        if (clickCount === 2) {
            this.checked = !this.checked;
            clickCount = 0; // Reset the click count after the second click
        }            
    });
});

var signInButton = document.getElementById('SignIn');
signInButton.addEventListener('click', () => {
    if(signInButton.click){
        window.location.href = '/SignIn';
    }
})