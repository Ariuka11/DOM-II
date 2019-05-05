// Your code goes here

//1. Fun Bus header , nav, Bus picture animation

//Variable References

const headLogo = document.querySelector(".logo-heading");
const navBar = document.querySelectorAll(".nav-link");
const headerPic = document.querySelector(".pic");
const H2 = document.querySelector(".text-content");
const btns = document.querySelector(".btn");

//1. event;
headLogo.addEventListener("mouseleave", (event) => {
    TweenMax.to(".logo-heading", 2, {opacity:1,  rotation:360, scale:2})
    
});

//2.Mouseover event;
navBar.forEach(function(item){
    item.addEventListener("mouseover", (event)=>{
        TweenMax.to(".nav-link", 3, {opacity:0.5, x:20, scale:1, ease:SlowMo.easeIn })
        event.preventDefault();
    })
});

//3.Click event;
headerPic.addEventListener("click", (event)=> {
    TweenMax.from(".pic", 3, {x:100, ease:Back.easeOut})
});

//4.Drag event;
H2.addEventListener("drag", (event)=> {
        console.log('select');
        alert("You are using drag event!");
});

//5.Scroll event;
let counter = 0;
window.addEventListener("scroll", function(event) {
  console.log("scroll!");
  counter++;
  if (counter > 200) {
    alert("You've scrolled 200 times already!");
      }
});

//6.Load event;
window.addEventListener("load", function(event) {
    console.log("It loads!");
});

//7.Resize Event;
window.addEventListener("resize", function(event) {
    console.log("It loads!");
    alert('You have just resized the webpage!');
});

//8.Dblclick Event;
btns.addEventListener('dblclick', (event)=> {
    TweenMax.to(".btn", 2, {opacity:1, scale:0, ease:SlowMo.easeIn})
});

//9.Copy Event;
window.addEventListener("copy", function(event) {
    console.log("Copied item");
    event.target.style.color = "red";
    alert('You have just copied item!');
});

//10. Keydown Event;
window.addEventListener("keydown", function(event) {
    console.log(`Pressed Key ${event.key}`);
   
});



