let Body = document.querySelector("body");
let aud = document.querySelector("audio");
let playButton  = document.querySelector(" .play");

let time = document.querySelector(" .timePara");

// slider
let slider = document.querySelector(" .sliding");


//  to calculate load metadata first
aud.addEventListener('loadedmetadata', function(){
    // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
    let duration = aud.duration;
    time.innerHTML = parseFloat(  duration/100 ).toFixed(2);
},false);


// progress bar
function progress(){
    aud.addEventListener("timeupdate" , ()=>{
        var progres = parseInt( (aud.currentTime / aud.duration) *100  );
        slider.value = progres;
    })
}


// player functions
var pressed = 0;
function play(){
    if( pressed === 0 )
    {
        aud.play();
        pressed = 1;
        playButton.className = "fa-sharp fa-solid fa-circle-pause play mx-2";
        playButton.classList.add("trans");
        Body.classList.add("back_color");
    }
    else{
        aud.pause();
        pressed = 0;
        playButton.className = "fa-sharp fa-solid fa-circle-play play mx-2";
        playButton.classList.remove("trans");
        Body.classList.remove("back_color");
    }
    progress();
    document.querySelector("h3").innerHTML = songsList[0].songName;
}

playButton.addEventListener("click" , play  );


// change songs
// create elements as an object
let songsList = [
    { songpath : "audio/Naruto.mp3" , songName : "Naruto"  },
    { songpath : "audio/Piano.mp3" , songName : "Piano"} ,
    { songpath : "audio/Royalty.mp3"  , songName : "Royalty"} ,
    { songpath : "audio/Jim Yosef.mp3" , songName : "Jim Yorself"} 
];


let x = 0;


function nextSongs(){

    if( x > songsList.length - 2 )
    {
        // repeat playlist
        x=0;
        aud.setAttribute( "src" , songsList[x].songpath );
        aud.play();
    }
    else{
        x++;
        aud.setAttribute( "src" , songsList[x].songpath );
        aud.play();    
    }
    progress();
    playButton.className = "fa-sharp fa-solid fa-circle-pause play mx-2";
    document.querySelector("h3").innerHTML = songsList[x].songName;
    Body.classList.add("back_color");
}

function prevSongs(){

    if( x === 0 )
    {
        x = songsList.length - 1;
        aud.setAttribute( "src" , songsList[x].songpath );
        aud.play();
    }
    else{
        x--;
        aud.setAttribute("src" , songsList[x].songpath);
        aud.play();
    }
    progress();
    playButton.className = "fa-sharp fa-solid fa-circle-pause play mx-2";
    document.querySelector("h3").innerHTML = songsList[x].songName;
    Body.classList.add("back_color");
}



let nextButton = document.querySelector(" .next");
let prevButton = document.querySelector(" .prev");


nextButton.addEventListener("click" , nextSongs );
prevButton.addEventListener("click" , prevSongs );


// songs ended
aud.addEventListener( "ended" , nextSongs);

// change time of songs
slider.addEventListener("change" , ()=>{
    aud.currentTime = slider.value * aud.duration / 100;
})


