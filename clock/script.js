const monthName = ["Jan" , "Feb" , "Mar" , "Apr" , "May" ,
                    "Jun" , "Jul" ,"Aug" , "Sep" , "Oct" ,
                    "Nov" , "Dec"
                    ];

function clock(){

const d = new Date();

let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear() % 2000;

let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();


document.getElementsByClassName("date")[0].innerHTML = addZero(date);
document.getElementsByClassName("month")[0].innerHTML = monthName[month];
document.getElementsByClassName("year")[0].innerHTML = year;

document.getElementsByClassName("hour")[0].innerHTML = addZero(hour);
document.getElementsByClassName("min")[0].innerHTML = addZero(min);
document.getElementsByClassName("sec")[0].innerHTML = addZero(sec);


}

document.getElementsByClassName("parentDiv")[0].addEventListener("mousemove" , clock);


// Inserting Zero function
function addZero( n ){
    if(n<10)
        return `0${n}`;
    return n;
}


// Greating 

const d = new Date();
let hour = d.getHours();

if( hour < 12 )
    document.getElementsByClassName("greating")[0].innerHTML = "Good  Morning  Sir";
else if( hour < 16 )
    document.getElementsByClassName("greating")[0].innerHTML = "Good  AfterNoon  Sir";
else
    document.getElementsByClassName("greating")[0].innerHTML = "Good  Evening  Sir";


// cursor
const root = document.querySelector("html");
// creating new cursor
const a = document.createElement("div");

a.classList.add("cursor");
root.appendChild(a);


root.addEventListener( "mousemove" , (e) => 
{
     setPosition(a , e) 
                
});


function setPosition(element, e) {
    // changing positiion of a or b div with respect to pointer.
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`; 
}