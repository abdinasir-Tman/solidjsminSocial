
// const heading = document.querySelector("h1");
// const btn = document.querySelector("#btn").addEventListener("click", ()=>{
//     // alert("3")

//     heading.style.backgroundColor = "skyblue";
// })

let buttons = document.querySelectorAll(".btn");
let radius = document.querySelector(".radius");
let pixel = document.querySelector(".pixel")
let fFamily = document.querySelector("#f-family")
// console.log(buttons)
const content = document.querySelector(".content")
buttons.forEach( (btn) =>{
      btn.addEventListener("click",()=>{
        content.style.backgroundColor = btn.getAttribute("name")
      })
})

radius.addEventListener("keyup",()=>{
    // alert(2)
          content.style.borderRadius =radius.value+"px"

})
pixel.addEventListener("keyup",()=>{
  
   
          content.style.fontSize = pixel.value+"px"
})
fFamily.addEventListener("change",(e)=>{
                 content.style.fontFamily = `var(--${e.target.value})`
})