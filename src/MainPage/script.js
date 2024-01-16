var radioButtons = document.querySelectorAll('.accordion input[type="radio"]');
let clickCount = 0;
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
        console.log("Is checked:", this.checked);
        clickCount++;

        if (clickCount === 2) {
            this.checked = !this.checked;
            clickCount = 0; 
        }            
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


var signInButton = document.getElementById('SignIn');
signInButton.addEventListener('click', () => {
    console.log("Clicked on the Sign In");
    if(signInButton.click){
        window.location.href = '/SignIn';
    }
})

