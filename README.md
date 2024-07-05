in other to start registering the button clicks i nedd to add an eventlistener to it.

create a function that does something when a button has been clicked:

function handleClick() {
	alert("I got clicked);
}

then we need to call the function and assign it to the function.

document.querySelector("button").addEventListener("click", handleClick)

it could also be written as an anonymous function:

document.querySelector("button").addEventListener("click", function () {
	alert("I got clicked);
})

How to add audio with javascript
var audio = new Audio("audio.mp3")
audio.play();

How to add animation with JavaScript
Firstly we need to store the active button in a variable 
eg. var activeButton = document.querySelector("." + currentKey)
This variable will be declared within a function that has a parameter of currentKey.

Then we add the class 
.classList.add("{className}")

Then we need the added class to remove after a few seconds so we add a timeout function within the animate function
setTimeout(function () {}, 3000);