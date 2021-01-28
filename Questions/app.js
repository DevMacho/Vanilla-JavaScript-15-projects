const oneBTN = document.querySelector('.one');
const twoBTN = document.querySelector('.two');
const threeBTN = document.querySelector('.three');
const oneAns = document.querySelector('.answerOne');
const twoAns = document.querySelector('.answerTwo');
const threeAns = document.querySelector('.answerThree');

let oneChe = 0;
let twoChe = 0;
let threeChe = 0;


oneBTN.addEventListener('click',()=>{
    if(oneChe==0){
        oneBTN.innerHTML='-';
        oneAns.classList.remove('hide');
        oneChe++;
    } else {
        oneBTN.innerHTML='+';
        oneAns.classList.add('hide');
        oneChe -= 1;
    }
});


twoBTN.addEventListener('click',()=>{
    if(twoChe==0){
        twoBTN.innerHTML='-';
        twoAns.classList.remove('hide');
        twoChe++;
    } else {
        twoBTN.innerHTML='+';
        twoAns.classList.add('hide');
        twoChe -= 1;
    }
});


threeBTN.addEventListener('click',()=>{
    if(threeChe==0){
        threeBTN.innerHTML='-';
        threeAns.classList.remove('hide');
        threeChe++;
    } else {
        threeBTN.innerHTML='+';
        threeAns.classList.add('hide');
        threeChe -= 1;
    }
});