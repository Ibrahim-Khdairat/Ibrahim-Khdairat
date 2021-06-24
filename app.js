'use strict'

let galaryElement = document.getElementById('onlineGalaryCon');
let showGalaryElement =  document.getElementById('Show');
let onlineDivElement = document.getElementById('online');

showGalaryElement.addEventListener('click',showGalary );

function showGalary() {
    onlineDivElement.setAttribute('hidden',1);
    galaryElement.removeAttribute('hidden');
}
