const navButton = document.querySelector('#ham-btn'); //select the navigation button
const navbar = document.querySelector('#nav-bar'); //Select the navigation bar


navButton.addEventListener('click', () =>{
    navButton.classList.toggle('show');
    navbar.classList.toggle('show');
} )