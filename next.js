// const sumArray = (array)=>{
//        sum = 0;
//     array.forEach(arr =>{
//             sum += arr
//     })
//     console.log(`Total of your array is : ${sum}`)
// }
// sumArray([1,2,3,4,5])
// sumArray([1,2,3,4,5,10])
//  let students = [
//   {
//     name: "John Doe",
//     subjects: ["Math", "English", "Science"],
//     grades: [3, 4, 2]
//   },
//   {
//     name: "Jane Smith",
//     subjects: ["Math", "English", "Art"],
//     grades: [4, 4, 4]
//   },
//   {
//     name: "Billy Bob",
//     subjects: ["English", "Art", "History"],
//     grades: [2, 1, 3]
//   },
//   {
//     name: "Alice Johnson",
//     subjects: ["Math", "History", "Science"],
//     grades: [4, 3, 2]
//   },
//   {
//     name: "Charlie Brown",
//     subjects: ["Math", "Art", "English"],
//     grades: [2, 4, 4]
//   },
//   {
//     name: "Emily Davis",
//     subjects: ["Science", "Math", "Art"],
//     grades: [3, 3, 3]
//   },
//   {
//     name: "George Thompson",
//     subjects: ["English", "History", "Science"],
//     grades: [4, 4, 2]
//   },
//   {
//     name: "Hannah Wilson",
//     subjects: ["History", "Art", "Math"],
//     grades: [2, 3, 4]
//   },
//   {
//     name: "Ivan Clark",
//     subjects: ["Math", "Science", "History"],
//     grades: [3, 4, 3]
//   },
//   {
//     name: "Jennifer Lopez",
//     subjects: ["English", "Art", "Science"],
//     grades: [4, 4, 3]
//   }
// ];
// let students = [
//   {
//     name: "John Doe",
//     subjects: ["Math", "English", "Science"],
//     grades: [3, 4, 2]
//   },
//   {
//     name: "Jane Smith",
//     subjects: ["Math", "English", "Art"],
//     grades: [4, 4, 4]
//   },
//   {
//     name: "Billy Bob",
//     subjects: ["English", "Art", "History"],
//     grades: [2, 1, 3]
//   },
//   {
//     name: "Alice Johnson",
//     subjects: ["Math", "History", "Science"],
//     grades: [4, 3, 2]
//   },
//   {
//     name: "Charlie Brown",
//     subjects: ["Math", "Art", "English"],
//     grades: [2, 4, 4]
//   },
//   {
//     name: "Emily Davis",
//     subjects: ["Science", "Math", "Art"],
//     grades: [3, 3, 3]
//   },
//   {
//     name: "George Thompson",
//     subjects: ["English", "History", "Science"],
//     grades: [4, 4, 2]
//   },
//   {
//     name: "Hannah Wilson",
//     subjects: ["History", "Art", "Math"],
//     grades: [2, 3, 4]
//   },
//   {
//     name: "Ivan Clark",
//     subjects: ["Math", "Science", "History"],
//     grades: [3, 4, 3]
//   },
//   {
//     name: "Jennifer Lopez",
//     subjects: ["English", "Art", "Science"],
//     grades: [4, 4, 3]
//   }
// ];
// function getStudentGrade(student){


//   const {grades} = student

// let studentInfo = students.filter((student)=>{
//                   return student.name == Thestudent
// })


// const gpaS = student.forEach( info =>{
        
// let sum = grades.reduce( (total,num)=>{
//         return total + num
// })
//        let totalSub = 0
//          totalSub = student.subjects.length; 
//          let gba = sum / totalSub;
//          student.GPA = gba.toFixed(2)

        
// // })
  
//    console.log(student)

// }

// students.forEach( student =>{
        
//         getStudentGrade(student)
// })
// Challenge One
  
// const Students = (firstName,lastName,className)=>{
//               const studentsObj = [
//                 {
//                   name: "mohamed",
//                   lastName: "cali",
//                   className: "DIT" 
//                 }
//               ]
//               const newObj = {
//                 name: firstName,
//                 lastName,
//                 className
//               }
//               studentsObj.push(newObj);
//               console.log(studentsObj)
// }
// Students("saalah","mayow","CBA")

//Chalenge Two 

// const questionaire = [
//   {
//     question: "what is a Dugsiiye",
//     answer: "Is more than eLearning",
//     point: 5
//   },
//   {
//     question: "What HTML Stands for",
//     answer: "HyperText Markup Language",
//     point: 3
//   },
//   {
//     question: "what is a CSS",
//     answer: "Styling Web Pages",
//     point: 2
//   },
// ]
// marks = [];
// noPoint = [];
 
// var n = prompt("Please Enter Your Name")
// questionaire.forEach( (qs,index) =>{
  
//     if(prompt(`${qs.question} ${index+1} of ${questionaire.length} `).toUpperCase().trim() == qs.answer.toUpperCase().trim()) {
//          marks.push(qs.point);
//     }else{
//       noPoint.push(0)
//     }
// })
// console.log(`${n} \nWaxaa laweydiiye ${marks.length + noPoint.length} Su'aal \nWaxa uu ka jawaabe ${marks.length}\n Waxa uuna keensaday ${marks.reduce( (total,num)=>{ return total + num})}`)

// challenge three 

// const inventory = {
//   apple: 5,
//   orange: 3,
//   juice: 2

// }

// function purchase(purch){
//   // console.log(inventory)
//     purch.forEach( p =>{
//          if(inventory.hasOwnProperty(p)){
//               if(inventory[p] ==0){
//                 delete inventory.p
                
//               }else{
//                 inventory[p] --;
//               }
//          }
//     })

//     console.log(inventory)
// }

// purchase(["apple","orange","apple","apple","orange","orange","orange"])
// do while loop and while loop 
// let i = 0
// do {
//   i++;
//   console.log("cali")
// }
// while( i < 10);

// let sp = 0;
// while( sp < 10){
 
//   console.log("mayow")
//    sp++;
// }

//sp 
//length
//driver 
// for(let sp = 0; sp < 10 ; sp ++){
//     console.log("numbers" , sp);
// }
// let i = 0;
// while(i < 10){ 
//     i++;
//     console.log("numbers");
   
// }
// let i = 0;
// do{
//     console.log("Numbers")
//     i++;
// }
// while(i < 5 );

const subjects = ["arabic","english","social","english"];
// console.log(subject1,subject2,subject3);
// console.log(subjects)
// unshift();
// push();
console.log(subjects)
subjects.unshift("graphic");
subjects.push("computer")
console.log(subjects);
//pop();
//shift();
//splice();
// subjects.shift()

// let indexed = subjects.indexOf("socia")
// console.log(subjects.length)
// console.log(subjects[0])
// console.log(subjects[1])
// console.log(subjects[2])
// console.log(subjects[3])

// let marks = 0;
// console.log("================\n")
// subjects.forEach( (subject)=>{
//                marks += parseInt(prompt(`Please Enter your ${subject} points`))   
// })
// console.log(`Total Marks : ${marks} \n Average marks: ${marks,marks/subjects.length}`)
// let eng = subjects.filter( (sub)=>{
//     return sub == "english"
// })
// console.log(eng)
// arday magaciisa 
// marks 
// name: 
// total failed
//total passed 
// const newSubjects = ["english","geographic","islamic"];

// let newName = prompt("Please Enter your name");
// let passed = [];
// let failed = []
//    newSubjects.forEach( (sub)=>{
//     let marks = prompt("please enter your "+sub+" points")
//          if(marks < 50){
//                     failed.push(marks)
//          }else{
//             passed.push(marks)
//          }
//    })
//    console.log(`Student Name: ${newName}\n Total passed: ${passed.length} \n Total failed: ${failed.length}`)

