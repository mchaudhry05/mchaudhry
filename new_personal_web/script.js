/* 
   This is code for a the search bar. 
*/

var search = document.getElementById("search-bar");

function findMatch(value){
    const re = new RegExp(value, 'gi'); 
    //const matches = document.documentElement.innerHTML.match(re)
    //document.body.innerHTML= document.body.innerHTML.replace(re,  "<span class='rainbow'>$1</span>");
    //document.getElementById('name').innerHTML = document.getElementById('name').innerHTML.replace(re, "<span class='rainbow'>"+ re +"</span>");

    var elements = document.getElementsByTagName("h5"); 
    var j;
    for (j = 0; j < elements.length; j++){
        if(elements[j].innerHTML.includes(value)){
            elements[j].innerHTML = elements[j].innerHTML.replace(value, "h")
        }
    }


    
    //console.log(matches);
}


/*function findMatch(element, value) {
    const re = new RegExp(value, 'gi'); 
  if (element.hasChildNodes()) {
    element.childNodes.forEach(findMatch)
  } else if (element.nodeType === 1) {
    if (element.innerHTML.match(re)) {
        console.log(element.innerHTML.match(re))
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/${re}/gi, '<span class="rainbow">$1</span>')
      element.replaceWith(newElement)
    }
  }
}
*/


search.addEventListener("input", () => {
    if (search.value !== ""){
    findMatch(search.value);
    }
});





console.log(document.getElementsByClassName("course-heading")[0].nodeType);



/*
   This code is for the browse button.
*/
function randomProject(){ 
    var index = Math.floor((Math.random() * 3));
    var links = ["https://github.com/mchaudhry05/The-Rap-Test", "https://github.com/mchaudhry05/NEAT-Dino-Game", "https://github.com/mchaudhry05/workflow", "http://budgeeasy.appspot.com/"]; 
    var browseLink = document.getElementById("browse"); 
    browseLink.href = links[index];
}

randomProject()


/*
   This code is for the player within the website.
*/
var songPlayer = document.getElementById("songPlayer");
var playPauseButton = document.getElementById("pause-play");
var locationOfPlayPause = ["images/pause.png", "images/play-button.png"];

playPauseButton.addEventListener("click", function(){
    if (playPauseButton.alt === "play"){
        playPauseButton.src = "images/play-button.png";
        playPauseButton.alt = "pause";
        songPlayer.pause();
    }else if(playPauseButton.alt === "pause"){
        playPauseButton.src = "images/pause.png";
        playPauseButton.alt = "play";
        songPlayer.play();
    }
});

var forward = document.getElementById("forward"); 
var rewind = document.getElementById("rewind");

var songName = document.getElementsByClassName("song-name")[0];
var albumCover = document.getElementsByClassName("album-cover")[0]; 

var indexOfSong = 0 
var covers = ["images/drake.jpg", "images/drake2.jpg", "images/drake3.jpg"]; 
var names = ["God's Plan", "All Me", "Headlines"]; 
var songs = ["songs/godsplan.mp3", "songs/allme.mp3", "songs/headlines.mp3"];



forward.addEventListener("click", function(){
    indexOfSong+=1; 
    albumCover.src = covers[indexOfSong%3]; 
    songName.innerHTML = names[indexOfSong%3]; 
    songPlayer.setAttribute('src',  songs[indexOfSong%3]);
    if (playPauseButton.alt === "play"){
        songPlayer.setAttribute("autoPlay","autoPlay");
    }else{
        songPlayer.pause()
    }
});

rewind.addEventListener("click", function(){

    if(indexOfSong == 0){
        indexOfSong = 2;
    }else{
        indexOfSong-=1; 
    }
    
    albumCover.src = covers[indexOfSong%3]; 
    songName.innerHTML = names[indexOfSong%3]; 
    songPlayer.setAttribute('src',  songs[indexOfSong%3]);
    if (playPauseButton.alt === "play"){
        songPlayer.setAttribute("autoPlay","autoPlay");
    }else{
        songPlayer.pause()
    }
});





