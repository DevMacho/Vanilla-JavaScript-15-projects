const menu = document.getElementById('menu-bar');
const menu_list = document.getElementById('mobile-menu-list');

let menu_status = 0;

function showMenus(){
    if(menu_status == 0){
        menu_status = menu_status + 1;
        menu_list.classList.add('show');
    } else {
        menu_status = menu_status - 1;
        menu_list.classList.remove('show');
    }
}



menu.addEventListener('click',showMenus);


