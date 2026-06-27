const display = document.getElementById("display");

// ==========================
// Calculator Functions
// ==========================

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value===""){
            return;
        }

        let expression = display.value.replace(/%/g,"/100");

        display.value = eval(expression);

    }

    catch{

        display.value = "Error";

    }

}

// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown",function(event){

    const key = event.key;

    if(!isNaN(key)){
        appendValue(key);
    }

    else if(
        key==="+" ||
        key==="-" ||
        key==="*" ||
        key==="/" ||
        key==="."
    ){
        appendValue(key);
    }

    else if(key==="%"){
        appendValue("%");
    }

    else if(key==="Enter"){
        event.preventDefault();
        calculate();
    }

    else if(key==="Backspace"){
        deleteLast();
    }

    else if(key==="Escape"){
        clearDisplay();
    }

});

// ==========================
// Live Date & Time
// ==========================

function updateDateTime(){

    const now = new Date();

    const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    };

    const date = now.toLocaleDateString("en-IN",options);

    const time = now.toLocaleTimeString("en-IN");

    document.getElementById("datetime").innerHTML =
        date + "<br>" + time;

}

setInterval(updateDateTime,1000);

updateDateTime();

// ==========================
// Theme Toggle
// ==========================

const themeBtn = document.getElementById("themeBtn");

function toggleTheme(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="🌙";

    }

    else{

        themeBtn.innerHTML="☀️";

    }

}