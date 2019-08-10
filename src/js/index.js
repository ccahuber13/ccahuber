// Global app controller
import './test'
import '../styles/scss/appStyles.scss'
import '../styles/css/main.css'

console.log(`index.js running`);


import Highway from '@dogstudio/highway';
import Fade from './smooth-page-transitions';


const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const navSlide = () => {
    const mobileIcon = document.querySelector('.main-nav__mobile-icon');
    const navLinks = document.querySelector('.main-nav__links');
    console.log(mobileIcon);
    console.log(navLinks);

    mobileIcon.addEventListener('click', () => {
        navLinks.classList.toggle('.main-nav__links--active');
    })
}

navSlide();