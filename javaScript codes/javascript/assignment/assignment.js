let state = document.getElementById('switchstate');
const toggler = document.getElementById('toglerswitch');
const main = document.getElementById('main')
const ce = document.getElementById('che')
let noode  =main.children[1]
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
function uptade(){
let now = new Date()
let hours = now.getHours()
let min = now.getMinutes()
let sec = now.getSeconds()
let period  ;
if (hours>=12) {
    period = "PM"
     main.style.backgroundImage = "url('https://wallpaperaccess.com/full/4025627.jpg')";
}
else{
    period  = "AM"
     main.style.backgroundImage = "url('http://www.pixelstalk.net/wp-content/uploads/2016/06/Beautiful-night-Images-hd.jpg')";
}
hours = hours%12||12
noode.innerHTML = `${hours} : ${min} : ${sec} ${period}`
}
setInterval(uptade,1000)
uptade()