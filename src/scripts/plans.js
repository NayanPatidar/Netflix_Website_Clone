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

// function backgroundSelection(element) {

//     let windowWidth = window.innerWidth || document.documentElement.clientWidth;

//     if (windowWidth < 1000){
//         const planOne = document.getElementById("planOne");
//         const planTwo = document.getElementById("planTwo");
//         const planThree = document.getElementById("planThree");
//         const planFour = document.getElementById("planFour");

//         console.log(planOne);
//         console.log(planTwo);
//         console.log(planThree);
//         console.log(planFour);

//         planOne.style.color = 'rgb(0, 0, 0)';
//         planOne.style.background = 'none';
//         planTwo.style.color = 'rgb(0, 0, 0)';
//         planTwo.style.background = 'none';
//         planThree.style.color = 'rgb(0, 0, 0)';
//         planThree.style.background = 'none';
//         planFour.style.color = 'rgb(0, 0, 0)';
//         planFour.style.background = 'none';

//         console.log(element);
//         if (element.id == "planOne") {
//             element.style.background = 'radial-gradient(140.76% 131.96% at 100% 100%, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)';
//             element.style.color = 'rgb(255, 255, 255)';
//             console.log("Plan One Clicked");
//         } else if (element.id == "planTwo") {
//             element.style.background = 'radial-gradient(140.76% 131.96% at 100% 100%, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)';
//             element.style.color = 'rgb(255, 255, 255)';
//             console.log("Plan Two Clicked");
//         } else if (element.id == "planThree") {
//             element.style.background = 'radial-gradient(140.76% 131.96% at 100% 100%, rgb(109, 59, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)';
//             element.style.color = 'rgb(255, 255, 255)';
//             console.log("Plan Three Clicked");
//         } else if (element.id == "planFour") {
//             element.style.background = 'radial-gradient(140.76% 131.96% at 100% 100%, rgb(33, 114, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)';
//             element.style.color = 'rgb(255, 255, 255)';
//             console.log("Plan Four Clicked");
//         }
//     }
// }
