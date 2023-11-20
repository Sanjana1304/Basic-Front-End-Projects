const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const detail = document.querySelector(".detail");
const sizes = document.querySelector(".sizes")
const submit = document.querySelector(".submit");

card.addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth/2-e.pageX)/25;
    let yAxis = (window.innerHeight/2-e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    
});

card.addEventListener("mouseenter",(e) =>{
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)"
    detail.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    submit.style.transform = "translateZ(75px)";
});

card.addEventListener("mouseleave",(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
detail.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
submit.style.transform = "translateZ(0px)";
});


btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function() {
    btn1.style.backgroundColor = "gray";
    btn1.style.color = "white";

    btn2.style.backgroundColor = "white";
    btn2.style.color = "gray";
    btn3.style.backgroundColor = "white";
    btn3.style.color = "gray";
    btn4.style.backgroundColor = "white";
    btn4.style.color = "gray";
});

btn2.addEventListener("click", function() {
    btn2.style.backgroundColor = "gray";
    btn2.style.color = "white";

    btn1.style.backgroundColor = "white";
    btn1.style.color = "gray";
    btn3.style.backgroundColor = "white";
    btn3.style.color = "gray";
    btn4.style.backgroundColor = "white";
    btn4.style.color = "gray";
});
btn3.addEventListener("click", function() {
    btn3.style.backgroundColor = "gray";
    btn3.style.color = "white";

    btn2.style.backgroundColor = "white";
    btn2.style.color = "gray";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "gray";
    btn4.style.backgroundColor = "white";
    btn4.style.color = "gray";
});
btn4.addEventListener("click", function() {
    btn4.style.backgroundColor = "gray";
    btn4.style.color = "white";

    btn2.style.backgroundColor = "white";
    btn2.style.color = "gray";
    btn3.style.backgroundColor = "white";
    btn3.style.color = "gray";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "gray";
});


