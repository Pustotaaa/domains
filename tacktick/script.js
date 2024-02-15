const TextHeath = document.getElementById('TextHeath');
const tag = document.getElementById('tag')
const enemysId = document.getElementsByClassName('enemy')
const bulletsId = document.getElementsByClassName('bulletid')

var IdEnemy = new Array();
var IDDelite = new Array();
var listbullet = new Array();
var playerHeath = 10;
var indexBullet = 0;
var IndexEnemy = 0;
var WinScore = 0;
var totalDmg = 0;
var totalGold = 0;
var TacticsCoin = 10;
var cdtower = 50;
var cdbullet = 1;
var bulletdmg = 1;
var enemyHp = 3;
var clickdmg = 1;
var speedbullet = 1;
var reward = 0.5;
var ChanceDubleDMG = 0;
var towerId = 0;
var click = 0;
var onbildTower1 = false;
var onbildTower2 = false;
var stopSpanEnemy = true;
var UltReady = true;
var dynamicStyles = null;
var cursorX;
var cursorY;
var stoppromp = true;
setInterval(() =>
  heath(), 1000 / 100);

var intervarEnemy =
  setInterval(() =>
    spawnEnemies(), 1000 / 0.3);

setInterval(() =>
  cleanEnemies(), 1000 / 10);

setInterval(() =>
  fokus(), 1000 / 30);

setInterval(() =>
  contact(), 1000 / 30);

setInterval(() =>
  handleReward(), 10000);

window.addEventListener("mousedown", () => {
  cursorX = event.clientX;
  cursorY = event.clientY;
});
function handleReward() {
  if (1 == Math.ceil(Math.random() * 2)) { reward += 1 }
  if (WinScore > 1000) { reward = 0 }
}
function GetY(elem) { try { return elem.getBoundingClientRect().top } catch { } }
function GetX(elem) { try { return elem.getBoundingClientRect().left } catch { } }
function range(xa, xb, ya, yb) { return Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2)) }
function heath() { TextHeath.innerHTML = playerHeath }
function speedSpawnEnemy() {
  clearInterval(intervarEnemy);
  let enemySecond = 0.3;
  enemySecond += Math.floor((WinScore / 500 * 100)) / 100;
  intervarEnemy =
    setInterval(() =>
      spawnEnemies(), Math.floor(1000 / enemySecond));
  return Math.floor(1000 / enemySecond);
};
function spawnEnemies() {
  if (stopSpanEnemy) {
    let enemy = document.createElement('div');
    let hp = document.createElement('p');
    let scale = 0.5;
    hp.setAttribute("class", "hp");
    hp.innerHTML = enemyHp;
    enemy.setAttribute("class", "enemy");
    enemy.setAttribute("id", `e${IndexEnemy}`);
    enemy.style.animationName = `animate`;
    enemy.style.animationDuration = '34s';
    enemy.style.animationComposition = 'linear'
    if (1 == (Math.ceil((Math.random()) * (3)))) {
      if (1 == (Math.ceil((Math.random()) * (4)))) {
        hp.innerHTML = enemyHp * 8;
        scale *= 2;
        enemy.style.animationName = `animata`;
        enemy.style.animationDuration = '24s';
      }
      enemyHp++;
      enemyHp = enemyHp * 1 + Math.floor(WinScore / 200);
    }
    dynamicStyles = null;
    if (scale == 0.5) {
      addAnimation(`@keyframes animate {
      0%{
          transform: translateX(20px) rotate(0deg)  rotate(-130deg) scale(${scale});
          top:-30vh;
      }
      20%{
          transform: translateX(-500px) rotate(0deg) rotate(-130deg) scale(${scale});
          top:60vh;
      }
      100%{
          transform: translateX(-1900px) rotate(0deg) rotate(-130deg) scale(${scale});
          top:60vh;
      }
  
  }`)
    }
    else {
      addAnimation(`@keyframes animata {
    0%{
        transform: translateX(20px) rotate(0deg)  rotate(-130deg) scale(${scale});
        top:-30vh;
    }
    20%{
        transform: translateX(-500px) rotate(0deg) rotate(-130deg) scale(${scale});
        top:60vh;
    }
    100%{
        transform: translateX(-1900px) rotate(0deg) rotate(-130deg) scale(${scale});
        top:60vh;
    }

}`)
    }
    enemy.prepend(hp);
    enemy.addEventListener("click", () => {
      hp.innerHTML -= clickdmg;
      totalDmg += clickdmg;
      if (hp.innerHTML <= 0) {
        removeEnemy(enemy)
        WinScore = WinScore + Math.floor(Math.random() * (9 - 1 + 1)) + 1
        if (enemy.style.animationName == 'animata') { TacticsCoin += reward; totalGold += reward }
        TacticsCoin += reward;
        totalGold += reward
        enemy.style.scale = .2;
        // createParticle(enemy.getBoundingClientRect().x,enemy.getBoundingClientRect().y)
      }
    })
    enemy.addEventListener("animationend", () => {
      enemy.remove()
    });
    document.body.prepend(enemy);
    IndexEnemy++;
  }
}
function cleanEnemies() {                        // УДАЛЕНИЕ ВРАГОВ СТЕНОЙ

  for (let index = 0; index < enemysId.length; index++) {
    if (GetX(enemysId.item(index)) <= 10) {
      let le = enemysId.item(index);
      le.remove();
      --playerHeath;
      // IdEnemy.splice(index, 1);
      stopSpanEnemy = false;
      setTimeout(() => stopSpanEnemy = true, 5000)
      if (playerHeath <= 0 && stoppromp) {
        stoppromp = false;
        if (WinScore >= 0) {
          let Name = prompt('Ваше имя ');
          if (Name == null) { { location.reload(); return } }
          Name = Name.slice(0, 25)
          let xhr = new XMLHttpRequest();
          let poss = new FormData();
          poss.append(`Name`, Name);
          poss.append(`WinScore`, WinScore);
          poss.append(`totalDmg`, totalDmg);
          poss.append(`totalGold`, totalGold);
          xhr.open('post', 'php.php');
          xhr.send(poss)
        }
        // location.reload();
      }
    }
  }
  IDDelite = [];


}
var idd;
function fokus() {                          //ПРИЦЕЛ + БАР
  let time = 2000;
  let saveElement;
  let current;
  for (let index = 0; index < enemysId.length; index++) {
    current = GetX(enemysId.item(index))
    if (time > current) {
      time = current;
      saveElement = enemysId.item(index);
      idd = index;
    }
  }
  document.querySelector("#tag").style.top = GetY(saveElement) + 20 - (Math.random() * (25)) + 'px';
  document.querySelector("#tag").style.left = (time - 15 - (Math.random() * (5))) + 'px';
  document.getElementById('CountEnemy').innerHTML = `Врагов: ${enemysId.length}`
  document.getElementById('WinCount').innerHTML = `Очки: ${WinScore}`
  document.getElementById('TacticsCoin').innerHTML = `Ресурсы: ${Math.floor(TacticsCoin)}`

}
async function create(tower, bullet, MaxRange, cdbullet) {

  cdbulletspeed = cdbullet;
  if (bullet == 'lava') {
    cdbulletspeed *= 3;
  }
  if (cdbulletspeed >= (Math.ceil(Math.random() * (100)))) {                            //ПУЛИ
    indexBullet++;
    let startX = Math.round(GetX(document.querySelector(tower)));
    let startY = Math.round(GetY(document.querySelector(tower)));
    let Y = Math.round(GetY(document.querySelector("#tag")));
    let X = Math.round(GetX(document.querySelector("#tag")));
    let r = 1000;
    let rotate = 100
    let scale = 1;
    if (MaxRange < range(X, startX, Y, startY)) {
      for (let index = 0; index < enemysId.length; index++) {
        Y = Math.round(GetY(enemysId.item(index)));
        X = Math.round(GetX(enemysId.item(index))) - 20;
        r = range(X, startX, Y, startY)
        if (r < MaxRange) { break }
      }
      if (r > MaxRange) { return 0; }
    }

    let Xenemy = (X - startX);
    let yenemy = (Y - startY);
    let koef = Math.abs(MaxRange / range(X, startX, Y, startY));
    let play = Math.round(2 * speedbullet * 100) / 100;
    if (bullet == 'lava') { play = .6 * speedbullet; rotate *= 10; scale = 1.5 }
    let t = document.createElement('div');
    t.setAttribute("id", "bullet" + indexBullet);
    t.setAttribute("class", bullet + ` bulletid`);
    t.setAttribute("style", "left:" + startX + "px; top:" + startY + "px; animation:bullet" + indexBullet + ` ${play}s cubic-bezier(0.21, 0.33, 0.83, 1.09)`);
    document.body.prepend(t);


    var sss = `@keyframes bullet${indexBullet} { 0% { transform:translateX(0px) translateY(0px) scale(1) rotate(0deg); } 100%{ transform: translateX(calc(${Xenemy * koef}px)) translateY(calc(${yenemy * koef}px)) scale(${scale}) rotate(${rotate}deg);}}`
    addAnimation(sss);
    t.addEventListener("animationend", () => {
      removeBullet(t)
    });


  }
}
async function contact() {

  var sizebullet;
  for (var ine = 0; ine < enemysId.length; ine++) {
    let enemy = enemysId.item(ine)

    for (let index = 0; index < bulletsId.length; index++) {
      let bullet = bulletsId.item(index);
      sizebullet = 75;
      if (
        checkCollision(bullet, enemy, sizebullet)) {
        let hp = enemy.firstChild
        if (ChanceDubleDMG >= Math.round(Math.random() * 100)) { dmg() }
        else { dmg(); dmg(); }
        function dmg() {
          if (bullet.className == 'bullet bulletid') {
            hp.innerHTML -= bulletdmg;
            totalDmg += bulletdmg;
          }
          else {
            let hpMax = hp.innerHTML
            hp.innerHTML = Math.round(hp.innerHTML * (0.99 - (bulletdmg / 300)));
            hp.innerHTML -= 1;
            totalDmg += hpMax - hp.innerHTML;
          }
        }
        if (hp.innerHTML <= 0) {
          removeBullet(bulletsId.item(index));
          removeEnemy(enemysId.item(ine));
          WinScore += Math.floor(Math.random() * (9 - 1 + 1)) + 1;
          if (enemy.style.animationName == 'animata') { TacticsCoin += reward; totalGold += reward }
          TacticsCoin += reward;
          totalGold += reward
        }
        else {
          removeBullet(bulletsId.item(index));
        }
      }
    }
  }
}
function checkCollision(bullet, enemy, sizebullet) {
  if (enemy.style.animationName == 'animata') { sizebullet *= 1.75 }
  bullet = bullet.getBoundingClientRect()
  enemy = enemy.getBoundingClientRect()
  if (bullet.left + sizebullet > enemy.right &&
    bullet.right < enemy.left + sizebullet &&
    bullet.top + sizebullet > enemy.bottom &&
    bullet.bottom < enemy.top + sizebullet) {
    return true;
  }
  return false;



}

function removeBullet(bullet) {
  bullet.remove();
}

function removeEnemy(enemy) {
  enemy.remove();
}

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}
let dy = null
function addAnimation2(body) {
  if (!dy) {
    dy = document.createElement('style');
    dy.type = 'text/css';
    document.head.appendChild(dy);
  }
  dy.sheet.insertRule(body, dy.length);
}
function bildtower2() {
  let cost = document.getElementById('cost1');
  if (onbildTower2) {
    let tower = document.createElement('div');
    tower.setAttribute('class', 'tower2');
    tower.setAttribute('id', `tower${towerId}`);
    tower.style.top = cursorY - 25 + `px`;
    tower.style.left = cursorX - 25 + 'px';
    tower.style.zIndex = 10;
    document.body.prepend(tower);
    let tupo = "#tower" + towerId;
    let ara = setInterval(() => create(tupo, 'lava', 150, cdbullet), cdtower);
    towerId = towerId + 1;
    onbildTower2 = false;
    TacticsCoin -= cost.innerHTML;
    document.getElementById('bildzone').style.opacity = .0;
    cost.innerHTML = 30 + Number(cost.innerHTML);
  }
}
function bildtower1() {
  let cost = document.getElementById('cost2');

  if (onbildTower1) {
    let tower = document.createElement('div');
    tower.setAttribute('class', 'tower');
    tower.setAttribute('id', `tower${towerId}`);
    tower.style.top = cursorY - 25 + `px`;
    tower.style.left = cursorX - 25 + 'px';
    tower.style.zIndex = 10;
    document.body.prepend(tower);
    let tupo = "#tower" + towerId;
    setInterval(() =>
      create(tupo, 'bullet', 500, cdbullet), cdtower);

    towerId = towerId + 1;
    onbildTower1 = false;
    TacticsCoin -= cost.innerHTML;
    document.getElementById('bildzone').style.opacity = .0;
    cost.innerHTML = 10 + Number(cost.innerHTML);
  }
}
function Onbild(a) {
  if (onbildTower1 == true || onbildTower2 == true) {
    document.getElementById('bildzone').style.opacity = .0;
    onbildTower1 = false;
    onbildTower2 = false;
    return;
  }

  cost = document.getElementById(a).innerHTML;
  if (TacticsCoin >= cost && onbildTower1 == false && onbildTower2 == false) {
    switch (a) {
      case 'cost2':
        onbildTower1 = true
        break;
      case 'cost1':
        onbildTower2 = true
        break;
      default:
        break;
    }
    document.getElementById('bildzone').style.opacity = .1;
  }
}
function stats(costid) {
  let cost = document.getElementById(costid);
  if (cost.innerHTML <= TacticsCoin) {
    switch (costid) {

      case 'cost3':
        TacticsCoin -= cost.innerHTML;
        cost.innerHTML = 10 + Number(cost.innerHTML);
        bulletdmg += 1;
        break;
      case 'cost4':
        TacticsCoin -= cost.innerHTML;
        cost.innerHTML = 4 + Number(cost.innerHTML);
        clickdmg += 1;
        break;
      case 'cost5':
        if (cost.innerHTML >= 30) { return }
        TacticsCoin -= cost.innerHTML;
        cost.innerHTML = 5 + Number(cost.innerHTML);
        speedbullet *= 0.9;
        break;
      case 'cost6':
        TacticsCoin -= cost.innerHTML;
        cost.innerHTML = 6 + Number(cost.innerHTML);
        cdbullet += 2;
        break;
      case 'cost7':
        TacticsCoin -= cost.innerHTML;
        cost.innerHTML = 5 + Number(cost.innerHTML);
        ChanceDubleDMG += 2;

        break;

      default:
        break;
    }
  }
}
function ultimate() {
  let cost = document.getElementById(`cost0`)
  if (UltReady && TacticsCoin >= cost.innerHTML) {
    TacticsCoin -= Number(cost.innerHTML);
    cost.innerHTML = Math.round(WinScore / 15) + 15 + Number(cost.innerHTML);
    UltReady = false;
    let ultimate = document.createElement(`div`)
    ultimate.setAttribute('id', 'ultimate');
    document.body.prepend(ultimate)
    setTimeout(() => { UltReady = true }, 25000)
    setTimeout(() => {
      let recordCountEnemy = enemysId.length;
      for (var ine = 0; ine < recordCountEnemy; ine++) {
        removeEnemy(enemysId.item(0))
      }
      let recordCountbullet = bulletsId.length
      for (var ine = 0; ine < recordCountbullet; ine++) {
        removeBullet(bulletsId.item(0))
      }
    }, 4200)
    ultimate.addEventListener('animationend', () => {
      ultimate.remove()
    })
  }
}
setInterval(() => {
  console.log(totalDmg, totalGold, reward, speedSpawnEnemy())
}, 5000)
function analitics() {
  click += 1;
  if (click >= 2) {
    window.open("http://analytics/");
  }
  setTimeout(() => {
    click--
  }, 400)
}


// function pop (e) {
//   let amount = 30;
//   switch (e.target.dataset.type) {
//       case 'shadow':
//       case 'line':
//       amount = 60;
//       break;
//   }
//   if (e.clientX === 0 && e.clientY === 0) {
//       const bbox = e.target.getBoundingClientRect();
//       const x = bbox.left + bbox.width / 2;
//       const y = bbox.top + bbox.height / 2;
//       for (let i = 0; i < 30; i++) {
//           createParticle(x, y, e.target.dataset.type);
//       }
//       } else {
//       for (let i = 0; i < amount; i++) {
//           createParticle(e.clientX, e.clientY, e.target.dataset.type);
//       }
//   }
// }
// setInterval(createParticle(1,1),300)
// function createParticle (x, y) {
//   type = 'symbol';
//   const particle = document.createElement('particle');
//   document.body.append(particle);
//   let width = Math.floor(Math.random() * 30 + 8);
//   let height = width;
//   let destinationX = (Math.random() - 0.5) * 300;
//   let destinationY = (Math.random() - 0.5) * 300;
//   let rotation = Math.random() * 520;
//   let delay = Math.random() * 200;
//   switch (type) {
//       case 'square':
//       particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет квадратов
//       particle.style.border = '1px solid white'; // Бордюр квадратов
//       break;
//       case 'symbol':
//       particle.innerHTML = ['&#9884;','&#9731;','&#10084;','&#10052;','&#10054;','&#9733;','&#9787;'][Math.floor(Math.random() * 7)]; // Символы
//       particle.style.color = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет символов
//       particle.style.fontSize = `${Math.random() * 24 + 10}px`; // Размер символов
//       particle.style.zIndex = 20;
//       particle.style.position = "absolute"
//       width = height = 'auto';
//       break;
//       case 'logo':
//       particle.style.backgroundImage = 'url(https://atuin.ru/images/favicon.png)'; // Ссылка на картинку
//       break;
//       case 'shadow':
//       var color = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет
//       particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`; // Тень
//       particle.style.background = color;
//       particle.style.borderRadius = '50%'; // Радиус
//       width = height = Math.random() * 5 + 4; // Размеры
//       break;
//       case 'line':
//       particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет линий
//       height = 1; // Размер
//       rotation += 1000;
//       delay = Math.random() * 1000;
//       break;
//   }
//   particle.style.width = `${width}px`;
//   particle.style.height = `${height}px`;
//   const animation = particle.animate([
//       {
//           transform: `translate(${500}px, ${0}px) `,
//           opacity: 1
//       },
//       {
//           transform: ` translate(${50}px, ${-110}px)`,
//           opacity: 0
//       }
//       ], {
//       duration: Math.random() * 1000 + 5000, // Продолжительность всех эффектов
//       easing: 'cubic-bezier(0, .9, .57, 1)',
//       delay: delay
//   });
//   animation.onfinish = removeParticle;
// }
// function removeParticle (e) {
//   e.srcElement.effect.target.remove();
// }
// if (document.body.animate) {
//   document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
// }
