
function Calen(){
  for(var i=0;i<30;i++){
    var rec=document.createElement('div');
    rec.classList.add('square');
    var container=document.getElementById('small-con');
    container.appendChild(rec);
    rec.style.left = 20 + 170 * i + 'px';
  }
}
Calen();
