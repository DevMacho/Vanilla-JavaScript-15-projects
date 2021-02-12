//buttons
const allBTN = document.getElementsByClassName('all'),
breakfastBTN = document.getElementsByClassName('breakfastBTN'),
dinnerBTN = document.getElementsByClassName('dinnerBTN'),
liquidBTN = document.getElementsByClassName('liquidBTN');
//types
const breakfast = document.querySelectorAll('.breakfast'),
dinner = document.querySelectorAll('.dinner'),
liquid = document.querySelectorAll('.liquid');

function showAll(){
    for (let i = 0; i < breakfast.length; i++) {
        const element = breakfast[i];
        element.classList.remove('hide');
    };
    for (let i = 0; i < dinner.length; i++) {
        const element = dinner[i];
        element.classList.remove('hide');
    };
    for (let i = 0; i < liquid.length; i++) {
        const element = liquid[i];
        element.classList.remove('hide');
    };
}

function hideBreakfast(){
    for (let i = 0; i < breakfast.length; i++) {
        const element = breakfast[i];
        element.classList.add('hide');
    };
};

function hideDinner(){
    for (let i = 0; i < dinner.length; i++) {
        const element = dinner[i];
        element.classList.add('hide');
    };
};

function hideLiquid(){
    for (let i = 0; i < liquid.length; i++) {
        const element = liquid[i];
        element.classList.add('hide');
    };
};