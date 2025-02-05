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
let orignal_hours  = hours
 hours = hours%12||12
let period ;
let formated_hour;

formated_hour = hours < 10 ? '0' + hours : hours;
let formated_min = min < 10 ? '0' + min : min;
let formated_sec = sec < 10 ? '0' + sec : sec;
if (orignal_hours>=12) {
    period = "PM"
    main.style.backgroundImage = "url('https://wallpaperaccess.com/full/4025627.jpg')";
}
else{
    period  = "AM"
    main.style.backgroundImage = "url('http://www.pixelstalk.net/wp-content/uploads/2016/06/Beautiful-night-Images-hd.jpg')";
}
noode.innerHTML = `${formated_hour } : ${formated_min} : ${formated_sec} ${period}`
}
setInterval(uptade,1000)
uptade()