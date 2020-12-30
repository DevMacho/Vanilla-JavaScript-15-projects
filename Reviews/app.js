const profile_image = document.getElementById('profile-image');
const title = document.getElementById('name');
const job = document.getElementById('job');
const introduction = document.getElementById('introduction');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const shuffle = document.getElementById('random-shuffle');


const images = ['asset/profile0.png','asset/profile1.png','asset/profile2.png','asset/profile3.png'];
const names = ['Susan Smith','Nyaco Lee','Hodoo Gwaja','Parang Yee'];
const jobs = ['WEB DEVELOPER','STUDENT','BABO','SHIPDUCK'];
const content = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','잼민이','고등학생 호두 바보','치노를 좋아하는 씹덕 (프로그래밍 ㅈㄴ 잘함)'];

let page = 0;

function changeTitle(){
    if(page == -1){
        page = names.length -1;
    }
    if(page > names.length - 1){
        page = 0
    }
    title.textContent = names[page];
    job.textContent = jobs[page];
    introduction.textContent = content[page];
    profile_image.src = images[page];
}

function goNext(){
    page = page + 1;
    console.log(page)
    changeTitle();
}

function goPrevious(){
    page = page -1;
    console.log(page)
    changeTitle()
}

function pickRandomNumber(){
    page = Math.floor(Math.random()*names.length);
    changeTitle();
}

next.addEventListener('click', goNext);
previous.addEventListener('click', goPrevious);
shuffle.addEventListener('click', pickRandomNumber);
