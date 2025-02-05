// var a  = parseFloat(prompt("Enter the matric percentage"))
// var b = parseFloat(prompt("Enter the percentage of saylani mass it traning programme"))
// if (a > 100 || b > 100 ) {
//     alert("Enter the valid percentage")
// }
// else {
//     var c = (a + b)
//     var avg =c/2 
//     if (avg >70 ) {
//         alert("You are eligible")
//     }
//     else{
//         alert("You are not eligible")
//     }
// }   






// let a = prompt("Enter name")
// let b = a.length 
// for (let i = 0; i < b; i++) {
//    if (a.slice(i,i+2) == " ") {
//     alert("no two spaces consecutive")
    
//    }
// }



// let date = prompt("Enter the date (1-31):");
// let month = prompt("Enter the month (1-12):");
// let year = prompt("Enter the year:");

// let enteredDate = new Date(year, month - 1, date);

// if (enteredDate && enteredDate.getDate() == date) {
//     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let day = daysOfWeek[enteredDate.getDay()];

//     alert(`The day on ${date}/${month}/${year} is: ${day}`);
// } else {
//     alert("Invalid date entered. Please try again.");
// }







// let table = parseInt(prompt("Enter the nummber which you want table"))
// for (let i = 1; i <= 10; i++) {
//     let reult = table * i 
//     console.log(`${table} x ${i} = ${reult}`)
// }


// task 1 
//togler bnaya hai

// let isVisible = true; 
// function state() {
//     const content = document.querySelector(".hide"); 
//     isVisible = !isVisible; 
//     if (isVisible) {
//         content.style.display = "block"; 
//     } else {
//         content.style.display = "none"; 
//     }
// }


// task 2



// function change(){
//     const selectt = document.querySelector(".ma");
//     if (selectt) {
//         selectt.style.backgroundColor = "green";
//     }
// }
// function change1(){
//     const selectt = document.querySelector(".ma");
//     if (selectt) {
//         selectt.style.backgroundColor = "white";
//     }
// }





// task 3 

// function show(){
//     const error= document.querySelector(".write")
//     const shooo = document.querySelector(".show")
//     if (error.value.trim() === "" ) {
//         shooo.innerHTML = "plese fill the feild"
//     }   
//     else{
//         shooo.innerHTML = ""    
//     }

// }






// task 4



// const imagew = document.getElementById("image")
// const imagearry = ['http://www.pixelstalk.net/wp-content/uploads/2016/08/Beautiful-nature-cool-images-background-hd.jpg'
// ,'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg'
// ,'https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-3d-nature-images-download.jpg']
// let indi = 0 ;
// imagew.src = imagearry[indi]
// function previouswBtn(){
//     indi = (indi - 1 + imagearry.length) % imagearry.length 
//    imagew.src = imagearry[indi]
// }
// function nextbb(){
//     indi = (indi + 1) % imagearry.length 
//    imagew.src = imagearry[indi]
// }




// task number 6
 
const state = document.getElementById('switchstate');
const toggler = document.getElementById('toglerswitch');
const main = document.getElementById('main')
const ce = document.getElementById('che')
let ison = false;
function clickk(){
    ison = !ison
    if (ison) { 
        toggler.classList.add('active')   
        state.innerHTML = "ON" 
        ce.innerHTML = "Dark mode" 
         main.style.backgroundColor = "black";
}
    else{
        toggler.classList.remove('active')   
        state.innerHTML = "OFF"
        ce.innerHTML = "white mode" 
        main.style.backgroundColor = "white";
    }
}





// task number 7
//  const mes  = document.getElementById('main1')
//  const txt1  = document.getElementById('txt1')
//  const txt2  = document.getElementById('txt2')
//     function handleEnterKey(ent) {
//         if (ent.key === "Enter") {
//             mes.textContent = txt1.value; // Display the input value
//             txt1.value = ""; // Clear the input field
//         }
//     }
    
// txt1.onkeydown= function(ent){
//     handleEnterKey(ent)
// }





// wheather app

// function removeRequired() {
//     const parent = document.getElementById('parentDiv');
//     const childInputs = parent.querySelectorAll('input');  
//     const answer = parent.getElementsByClassName('found')
//     for (let i = 0; i < childInputs.length; i++) {
//       if (childInputs[i].hasAttribute('required')) {
//         answer[i].innerHTML = 'required removed'
//         childInputs[i].removeAttribute('required');
//       }
//     }
//     console.log("Required attribute removed from all input fields.");
//   }












// const parentelement = document.querySelector('#parentDiv');
// const childinput = parentelement.firstElementChild
// const grandchild = childinput.firstElementChild
// const grandchildlength = childinput.childNodes
// console.log(grandchild)
// console.log(grandchild.childNodes)
// console.log(childinput)

//     console.log(childinput.childNodes)
//     console.log(parentelement.childNodes)
//     console.log(grandchild.parentNode)
//     console.log(childinput.parentElement)
//     console.log(parentelement.parentElement)

  




// const divElement = document.getElementById("parent")
// const pElements = divElement.getElementsByTagName("p")

// const firstP = pElements[0]
// const secondP = pElements[1]

// const nthChild = (divElement.childNodes)
// console.log("hi",nthChild);

// // const firstChild = divElement.firstChild
// const firstChild = divElement.firstElementChild
// // const lastChild = divElement.lastChild
// const lastChild = divElement.lastElementChild
// const divParent = divElement.parentNode
// const divSibling = divElement.nextElementSibling
// const divPreSibling = divElement.previousElementSibling

// // console.log(divElement.childNodes, nthChild, firstChild, lastChild);
// console.log(divPreSibling, lastChild.tagName, divSibling);
// const ulElement = document.getElementById("list")
// const ulStyling = ulElement.getAttribute("style")
// const isStyled = ulElement.hasAttribute("style")
// ulElement.removeAttribute('class')
// // ulElement.setAttribute("class", "d-flex")
// // ulElement.classList.add("cde")
// console.log(ulStyling, isStyled);

// // console.log(ulElement.hasAttribute("class"))
// // console.log(ulElement.outerHTML, ulElement.innerHTML)

// // console.clear()



// // const newDiv = document.querySelector("#new")
// // newDiv.innerHTML += '<p>Pakistan</p>'
// // const newP = '<p>Pakistan</p>'
// // const pElement = newDiv.firstElementChild
// // const newP = document.createElement("p")
// // const pText = document.createTextNode("Pakistan Zindabad")
// // newP.appendChild(pText)
// // // newDiv.appendChild(newP)
// // newDiv.insertBefore(newP, pElement)
// // pElement.insertAdjacentHTML('beforebegin', newP)


// // const newImg = document.createElement("img")
// // newImg.setAttribute('src', 'https://sherbrotherpakistan.com/wp-content/uploads/2024/01/rent-a-car-karachi-1024x768.jpeg')
// // newImg.setAttribute("class", "image")
// // newDiv.appendChild(newImg)







// const div = document.querySelector('.container'); 
// const cDiv = div.firstElementChild; 
// const h2 = cDiv.querySelector('#enterpeop');
// let cunt =0 
// function clicli(){
//     const inner =  
//      h2.innerHTML  = cunt +=1
//     if ( h2.innerHTML  == 30 ||  h2.innerHTML ==29) {
//          h2.innerHTML  = "hugya tera itna hi time tha"

//     }
// }

// const parent = document.querySelector('.container')
// const p = `<p><span>this is pakistan</span><p>`
// const pp = document.createElement('p')
// const newp = document.createTextNode("pakistan zindabaad")
// pp.appendChild(newp)
// console.log(pp.innerHTML)
// const parent = document.querySelector('.main'); // Selects the parent with class 'main'
// const child = parent.firstElementChild; // Selects the first child element of the parent
// console.log(child); // Logs the first child element





// Arrow function practice
// const select3 = document.getElementById('browse');
// const nextSibling = select3.nextElementSibling;
// const next2Sibling = nextSibling.nextElementSibling;
// const next3 = next2Sibling.nextElementSibling;
// let func = () => {
//  if (next2Sibling.innerHTML == "SHOP" ) {
//            next2Sibling.innerHTML = "tu to braber nikla by chwala"
//  }
//  else{
//     next2Sibling.innerHTML = "tu to bach gya by harami "
//     next2Sibling.style.fontSize = "60px";
//     next2Sibling.style.list = "none";
//  }
    
// }






// let multi = (a,b) =>
// {
//     let result =  a * b
//     next3.innerHTML = result
//     next3.style.fontSize = "60px";
//     console.log(result)
// }
// let sayhi = () => alert("hello or suna kia hall hain ")
// console.log(sayhi());


// let welcome =()=>{
//     let age = prompt("Enter your age bhai us number hi dalna koi or **** nahi krna pehly bol raha hn");
// if(age >= 18){
//     alert("Hello");
//     alert("Greeting");
// }
// else{
//     alert("ja neta phly apni age brha kr a ");
// }
// }


// javascript object question 



// let obj = ()=>{ 
//    let apeendd = []
//    let obb ={
//     name: "Rahul",
//     age: 25,
//     city: "Delhi",
//     hobbies: ["cricket", "football", "reading"]
// }

// console.log(obb.name)
// console.log(obb.age)
// console.log(obb.city)

// for(let i in obb){
//     if (i != "hobbies") {
//         apeendd.push(obb[i])
//     }
// }
// if (Array.isArray(obb.hobbies)) {
//     for(let i = 0 ; i<obb.hobbies.length ; i++){
//         apeendd.push(obb.hobbies[i])
// }
// }
// console.log("apended arry\n",apeendd)
// }

// obj()







// let obj1 = {
//     name: "Rahul",
//     age: 25,
//     hobbies: ["cricket", "football", "reading"],
//     city: "Delhi"
// }
// // delete obj1.hobbies
// // console.log(obj1)
// for(let key in obj1){
//     console.log(`${key} : ${obj1[key]}`)
//     if (key == "hobbies") {
//         for (let i = 0; i < obj1.hobbies.length; i++) {
//             console.log(`Checking hobby at index ${i}: ${obj1.hobbies[i]}`);
//             let element = obj1.hobbies[i];
//             if (element == "football"){
//                 console.log("Football found! Breaking the loop. at index ",i)
//                 break;
//             }
//         }
//         break
//     }
// }














// let obj2 = {
//     name: "Rahul",
//     age: 25,
//     greet : function(){
//         let gree = `your name is ${obj2.name} and age is ${this.age}`
//         let grrrr
//         if (this.age > 29) {
//              grrrr = gree + `km hai tere age tujah gree nhi karon ga`
            
//         }
//         else{
//              grrrr = gree + ` tu to jawan nikal bee`
//         }
//         return grrrr
//     }
// }

// let func = obj2.greet()
// console.log(func)








// let studentsDetails = {
//     std1: { name: "sami", age: 19, sex: "male", hobi: "football" },
//     std2: { name: "ayesha", age: 20, sex: "female", hobi: "reading" },
//     std3: { name: "ali", age: 18, sex: "male", hobi: "gaming" },
//     std4: { name: "fatima", age: 21, sex: "female", hobi: "painting" },
//     std5: { name: "omar", age: 22, sex: "male", hobi: "swimming" },
//     std6: { name: "zainab", age: 19, sex: "female", hobi: "dancing" },
//     std7: { name: "hassan", age: 20, sex: "male", hobi: "painting" },
//     std8: { name: "layla", age: 18, sex: "female", hobi: "singing" },
//     std9: { name: "yusuf", age: 21, sex: "male", hobi: "painting" },
//     std10: { name: "amina", age: 22, sex: "female", hobi: "cooking" }
// };


// for(let i in studentsDetails){
//    let student = studentsDetails[i]
//    console.log(`detail of ${i}\t : \tName :${student.name}\t\tAge : ${student.age}\tGender : ${student.sex}\t\thobby : ${student.hobi} `)
// }
// console.log("-----------------------------------------------------------------")
// for(let chi in studentsDetails){
//     let student = studentsDetails[chi]
//     if(student.age > 20){
//         console.log(`detail of ${chi}\t : \tName :${student.name}\t\tAge : ${student.age}\tGender : ${student.sex}\t\thobby : ${student.hobi} `)
//     }
// }
// console.log("------------------painting----------------------------------------")
// for(let chi in studentsDetails){
//     let student = studentsDetails[chi]
//     if(student.hobi === "painting"){
//         console.log(`detail of ${chi}\t : \tName :${student.name}\t\tAge : ${student.age}\tGender : ${student.sex}\t\thobby : ${student.hobi} `)
//     }
// }
// console.log("------------------Male----------------------------------------")
// for(let chi in studentsDetails){
//     let student = studentsDetails[chi]
//     if(student.sex === "male" ){
//         console.log(`detail of ${chi}\t : \tName :${student.name}\t\tAge : ${student.age}\tGender : ${student.sex}\t\thobby : ${student.hobi} `)
//     }
// }


console.clear()


// let obj  = {
// name: "sami",
// age:15,
// classs: "BSE[4]",
// sex: "male", 
// hobi: "football",
// }
//     console.log("key\t :value")
//     for(let key in  obj){
//     console.log(`${key}\t: ${obj[key]}`)
// }


// let obj  = {
//     "49": "sami",
//     "41":15,
//     "24": "BSE[4]",
//     "20": "male", 
//     "1": "football",
//     }
// for (let key in obj) {
//   console.log(key,obj[key])
//     }









// let obj  = {
//         "49": "sami",
//         "41":15,
//         "24": "BSE[4]",
//         "20": "male", 
//         "1": "football",
//         }
// let obj2 = {...obj}
// let ob3  = obj2["49"] = "ustaad"
// console.log(obj2["49"])
// console.log(obj["49"])




// let obj = {
//     name : "sami",
//     sixe: {
//         height: 180,
//         weight: 70
//     }
// }
// console.log(obj)
// console.log("-=----------------------------------------")

// let clonee = structuredClone(obj)
// clonee.sixe.weight = "ssssssss"

// console.log(clonee)
// console.log("-=----------------------------------------")

// console.log(obj.sixe)
// let clone = Object.assign({},obj)
// clone.sixe.height = "sami"
// console.log("-=----------------------------------------")
// console.log(clone.sixe.height)







// garbage colletion 
// let family = (man,women) =>{
//      women.husband = man
//      man.wife = women
//      return (
//      {
//       father : man,mother : women
//      }
//      )
// }
// let person1 ={name:"sami"}
// let person2 ={name:"aimal"}
// let familyMember = family(person1,person2)
// console.log(` ${familyMember.father.name} is married to ${familyMember.mother.name}`)







let admin = {name : "admin"}
let user = {name : "userrr", admin: "admin"}
function info(){
    console.log(`hi this is me ${this.name} and my admin is ${this.admin?.name || "N/A"}`)
}

admin.f = info
user.f = info
admin.f()