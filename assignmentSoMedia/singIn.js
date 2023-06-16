


let singIn = document.querySelector(".noHas");
let singInForm = document.querySelector("#singInForm");
//Go sing in page
singIn.addEventListener("click", function(){
      window.location.href = "./index.html"
})

 singInForm.addEventListener("submit", (e)=>{
           e.preventDefault();
            let email = document.querySelector("#em")
            let pass = document.querySelector("#ps")

           let users = readUsersFromLocalStorage();
           if(users.length > 0){
                users.forEach( user =>{
                     console.log(user.email,user.pass)
                      checkUser(user,email,pass)
                })
           }else{
                console.log(users["email"],users["pass"])
               checkUser(users,email,pass)
           }
     
 })

 function checkUser(usr,email,pass){

     if(usr.email == email.value && usr.pass == pass.value){
                         window.location.href = "./posts.html"
 }else{
                         message("danger","user or password is incorrect");
                         
                     }
 }
 // Read users from localstorage
 function readUsersFromLocalStorage(){
      return localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
     }

function message(type,message){
       var danger = document.querySelector(".alert-danger");
       var success = document.querySelector(".alert-success");
       if(type == "success"){
            danger.classList.add("d-none")
            success.classList.remove("d-none")
            success.innerText = message
             setTimeout(function(){
                  success.classList.add("d-none")
                  
     },2000) 
       }else{
            success.classList.add("d-none")
            danger.classList.remove("d-none")
            danger.innerText = message
       }
}