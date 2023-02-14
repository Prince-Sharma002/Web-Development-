const txt1 = document.getElementById("ip1");
const btn1 = document.getElementById("btn1");
const h = document.getElementById("heading");
const op1 = document.getElementById("op1");

// deleting
const ele = document.getElementById("del1");
const btn2 = document.getElementById("btn2");

const showBtn = document.getElementById("viewBtn");

let arr = [];

function visible(){
    h.style.display = "block";
    op1.style.display = "block";
    refersh.style.display = "inline";
}

function outputFun(){

    var newData = txt1.value  + "<br>";
if(localStorage.getItem('data') == null){
    localStorage.setItem("data" , "[]");
}

var oldData = JSON.parse( localStorage.getItem("data") );
oldData.push(newData);


localStorage.setItem("data" , JSON.stringify(oldData) );

op1.innerHTML =  JSON.parse( localStorage.getItem("data") );


}




function deleteFxn(){
    arr.splice(ele.value - 1, 1);
    var str = arr.join(" ");
    op1.innerHTML =  str;
}



btn1.addEventListener("click" , outputFun);
showBtn.addEventListener("click" , visible);
btn2.addEventListener("click" , deleteFxn);


