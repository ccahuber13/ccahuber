/**
 * Author: Christopher Huber
 * Date: 8/7/2019
 * www.ccahuber.com
 * Dependencies: highway.js | gsap.js
 */
import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

console.log('smooth-page-transitions.js is running');

//Create our own fade class utilizing highway transitions
class Fade extends Highway.Transition {
    // index.html -> about -> function call to say it's finished.
    in({from, to, done}){
        // About coming in
        const timeLine = new TimelineLite();
        // animate container coming in -> seconds -> What properties (Start left out of screen in middle) -> Where it's going to go - > Run the complete function when animation has finished.
        // to.children grabs div class="home-content" to fade out.
        timeLine.fromTo(to, 0.2, {left: '-100%', top: '10%'}, {left: '0%'})
        .fromTo(to, 0.5, {height: '90vh'}, {height: '90vh',top: '10%',  onComplete: function(){
            // Remove the container we came from.
            from.remove();
            // End the animation
            done();
        }}).fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})

    }

    // When index.html goes out. Can add out animations here.
    out({from, done}){
        done();
    }
}

export default Fade;

