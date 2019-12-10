//contact us show up
var contactUs=document.getElementById('contact-head');

function AniForContHead(){
  contactUs.classList.add('fade-in');
}

function AniForContHeadLate(){
  setTimeout(AniForContHead,100);
}

AniForContHeadLate();

//circle show up
var iconDot =document.createElement('div');
iconDot.classList.add('holo-cir');
var scrowFamily=document.getElementById('scroll-down');
scrowFamily.appendChild(iconDot);
//line show up
var iconLine=document.createElement('div');
iconLine.classList.add('line-ver');
scrowFamily.appendChild(iconLine);

//come in animation
function AniForScroll(){
  scrowFamily.classList.add('scroll-down-ani');
}

//dealy come in
function AniForScrollLate(){
    setTimeout(AniForScroll, 100);
}

AniForScrollLate();
