const display = document.getElementById('count-el');
const addButton = document.getElementById('buttonAdd');
const minusButton = document.getElementById('buttonMinus');
const resetButton= document.getElementById('buttonReset');
const saveButton= document.getElementById('buttonSave');
const save = document.getElementById('saveDis');

let counter = 0;

display.innerHTML = counter;

addButton.addEventListener('click', function(){
    counter += 1;
    display.innerHTML = counter;
});

minusButton.addEventListener('click', function(){
    counter -= 1;
    display.innerHTML = counter;
});

resetButton.addEventListener('click', function(){
    counter = 0;
    display.innerHTML = counter;
});

saveButton.addEventListener('click', function(){
    let currentNum = counter + ' - ';
    saveDis.innerText += currentNum;
});


