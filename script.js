AOS.init({
    duration: 1200,
})

// cursor change
let mousecursor = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mousecursor.style.top = e.pageY + 'px';
    mousecursor.style.left = e.pageX + 'px';
}

// TYPING ANIMATION
var typed = new Typed('.animate1', {
    strings:[
    '"Hi! My name is Ronit. I\'m a sophomore (2nd year undergraduate) student at New York University Abu Dhabi. I\'m double majoring in Computer Science and Interactive Media with a minor in Cybersecurity."'
    ],
        typeSpeed: 6,
    });
    var typed = new Typed('.animate2', {
    strings:[
    '"Cybersecurity is my primary domain of interest. In the long term, I aspire to be a cybersecurity engineer and security researcher. When I\'m not coding, I enjoy learning new technologies, sketching and designing, preparing for certifications, and reading spy-thriller books."'
    ],
        typeSpeed: 6,
    });

// Hide or show ironman image on hover and unhover (in about page)
function show() {
    document.getElementById('img1').style.visibility = 'visible';
}
function hide() {
    document.getElementById('img1').style.visibility = 'hidden';
}