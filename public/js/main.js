const container = document.querySelector(".container");
const preBtn = document.querySelector("#preBtn");
const nextBtn = document.querySelector("#nextBtn");
const dotBtn = document.querySelectorAll(".dotBtn");

let counter = 0;
const imgArr = ["url('./images/img1.jpg')", 
                           "url('./images/img2.jpg')",
                           "url('./images/img3.jpg')",
                           "url('./images/img4.jpg')"
                        ];

nextBtn.addEventListener("click", () => {
    
    if(counter == 3){
        counter = -1;
    }
    counter++;
    
    container.style.backgroundImage = `${imgArr[counter]}`;
});

preBtn.addEventListener("click", () => {
    if(counter == 0){
        counter = 4;
    }
    counter--;
    container.style.backgroundImage = `${imgArr[counter]}`;
});

var x;
dotBtn[0].addEventListener("click", () => {
    container.style.backgroundImage = `${imgArr[0]}`;
});
dotBtn[1].addEventListener("click", () => {
    container.style.backgroundImage = `${imgArr[1]}`;
});
dotBtn[2].addEventListener("click", () => {
    container.style.backgroundImage = `${imgArr[2]}`;
});
dotBtn[3].addEventListener("click", () => {
    container.style.backgroundImage = `${imgArr[3]}`;
});

console.warn("%c WARNING",  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold");
console.log(
    "%c Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. \n Do not enter or paste code that you do not understand.",
    "color:yellow");
