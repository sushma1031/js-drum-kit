let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", (event) => {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  let sound;
  
  switch (key) {
    case 'w':
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case 'a':
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case 's':
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case 'd':
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case 'j':
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case 'k':
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case 'l':
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    default:
      console.log(key);
      
  }
}

function buttonAnimation(pressedKey) {
  let activeButton = document.querySelector("." + pressedKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}


