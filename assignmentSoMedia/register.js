
let singup = document.querySelector(".has");
let singUpForm = document.querySelector("#registerUserForm")

// Go singUp  page
singup.addEventListener("click", function(){
      window.location.href = "./singIn.html"
})

// Adding User 
singUpForm.addEventListener("submit",function(e){
       e.preventDefault();
       let confirm = document.querySelector("#conpass").value
       let User ={
            "fullName": document.querySelector("#fName").value,
            "email": document.querySelector("#email").value,
            "pass": document.querySelector("#pass").value

       }   
       
           if( confirm !== User.pass){
            message("danger","Password not much")
            
           }else{
            addUsersToLocalStorage(User)
           }
           
        
      
      
       
   
})

//Add Users To Local storage
function addUsersToLocalStorage(user){
    
     let oldUsers =  readUsersFromLocalStorage();
     if(oldUsers.length > 0){
   oldUsers.forEach( usr =>{
          if(usr.email !== user.email){  
         
                  oldUsers.push(user) 
            localStorage.setItem("users", JSON.stringify(oldUsers))
            message("success","Registered")
          }else{
      
                   message("danger","Already token this user")
          }
     })
     }else{
         oldUsers.push(user) 
            localStorage.setItem("users", JSON.stringify(oldUsers))
            message("success","Registered")
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
                  singUpForm.reset()
     },2000) 
       }else{
            success.classList.add("d-none")
            danger.classList.remove("d-none")
            danger.innerText = message
       }
}