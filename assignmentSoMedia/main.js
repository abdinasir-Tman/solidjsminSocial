
//                                                                      .


let postsDom = document.querySelector(".posts");


let postForm = document.querySelector("#post");
readPostsFromLocalStorage().forEach( post =>{
       addPostsToDom(post)
})


// Adding Posts 
postForm.addEventListener("submit",function(e){
       e.preventDefault();
       let Post ={
            "title": document.querySelector("#title").value,
            "img": document.querySelector("#image").value,
            "content": document.querySelector("#content").value

       } 
       console.log(Post)
       addPostsToDom(Post)    
       message("success","Posted")
      addPostsToLocalStorage(Post); 
        postForm.reset()
       
   
})




     //Add Posts To LocalStorage
function addPostsToLocalStorage(post){
          
     let oldposts =  readPostsFromLocalStorage();
            oldposts.push(post) 
            localStorage.setItem("posts", JSON.stringify(oldposts))
  
     }


     //Read Posts From localstorage
     function readPostsFromLocalStorage(){
      return localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];
     }

     // Add Posts to the Dom
function addPostsToDom(post){
               postsDom.innerHTML += `
               <div class="post">
                <img src="${post.img}" alt="">
                <h1>${post.title}</h1>
                <p>${post.content}</p>
                <div>
                    <button type="button">Delete</button>
                    
                </div>
            </div>
               `
         
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
