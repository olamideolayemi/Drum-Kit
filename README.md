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
