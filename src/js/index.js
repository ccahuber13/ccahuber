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

