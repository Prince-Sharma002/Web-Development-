
let  a = 0;
let  b = 0;
let  c = 0;


function OnMouseEnter(){

    a = a+1;
    document.getElementById("H1").innerHTML = a;
}

function OnMouseOver(){
    b = b+1;
    document.getElementById("H2").innerHTML = b;
}

function OnMouseMove(){
    c = c+1;
    document.getElementById("H3").innerHTML = c;
}

document.getElementById("div1").addEventListener("mouseenter" , OnMouseEnter);
document.getElementById("div2").addEventListener("mouseover" , OnMouseOver);
document.getElementById("div3").addEventListener("mousemove" , OnMouseMove);
