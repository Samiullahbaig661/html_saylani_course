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
 
// const state = document.getElementById('switchstate');
// const toggler = document.getElementById('toglerswitch');
// const main = document.getElementById('main')
// const ce = document.getElementById('che')
// let ison = false;
// function clickk(){
//     ison = !ison
//     if (ison) { 
//         toggler.classList.add('active')   
//         state.innerHTML = "ON" 
//         ce.innerHTML = "Dark mode" 
//          main.style.backgroundColor = "black";
// }
//     else{
//         toggler.classList.remove('active')   
//         state.innerHTML = "OFF"
//         ce.innerHTML = "white mode" 
//         main.style.backgroundColor = "white";
//     }
// }





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





