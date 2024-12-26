var a  = parseFloat(prompt("Enter the matric percentage"))
var b = parseFloat(prompt("Enter the percentage of saylani mass it traning programme"))
if (a > 100 || b > 100 ) {
    alert("Enter the valid percentage")
}
else {
    var c = (a + b)
    var avg =c/2 
    if (avg >70 ) {
        alert("You are eligible")
    }
    else{
        alert("You are not eligible")
    }
}   






let a = prompt("Enter name")
let b = a.length 
for (let i = 0; i < b; i++) {
   if (a.slice(i,i+2) == " ") {
    alert("no two spaces consecutive")
    
   }
}