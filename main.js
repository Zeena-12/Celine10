//select element
const selectElement = function(element){
return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
menuToggler.addEventListener('click', function(){
body.classList.toggle('open');
});

//Scroll  reveal
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback,1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
    elementsToShow.forEach(function(element){
        if (isElemenInViewport(element)) {
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElemenInViewport(el) {
    //special bouns for those using jQuery
    if(typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0
            && rect.bottom >= 0)
            ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >=0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            
    );
}