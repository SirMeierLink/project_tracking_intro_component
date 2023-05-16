const nav_menu = document.querySelector('.powerful-insights nav');
const open_menu = document.querySelector("img[alt='open menu'");
const close_menu = document.querySelector("img[alt='close menu'");

open_menu.addEventListener('click', () => {
    open_menu.style.display = 'none';
    close_menu.style.display = 'block';
    nav_menu.classList.toggle('menu_open_close');
});

close_menu.addEventListener('click', () => {
    close_menu.style.display = 'none';
    open_menu.style.display = 'block';
    nav_menu.classList.toggle('menu_open_close');
});

