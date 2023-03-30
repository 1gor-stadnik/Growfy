import './index.html';
import 'normalize.css';
import './styles/main.scss';
import './styles/reset.css';

let menu = document.querySelector('.menu__icon');
let menu_list = document.querySelector('.menu__list');
let exit = document.querySelector('.exit');

menu.addEventListener('click', function (){
    menu_list.style.top = '0';
});

exit.addEventListener('click', function (){
    menu_list.style.top = '-300px';
})
