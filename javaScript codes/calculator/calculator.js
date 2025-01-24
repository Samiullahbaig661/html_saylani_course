

const { JSDOM } = require("jsdom");

// Create a simulated DOM
const dom = new JSDOM(`
    <!DOCTYPE html>
    <div class="valuepaste">0</div>
`);

const document = dom.window.document;


const hcd = document.querySelector(".valuepaste");
function show(val) {
    hcd.style.color = "black"; 

    if (hcd.innerHTML === "0") {
        hcd.innerHTML = val; 
    } else {
        hcd.innerHTML += val; 
    }
}
function allclear(){
    const defaultValue = "0";
    hcd.innerHTML = defaultValue;
}
function oneclear(){
const hcdd = hcd.innerHTML;
if (hcdd.length > 0) {
    hcd.innerHTML = hcdd.slice(0,hcdd.length-1)
}
}

function performcalculation(){ 
 const reult = eval(hcd.innerHTML);
 hcd.innerHTML = reult;
}



