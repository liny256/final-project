//scrow down

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


//urban lifestyle show up in index
var lifestyle=document.getElementById('urban-lifestyle');

function AniForText(){
  lifestyle.classList.add('fade-in');
}

function AniForTextLate(){
  setTimeout(AniForText,100);
}

AniForTextLate();

//navigation show up
var navi=document.getElementById('navi-index');

function AniForNavi(){
  navi.classList.add('navi-come-in');
}

function AniForNaviLate(){
  setTimeout(AniForNavi,1000);
}

AniForNaviLate();



//scroll and best food show up
//bigtitle show up
var bigFood=document.getElementById('bf-title');
window.addEventListener('scroll', BfShowUpLate);

function BfShowUpLate(){
  setTimeout(BfShowUp,4000);
}
function BfShowUp(){
  bigFood.classList.add('bf-title-showup');
}
//subtitle show up
var subFood=document.getElementById('bf-sub');
window.addEventListener('scroll', BFsubShowUpLate);

function BFsubShowUpLate(){
  setTimeout(BFsubShowUp,4000);
}
function BFsubShowUp(){
  subFood.classList.add('bf-sub-showup');
}

//food navigation show up
var foodN=document.getElementById('food-navi');
window.addEventListener('scroll', BFNavUpLate);
function BFNavUp(){
  foodN.classList.add('foodnav-up');
}
function BFNavUpLate(){
  setTimeout(BFNavUp,5000);
}


//scroll and best events show up
//bigtitle show up
var bigEvent=document.getElementById('be-title');
window.addEventListener('scroll',BeShowUpLate);

function BeShowUp(){
  bigEvent.classList.add('be-title-showup');
}
function BeShowUpLate(){
  setTimeout(BeShowUp,5000);
}
//subtitle show up
var subFood=document.getElementById('be-sub');
window.addEventListener('scroll', BEsubShowUpLate);

function BEsubShowUpLate(){
  setTimeout(BEsubShowUp,5000);
}
function BEsubShowUp(){
  subFood.classList.add('be-sub-showup');
}
//event navigation show up
var eventN=document.getElementById('food-navi');
window.addEventListener('scroll', BFNavUpLate);
function BFNavUp(){
  foodN.classList.add('foodnav-up');
}
function BFNavUpLate(){
  setTimeout(BFNavUp,5000);
}
