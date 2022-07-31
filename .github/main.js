let numberButtons = document.querySelectorAll('.buttonsForNumbers')
let operationButtons = document.querySelectorAll('.buttonsForSigns')
let equalsButton = document.querySelector('#equals')
let allClearButton = document.querySelector('#clear')
let result = document.querySelector('.output')


for (let numberButton of numberButtons){
    numberButton.addEventListener('click', ()=> {
        result.innerText += numberButton.innerText;
    }

)}

for (let operation of operationButtons){
    operation.addEventListener('click', ()=> {
        result.innerText += operation.innerText;
    }
)}

equalsButton.addEventListener('click', ()=>{
    result.innerText = eval(result.innerText);
}
)

allClearButton.addEventListener('click', ()=> {
    result.innerText = "";
}
)

