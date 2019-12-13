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
var subFood1=document.getElementById('bf-sub');
var foodN=document.getElementById('food-navi');

var bigEvent=document.getElementById('be-title');
var subFood2=document.getElementById('be-sub');
var eventN=document.getElementById('event-navi');

//type the full function syntax 'function BfShowUpLate(){}'for functions does not exist before this line
window.addEventListener('scroll', function BfShowUpLate() {
  //'<=less than or equal to'
  //getBoundingClientRect means to get the dimensions and the positions of a specific element
  if (bigFood.getBoundingClientRect().y <= window.innerHeight / 2) {
    window.removeEventListener('scroll', BfShowUpLate);
    setTimeout(function () {
      bigFood.classList.add('bf-title-showup');
      subFood1.classList.add('bf-sub-showup');
      foodN.classList.add('foodnav-up');
      console.log('test');
    }, 400);
  }
});

window.addEventListener('scroll', function BeShowUpLate() {
  if (bigEvent.getBoundingClientRect().y <= window.innerHeight / 2) {
    window.removeEventListener('scroll', BeShowUpLate);
    setTimeout(function () {
      bigEvent.classList.add('be-title-showup');
      subFood2.classList.add('be-sub-showup');
      eventN.classList.add('foodnav-up');
    }, 400);
  }
})

// function BfShowUp(){
//   bigFood.classList.add('bf-title-showup');
// }
//subtitle show up
// var subFood1=document.getElementById('bf-sub');
// window.addEventListener('scroll', BFsubShowUpLate);

// function BFsubShowUpLate(){
//   if (subFood1.getBoundingClientRect().y <= window.innerHeight / 2) {
//     setTimeout(BFsubShowUp,4000);
//   }
// }
function BFsubShowUp(){
  subFood1.classList.add('bf-sub-showup');
  console.log('asdfsd');
}

//food navigation show up
// var foodN=document.getElementById('food-navi');
// window.addEventListener('scroll', BFNavUpLate);
function BFNavUp(){
  foodN.classList.add('foodnav-up');
}
function BFNavUpLate(){
  setTimeout(BFNavUp,5000);
}


//scroll and best events show up
//bigtitle show up
// var bigEvent=document.getElementById('be-title');
// window.addEventListener('scroll',BeShowUpLate);

function BeShowUp(){
  bigEvent.classList.add('be-title-showup');
}
// function BeShowUpLate(){
//   setTimeout(BeShowUp,5000);
// }
//subtitle show up
// var subFood2=document.getElementById('be-sub');
// window.addEventListener('scroll', BEsubShowUpLate);

function BEsubShowUpLate(){
  setTimeout(BEsubShowUp,5000);
}
function BEsubShowUp(){
  subFood2.classList.add('be-sub-showup');
}
//event navigation show up
// var eventN=document.getElementById('food-navi');
// window.addEventListener('scroll', BFNavUpLate);
function BFNavUp(){
  foodN.classList.add('foodnav-up');
}
function BFNavUpLate(){
  setTimeout(BFNavUp,5000);
}
