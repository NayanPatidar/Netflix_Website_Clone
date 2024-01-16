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
        buttonElement.innerHTML = "";
      } else {
        languageButton.innerHTML = "English";
      }

  } else if (window.location.pathname === '/in-hi') {
    console.log("Hindi Route");
    if (window.innerWidth < 400) {
      console.log("Hindi View Less than 400px");
      buttonElement.innerHTML = "";
    } else {
      languageButton.innerHTML = "Hindi";
    }
  }
  

var signInButton = document.getElementById('SignIn');
signInButton.addEventListener('click', () => {
    console.log("Clicked on the Sign In");
    if(signInButton.click){
      if (window.location.pathname === '/in-hi'){
        window.location.href = '/in-hi/login';
      } else {
        window.location.href = '/in/login';
      }
    }
})

