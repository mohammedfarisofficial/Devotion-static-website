const hanburger = document.querySelector(".hanburger");
const nav = document.querySelector(".nav");

hanburger.addEventListener("click", ()=>{
  nav.classList.toggle("open")
  console.log("it's working mahn")
})