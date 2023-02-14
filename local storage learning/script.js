function save(){

    var newData = document.getElementById("input").value;
    if(localStorage.getItem("data") == null)
        localStorage.setItem("data" , "[]");
    
    var oldData = JSON.parse(localStorage.getItem("data"));
    oldData.push(newData);
    
    localStorage.setItem("data" , JSON.stringify(oldData));

}

function show(){
    if(localStorage.getItem("data") != null ){
        document.getElementById("output").innerHTML = JSON.parse(localStorage.getItem("data"));
    }
}


function del(){
    if(localStorage.getItem("data") != null ){
        alert(  );
    }
}

document.getElementById("saveBtn").addEventListener("click" , save);
document.getElementById("shwBtn").addEventListener("click" , show);
document.getElementById("delBtn").addEventListener("click" , del);
