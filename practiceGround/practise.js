var button = document.querySelector('button');
var box = document.getElementsById('changeMe');

button.onclick = function changeColor () {
    box.style.background = 'blue';
}