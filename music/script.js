let music = document.getElementById("roll");
        let playbtn = document.getElementById("play");
        let prevbtn = document.getElementById("prev");
        let nextbtn = document.getElementById("next");
        let audio = document.getElementById("audio");
        let title=document.getElementById("title")

        let songs=['Veeran','eagle']
        let index=0;
         loadSong(songs[index])
         
        function loadSong(song) 
        {
        title.innerText = song;
        audio.src = `songs/${song}.mp3`;
        
        }  


       playbtn.addEventListener('click',function(){
          

           let playing=music.classList.contains('play');

            if(playing){
                pause();

            }
            else{
                play();
            }

        })
        
        function play() {
      music.classList.add("play");
      playbtn.querySelector(".fas").classList.remove("fa-play");
      playbtn.querySelector(".fas").classList.add("fa-pause");
      audio.play();
}

function pause() {
music.classList.remove("play");
playbtn.querySelector("i.fas").classList.add("fa-play");
playbtn.querySelector("i.fas").classList.remove("fa-pause");
audio.pause();
}