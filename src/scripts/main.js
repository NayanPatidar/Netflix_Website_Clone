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


let languageButton = document.getElementById('English');

  if (window.location.pathname === '/in') {
    console.log("English Route");
      if (window.innerWidth < 400) {
        console.log("English View Less than 400px");
        languageButton.innerHTML = "English";
      } else {
        languageButton.innerHTML = "English";
      }

  } else if (window.location.pathname === '/in-hi') {
    console.log("Hindi Route");
    if (window.innerWidth < 400) {
      console.log("Hindi View Less than 400px");
      languageButton.innerHTML = "Hindi";
    } else {
      languageButton.innerHTML = "Hindi";
    }
  }
  

function signIn() {
  console.log("Clicked on the Sign In");
    if (window.location.pathname === '/in-hi'){
      window.location.href = '/in-hi/login';
    } else {
      window.location.href = '/in/login';
    }
}



function saveEmail() {
  
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim(); // Remove leading and trailing whitespaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission
  }
    window.location.href = '/signup/form'; 
}