var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
var myVariable = 'bob';
myVariable;
console.log(myVariable);
myVariable = 'Steve';
// This is a comment
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
alert('Yay,i love chocolate ice cream!');
}
else {
alert('Awww,but chocolate is my favorite...');
}
var myVariable = document.querySelector('h1');
alert('hello!');
function multiply(num1,num2){
var result = num1 * num2;
return result;
}
multiply(4,7);
multiply(20,2);
multiply(0.5,3);
document.querySelector('html').onclick = function () {
alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');
myImage.onclick = function(){
var mySrc = myImage.getAttribute('src');
if (mySrc === 'images/firefox-icon.png') {
myImage.setAttribute('src', 'images/firefox2.PNG');
} else {
myImage.setAttribute('src', 'images/firefox-icon.png');
}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
var myName = prompt('Please enter your name.');
localStorage.setItem ('name' , myName);
myHeading.innerHTML = 'Mozilla is cool, '+ myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool,'+ storedName;
}
myButton.onclick = function(){
	setUserName();
}