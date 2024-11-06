const num1 = document.getElementById("firstNum")
const num2 = document.getElementById("secondNum")
const result = document.getElementById("resultEl")


function add(){
    const total = parseInt(num1.value) + parseInt(num2.value)
    result.innerText = 'Result = ' + total;
}

function divide(){
    const total = parseInt(num1.value) / parseInt(num2.value)
    result.innerText = 'Result = ' + total;
}

function mutiple(){
    const total = parseInt(num1.value) * parseInt(num2.value)
    result.innerText = 'Result = ' + total;
}

function minus(){
    const total = parseInt(num1.value) - parseInt(num2.value)
    result.innerText = 'Result = ' + total;
}
