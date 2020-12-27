const title = document.getElementById('color-Tag');
const colors = ['white','red','blue','peru','yellow','green','pink','whitesmoke'];
const btn = document.getElementById('change-color');

function handleColor(){
    const randomNumber = pickRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    title.textContent = colors[randomNumber]
}

function pickRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}


btn.addEventListener('click', handleColor);