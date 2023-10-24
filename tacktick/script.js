const TextHeath = document.getElementById('TextHeath');
const tag = document.getElementById('tag')
const enemys = document.getElementsByClassName('enemy')
const bullets = document.getElementsByClassName('bullet')
var CurrentHeath = 10;
var whatelement = 0;
let IndexEnemy = 0;
var index = 0;
var IdEnemy = new Array();
var IDDelite = new Array();
var listbullet = new Array();
var WinCount = 0;
var TacticsCoin = 111;
var cd = 1000 / 60;
var cdtower = 500;
var MaxRange = 500;
var bulletdmg = 1;
var enemyelo = 1;
var onbild = false;
setInterval(() => heath(), 1000 / 100);
setInterval(() => enemiest(), 1000 / 1);
setInterval(() => clean(), 1000 / 100);
setInterval(() => fokus(), 1000 / 50);
setInterval(() => contact(), 1000 / 8);
window.addEventListener("mousedown", () => {
  xe = event.clientX;
  ye = event.clientY;
});
function GetY(elem) { try { return elem.getBoundingClientRect().top } catch { } }
function GetX(elem) { try { return elem.getBoundingClientRect().left } catch { } }
function range(xa, xb, ya, yb) { return Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2)) }
function heath() { TextHeath.innerHTML = CurrentHeath }

function enemiest() {
  let enemy = document.createElement('div');
  let hp = document.createElement('p');
  hp.setAttribute("class", "hp");
  hp.innerHTML = enemyelo;
  enemy.setAttribute("class", "enemy");
  enemy.setAttribute("id", `e${IndexEnemy}`);
  document.body.prepend(enemy);
  IdEnemy.push(IndexEnemy);
  if (1 == (Math.ceil((Math.random()) * (10)))) {
    hp.innerHTML = enemyelo * 3;
    enemyelo++;
  }
  enemy.prepend(hp);

  enemy.addEventListener("click", () => {
    hp.innerHTML -= 1;
    if (hp.innerHTML <= 0) {
      enemy.remove()
      IdEnemy.splice(0, 1)

      WinCount = WinCount + Math.floor(Math.random() * (6 - 1 + 1)) + 1
      TacticsCoin++;
    }
  })

  IndexEnemy++;
}
function clean() {                        // УДАЛЕНИЕ ВРАГОВ СТЕНОЙ

  for (let indexx = 0; indexx < IdEnemy.length; indexx++) {
    if (GetX(document.getElementById(`e${IdEnemy[indexx]}`)) <= 0) {
      let le = document.getElementById(`e${IdEnemy[indexx]}`);
      le.remove();
      --CurrentHeath;
      IdEnemy.splice(indexx, 1);
      if(CurrentHeath <= 0){
        location.reload();
      }
    }
  }
  IDDelite = [];
}
var idd;
function fokus() {                          //ПРИЦЕЛ + БАР
  let time = 2000;
  let current;
  for (let index = 0; index < IdEnemy.length; index++) {
    current = GetX(document.getElementById(`e${IdEnemy[index]}`))
    if (time > current) {
      time = current;
      whatelement = IdEnemy[index];
      idd = index;
    }
  }
  document.querySelector("#tag").style.top = GetY(document.getElementById(`e${whatelement}`)) + 20 - (Math.random() * (25)) + 'px';
  document.querySelector("#tag").style.left = (time - 25 - (Math.random() * (25))) + 'px';
  document.getElementById('CountEnemy').innerHTML = `Врагов: ${IdEnemy.length}`
  document.getElementById('WinCount').innerHTML = `Очки: ${WinCount}`
  document.getElementById('TacticsCoin').innerHTML = `Ресурсы: ${TacticsCoin}`
}
function create(tower) {                                 //ПУЛИ
  index++;
  let startX = Math.round(GetX(document.querySelector(tower)));
  let startY = Math.round(GetY(document.querySelector(tower)));
  let Y = Math.round(GetY(document.querySelector("#tag")));
  let X = Math.round(GetX(document.querySelector("#tag")));
  let r = 1000;
  if (MaxRange < range(X, startX, Y, startY)) {
    for (let index = 0; index < IdEnemy.length; index++) {
      Y = Math.round(GetY(document.querySelector(`#e${IdEnemy[index]}`)));
      X = Math.round(GetX(document.querySelector(`#e${IdEnemy[index]}`)));
      r = range(X, startX, Y, startY)
      console.log(X)
      if (r < MaxRange) {
        break
      }
    }
    if (r > MaxRange) {
      return 0;
    }
  }

  let Xenemy = (X - startX);
  let yenemy = (Y - startY);
  let koef = Math.abs(MaxRange / range(X, startX, Y, startY));
  var play = 1.3;
  let t = document.createElement('div');
  t.setAttribute("id", "bullet" + index);
  t.setAttribute("class", "bullet");
  t.setAttribute("style", "left:" + startX + "px; top:" + startY + "px; animation:bullet" + index + ` ${play}s cubic-bezier(0.21, 0.33, 0.83, 1.09)`);
  document.body.prepend(t);
  var el = document.querySelector(':root');
  el.style.cssText = "--PosiEnd:" + Xenemy + "px; --PosiStart:0px EndPosiEnemyY:100px;";

  listbullet.push(index)
  var sss = `@keyframes bullet${index} { 0% { transform:translateX(0px) translateY(0px) scale(1) rotate(0deg); } 100%{ transform: translateX(calc(${Xenemy * koef}px)) translateY(calc(${yenemy * koef}px)) scale(1) rotate(0deg);}}`
  addAnimation(sss);
  t.addEventListener("animationend", () => { t.remove(), listbullet.splice(t.id, 1) });
}
function contact() {                         //СОПРИКОСНОВЕНИЕ
  var sds;
  var sd;
  for (var ine = 0; ine < IdEnemy.length; ine++) {
    let enemy = document.getElementById(`e${IdEnemy[ine]}`).getBoundingClientRect()

    for (let index = 0; index < listbullet.length; index++) {
      let bullet = document.getElementById(`bullet${listbullet[index]}`).getBoundingClientRect()
      sd = bullet.right - bullet.left;
      sds = bullet.bottom - bullet.top;

      if (bullet.left + sd > enemy.left &&
        bullet.right + sd < enemy.right &&
        bullet.top + sds > enemy.top &&
        bullet.bottom < enemy.bottom + sds
        || range(enemy.right - (enemy.right - enemy.left) / 2,
          bullet.right - sd / 2,
          enemy.bottom - (enemy.bottom - enemy.top) / 2,
          bullet.bottom - sds / 2) < 30) {
        let hp = document.getElementById(`e${IdEnemy[ine]}`).firstChild

        hp.innerHTML -= bulletdmg;
        
        if (hp.innerHTML <= 0) {
          document.getElementById(`bullet${listbullet[index]}`).remove();
          document.getElementById(`e${IdEnemy[ine]}`).remove()
          IdEnemy.splice(ine, 1);
          listbullet.splice(index, 1);
          WinCount = WinCount + Math.floor(Math.random() * (6 - 1 + 1)) + 1
          TacticsCoin++;
        }
        else {
          document.getElementById(`bullet${listbullet[index]}`).remove();
          listbullet.splice(index, 1);
        }

      }
    }
  }
}
let dynamicStyles = null;
function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}
var xe;
var ye;
var inia = 0;
function bild() {
  let cost = document.getElementById('cost1').innerHTML;
  if (onbild) {
    let tower = document.createElement('div');
    tower.setAttribute('class', 'tower');
    tower.setAttribute('id', `tower${inia}`);
    tower.style.top = ye - 25 + `px`;
    tower.style.left = xe - 25 + 'px';
    tower.style.zIndex = 10;
    document.body.prepend(tower);
    let tupo = "#tower" + inia;
    setInterval(() => create(tupo), cdtower);
    inia = inia + 1;
    onbild = false;
    TacticsCoin -= cost;
    document.getElementById('bildzone').style.opacity = .0;
  }

}
function Onbild() {
  cost = document.getElementById('cost1').innerHTML;
  console.log(onbild)
  if (TacticsCoin >= cost) {
    onbild = true
    document.getElementById('bildzone').style.opacity = .1;
  }
}
function ultimate() {
  let Y = Math.round(GetY(document.querySelector("#tag")));
  let X = Math.round(GetX(document.querySelector("#tag")));
  let ultimate = document.createElement(`div`)
  ultimate.setAttribute('id', 'ultimate');
  ultimate.addEventListener();

}
