/** This is high-level function.
 * It must react to delta being more/less than zero.
 */
var scale = 1,
    box = document.querySelector('#box');

function handle(delta) {
    scale *= (1 + delta);
    box.style.WebkitTransform = 'scale(' + scale + ')'
}

/** Event handler for mouse wheel event.
 */

function wheel(event) {
    var delta = 0;
    if (!event) /* For IE. */
    event = window.event;
    if (event.wheelDelta) { /* IE/Opera. */
        delta = event.wheelDelta / 120;
    } else if (event.detail) { /** Mozilla case. */
        /** In Mozilla, sign of delta is different than in IE.
         * Also, delta is multiple of 3.
         */
        delta = -event.detail / 3;
    }
    /** If delta is nonzero, handle it.
     * Basically, delta is now positive if wheel was scrolled up,
     * and negative, if wheel was scrolled down.
     */
    if (delta) handle(delta);
    /** Prevent default actions caused by mouse wheel.
     * That might be ugly, but we handle scrolls somehow
     * anyway, so don't bother here..
     */
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

/** Initialization code. 
 * If you use your own event management code, change it as required.
 */
if (window.addEventListener) { /** DOMMouseScroll is for mozilla. */
    window.addEventListener('DOMMouseScroll', wheel, false);
} /** IE/Opera. */
window.onmousewheel = document.onmousewheel = wheel;