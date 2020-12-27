const number = document.getElementById('number')
const increaseBTN = document.getElementById('INCREASE');
const resetBTN = document.getElementById('RESET');
const decreaseBTN = document.getElementById('DECREASE');

let defaultNumber = 0
function changeNumber(){
    number.textContent = defaultNumber;
    console.log(defaultNumber)
    if(defaultNumber<0){
        number.style.color = 'red';
    }
    if(defaultNumber>0){
        number.style.color ='green';
    }
    if(defaultNumber == 0){
        number.style.color = 'black';
    }
}
function increaseNumber(){
    defaultNumber = defaultNumber + 1;
    changeNumber()
}

function decreaseNumber(){
    defaultNumber = defaultNumber-1;
    changeNumber()
}

function resetNumber(){
    defaultNumber = defaultNumber=0;
    changeNumber()
}


increaseBTN.addEventListener('click',increaseNumber)
decreaseBTN.addEventListener('click',decreaseNumber)
resetBTN.addEventListener('click',resetNumber)