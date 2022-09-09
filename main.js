var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/lucky-cat-g09270cb60_640.jpg') {
      myImage.setAttribute ('src','bilder/cat-g121833c75_640.jpg');
    } else {
      myImage.setAttribute ('src','bilder/lucky-cat-g09270cb60_640.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Willkommen auf meiner ersten Website, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Willkommen auf meiner ersten Website, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}