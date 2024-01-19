console.log("hi");

function getboxshadow(element) {

    let windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth > 1000){
        let premium = document.querySelector(".premium");
        let standard = document.querySelector(".standard");
        let basic = document.querySelector(".basic");
        let mobile = document.querySelector(".mobile");
    
        let plansBoxes = document.querySelectorAll('[id^="plansContainer"]');
        console.log(plansBoxes);
    
        plansBoxes.forEach((box) => {
            box.style.boxShadow = "none";
        })
    
        element.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

    } 
}

function thankYou(){
    alert("THANK YOU !! THAT's ALL ")
}
