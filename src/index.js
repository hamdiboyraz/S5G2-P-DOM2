import e from "cors";
import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const input = document.createElement("input");
input.setAttribute("type", "text");
input.className = "password";
// const input = document.createElement("input").setAttribute("type", "text");
document.body.appendChild(input);
// const header1 = document.getElementsByTagName("header"); //.appendChild(input);
// document.header1.appendChild(input);

// parentInput.appendChild(input);

// DOM
const header = document.querySelector("header");
const navSection = document.querySelectorAll("nav a");
const buttons = document.querySelectorAll(".btn");

const createdInput = document.querySelector(".password");

// Events

header.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "cyan";
});

navSection.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    e.target.style.color = "green";
    e.target.style.fontWeight = "bold";
  });

  el.addEventListener("mouseout", (e) => {
    e.target.style.color = "";
    e.target.style.fontWeight = "";
  });
});

const imagesBackground = document.querySelectorAll(".img-content");
for (const img of imagesBackground) {
  img.addEventListener("mouseover", (event) => {
    event.target.style.background = "grey";
    event.target.style.padding = "3px";
    event.target.style.boxShadow = "0 0 10px 5px rgba(0,0,0,0.5)";
  });
}

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log(e.target.parentElement.children[0].textContent);
    // console.log(
    //   e.target.parentElement.getElementsByTagName("h4")[0].textContent
    // );
    alert(`${e.target.parentElement.children[0].innerHTML}'na yer ayırttınız.`);
  });
});

createdInput.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
});

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("dblclick", () => {
    img.style.filter = "grayscale(100%)";
  });
});

const destinations = document.querySelectorAll(".destination p");

destinations.forEach((destination) => {
  destination.addEventListener("wheel", (e) => {
    if (e.target.style.color === "black" || e.target.style.color === "") {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "black";
    }
  });
});
