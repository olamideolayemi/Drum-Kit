var numberOfDrums = document.querySelectorAll(".drum").length;


// detecting button press
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;
   
        makeSound(buttonInnerHtml);

        animateButton(buttonInnerHtml);
        
   })
}

// detecting keyboard press 
document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    animateButton(event.key);

});



function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("./sounds/tom-1.mp3")
            crash.play();
        break;
        case "a":
            var kick = new Audio("./sounds/tom-2.mp3")
            kick.play();
        break;
        case "s":
            var snare = new Audio("./sounds/tom-3.mp3")
            snare.play();
        break;
        case "d":
            var snare = new Audio("./sounds/tom-4.mp3")
            snare.play();
        break;
        case "j":
            var snare = new Audio("./sounds/crash.mp3")
            snare.play();
        break;
        case "k":
            var snare = new Audio("./sounds/kick-bass.mp3")
            snare.play();
        break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
        break;

        default: console.log(buttonInnerHtml);
            
     }
}

function animateButton(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed")
    }, 100);

}