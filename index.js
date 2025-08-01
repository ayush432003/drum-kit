// var drumAll = document.querySelectorAll(" .drum").length
// for (let i = 0; i < drumAll; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     // alert("I got clicked!");
//     var audio = new Audio("sounds/tom-1.mp3")
//     audio.play();
//   });
// }

// let  i = 0;
// while(i< drumAll){
//     document.querySelectorAll(".drum")[i].addEventListener("cilck", function(){
//         alert("I got clicked");
//     });

//     i++;
// }


// let drums = document.querySelectorAll(".drum");
// let i = 0;
// while (i < drums.length) {
//   drums[i].addEventListener("click", function() {
//     alert("I got clicked!");
//     var audio = new Audio("sounds/tom-1.mp3")
//     audio.play();
//   });
//   i++;
// }


var drumAll = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumAll; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/crash.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
