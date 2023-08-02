
var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}
document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});


function sound(key) {
    switch (key) {
      case "A":
        var sound1 = new Audio('Vikram BGM.mp3');
        sound1.play();
        break;
    
      case "S":
        var sound2 = new Audio('naan ready.mp3');
        sound2.play();
        break;
    
      case "D":
        var sound3 = new Audio('mp32.mp3');
        sound3.play();
        break;
    
      case "F":
        var sound4 = new Audio('mp33.mp3');
        sound4.play();
        break;
    
      case "G":
        var sound5 = new Audio('One Piece We Are.mp3');
        sound5.play();
        break;
    
      case "H":
        var sound6 = new Audio('beliver.mp3');
        sound6.play();
        break;

      case "J":
         var sound7 = new Audio('Blinding-Lights.mp3');
         sound7.play();
         break;  

      case "K":
         var sound8 = new Audio('Edhirthu Nil.mp3');
         sound8.play();
         break;

      case "L":
        var sound9 = new Audio('dancin.mp3');
        sound9.play();
        break;  


        
        
    
      default: console.log(key);
    }
  }