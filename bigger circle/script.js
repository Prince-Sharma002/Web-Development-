const root = document.querySelector("html");

// creating new cursor
const a = document.createElement("div");

// Add class cursor to a div "a"
a.classList.add("cursor");
// create div "a" as child of html
root.appendChild(a);

// creating follow cursor
const b = document.createElement("div");
b.classList.add("cursor" , "follow_cursor");
root.appendChild(b);

// add eventListner to html element and use mousemove to get coordinates of mouse/pointer
// where e  is event object which have property called "clientX" which gives x coordinates similary client.y gives y coordinates.
root.addEventListener( "mousemove" , (e) => 
{
     setPosition(a , e) 
     setPosition(b , e)
                
});




function setPosition(element, e) {
    // changing positiion of a or b div with respect to pointer.
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`; 
  }