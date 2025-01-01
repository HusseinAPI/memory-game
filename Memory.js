let btn1 = document.getElementById("div1");
let btn2 = document.getElementById("div2");
let btn3 = document.getElementById("div3");
let btn4 = document.getElementById("div4");
let btn5 = document.getElementById("div5");
let btn6 = document.getElementById("div6");
let btn7 = document.getElementById("div7");
let btn8 = document.getElementById("div8");
let btn9 = document.getElementById("div9");
let btn10 = document.getElementById("div10");
let btn11 = document.getElementById("div11");
let btn12 = document.getElementById("div12");
let btn13 = document.getElementById("div13");
let btn14 = document.getElementById("div14");
let btn15 = document.getElementById("div15");
let btn16 = document.getElementById("div16");
let audio = document.getElementById("my-audio");
let showCounter = document.getElementById("counter-pargraph");
let counter = 0;

clickCard(btn1,document.querySelector("#div1 img"),"../pictures/Real Madrid.png",btn1,btn7,"real-madrid");
clickCard(btn2,document.querySelector("#div2 img"),"../pictures/Zaragoza.png",btn2,btn16,"zaragoza");
clickCard(btn3,document.querySelector("#div3 img"),"../pictures/Arsenal.jpg",btn3,btn15,"arsenal");
clickCard(btn4,document.querySelector("#div4 img"),"../pictures/Lazio.jpg",btn4,btn13,"lazio");
clickCard(btn5,document.querySelector("#div5 img"),"../pictures/Milan.png",btn5,btn14,"milan");
clickCard(btn6,document.querySelector("#div6 img"),"../pictures/Man City.jpg",btn6,btn8,"man-city");
clickCard(btn7,document.querySelector("#div7 img"),"../pictures/Real Madrid.png",btn7,btn1,"real-madrid");
clickCard(btn8,document.querySelector("#div8 img"),"../pictures/Man City.jpg",btn8,btn6,"man-city");
clickCard(btn9,document.querySelector("#div9 img"),"../pictures/Liverpool.jpg",btn9,btn11,"liverpool");
clickCard(btn10,document.querySelector("#div10 img"),"../pictures/Chelsea.jpg",btn10,btn12,"chelsea");
clickCard(btn11,document.querySelector("#div11 img"),"../pictures/Liverpool.jpg",btn11,btn9,"liverpool");
clickCard(btn12,document.querySelector("#div12 img"),"../pictures/Chelsea.jpg",btn12,btn10,"chelsea");
clickCard(btn13,document.querySelector("#div13 img"),"../pictures/Lazio.jpg",btn13,btn4,"lazio");
clickCard(btn14,document.querySelector("#div14 img"),"../pictures/Milan.png",btn14,btn5,"milan");
clickCard(btn15,document.querySelector("#div15 img"),"../pictures/Arsenal.jpg",btn15,btn3,"arsenal");
clickCard(btn16,document.querySelector("#div16 img"),"../pictures/Zaragoza.png",btn16,btn2,"zaragoza");

function clickCard(imageClicked,image,imageName,firstElem,secondElem,teamName){
    imageClicked.onclick = ()=>{
        let btn = imageClicked;
        audio.play();
        replaceImage(btn,image,imageName);
        samePic(firstElem,secondElem,teamName,image);
    }
}

function replaceImage(elem,image,imageName){
    elem.classList.remove("rotate-close");
    elem.classList.add("rotate-open");
    setTimeout(()=>{
      image.setAttribute("src",imageName);
      elem.appendChild(image);
    },500);
}

 function notSamePic(elem,image,imageName){
     setTimeout(()=>{
        setTimeout(()=>{
            image.setAttribute("src",imageName);
            elem.appendChild(image);
        },500);
        elem.classList.remove("rotate-open");
        elem.classList.add("rotate-close");
     },2500);
 }

function samePic(firstElem,secondElem,teamName,image){
    firstElem.classList.add(teamName);
    setTimeout(()=>{
        if(firstElem.classList.contains(teamName) && secondElem.classList.contains(teamName)){
        }
        else{
        firstElem.classList.remove(teamName);
         addCounter();
         notSamePic(firstElem,image,"../pictures/Question Mark.jpg");
        }
    },5000);
}

function addCounter(){
    counter = counter + 0.5;
    showCounter.innerHTML = `Wrong Tries:${counter}`;
}