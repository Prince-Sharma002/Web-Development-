var click = 0;
var colorName = "black";
var buttonColor = "White";

function themeFxn(){
    if(click == 0)
    {
        colorName = "black";
        buttonColor = "white";
        click = 1;
    }
    else{
        colorName = "white";
        buttonColor = "black";
        click = 0;
    }
        
    var x = document.firstElementChild.lastChild;
    x.style.backgroundColor = colorName;
    document.querySelector("button").innerHTML = buttonColor + "Theme";
    
}

document.querySelector("button").addEventListener("click" , themeFxn);
