function getCoords(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
    var box = elem.getBoundingClientRect();
    return {
        top: box.top ,
        left: box.left  ,
        right: box.right ,
        bottom: box.bottom
    };
}
function GetStartY(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
    var box = elem.getBoundingClientRect();
    return box.top;
}
function GetStartX(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
    var box = elem.getBoundingClientRect();
    return box.left;
}
function GetStartXX(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
    var box = elem.getBoundingClientRect();
    return box.right;
}






// function EnemycordX(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
//     var box = elem.getBoundingClientRect();
//     return box.left;
// }
// function EnemycordY(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    
//     var box = elem.getBoundingClientRect();
//     return box.top;
// }

// let main = document.getElementById("main");

// if (event.code == "KeyD") {
//     left_main -= speed;
//     main.style.left = left_main + "px";
//     let first = document.getElementById('unit');
//     let second = document.getElementsByClassName('stoneBox');
//     for (i = 0; i < second.length; i++){
//         let sr = getCoords(second[i]).right; //Получаем координаты правой стороны блока
//         let sl = getCoords(second[i]).left; // Получаем координаты левой стороны блока
//         let f = getCoords(first).right; // Получаем координаты правой стороны юнита
//         let fl = getCoords(first).left; // Получаем координаты левой стороны юнита (При движении вправо на не нужны)
//         if (f > sl && f < sr){ // Если правая сторона юнита находится между левой и правой стороны блока, то выводим сообщение "остановись" (Это для наглядности, в Вашем случае либо выполняем действие либо нет)
//             console.log('остановись!!!');
//         } else {
//             console.log('можно двигаться');
//         }
//     }
// }

// if(event.code == "KeyW"){
//     bottom_main -= jump;
//     main.style.bottom = bottom_main + "px";
//     if(left_main <= -400 && left_main >= -450 ){}else{
//         bottom_main += jump;
//         setTimeout(' main.style.bottom = bottom_main + "px" ', 200);
//     }
// }

// if(event.code == "KeyQ"){alert(left_main , bottom_main);}


// if (event.code == "KeyA") {
//     left_main += speed;
//     main.style.left = left_main + "px";  

// }   


//let CuretStart = setInterval(() => console.log(getCoords(document.querySelector("#bullet1"))),20)

function range(xa,xb,ya,yb)
{
   return Math.sqrt(Math.pow((xb-xa),2)+ Math.pow((yb - ya),2));
}


let ty4 = setInterval(() => fun1(),500);
let ty = setInterval(() => create(),1300);
let ty2 = setInterval(() => enemiest(),7000);
// let ty3 = setInterval(() => clean(),1000);
// let CuretStart = setInterval(() => GetStartX(document.querySelector("#tower1")),200)
// console.log(document.body.id)
let IndexEnemy = 0;
// function fokus(){
//   let X = Math.round(GetStartX(document.querySelector("#e")));
//   let y = Math.round(GetStartX(document.querySelector("#e")));
// }
var IdEnemy = new Array();
var IDDelite = new Array();
function enemiest()
  {
   
    let enemy = document.createElement('div');
    enemy.setAttribute("class", "enemy");
    enemy.setAttribute("id",`#e${IndexEnemy}`);
    document.body.prepend(enemy);
    
    IdEnemy.push(IndexEnemy);
    IndexEnemy++;
  }
  
var index = 0;
function clean(){
  for (let indexx = 0; indexx < IdEnemy.length; indexx++) {
   
    if(GetStartX(document.getElementById(`#e${IdEnemy[indexx]}`)) <= -30){
      IDDelite.push(IdEnemy[indexx]);
      console.log(IDDelite);
      console.log(IdEnemy);
      document.getElementById(`#e${IdEnemy[indexx]}`).remove();
      IdEnemy.splice(index);
    }
  }
  // for (let index = 0; index < IDDelite.length; index++) {
  //   let le = document.getElementById(`#e${IDDelite[index]}`);
  //   console.log("444")
  //   // console.log(le);
  //   // console.log(IDDelite[index]);
  //   // console.log(IDDelite.length);
  //   le.remove();
  //   IdEnemy.splice(index);
    
  // }
  // IDDelite = [];
}


function fun1() {
  var rng = document.getElementById('pol'); //полунок
 
  // document.querySelector("h1")
  let lo = document.querySelector('#k2'); //text 
  lo.style.fontSize = rng.value + "px"; //css
}





function create(){
index++;
var startX = Math.round(GetStartX(document.querySelector("#tower1")));
var startY = Math.round(GetStartY(document.querySelector("#tower1")));
var Y = Math.round(GetStartY(document.querySelector("#tag")));
var X = Math.round(GetStartX(document.querySelector("#tag")));
var MaxRange = 800;
var Xenemy = (X - startX);
var yenemy = (Y - startY);
var koef= Math.abs(MaxRange / range(X,startX,Y,startY));
if(koef <1){return}
var play = 1.3;
var t = document.createElement('div');
t.setAttribute("id","bullet" + index);
t.setAttribute("class", "bullet");
t.setAttribute("style", "left:"+ startX + "px; top:" + startY +"px; animation:bullet"+ index +` ${play}s cubic-bezier(1, 0, 0, 1)` );
document.body.prepend(t);  
var el = document.querySelector(':root');
el.style.cssText  = "--PosiEnd:"+Xenemy+"px; --PosiStart:0px EndPosiEnemyY:100px;";
console.log();
console.log();
// console.log(startX);
// console.log(startY);
// console.log(range(X,startX,Y,startY));  
// console.log('koef ',koef)

var sss = `@keyframes bullet${index} { 0% { transform:translateX(0px) translateY(0px) scale(1) rotate(-100deg); } 100%{ transform: translateX(calc(${Xenemy*koef}px)) translateY(calc(${yenemy*koef}px)) scale(1) rotate(100deg);}}`
addAnimation(sss);
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


addAnimation(`
      @keyframes move-eye { 
         from {
           margin-left: -20%;
         }
        to {
          margin-left: 100%;
        }
      }
    `);


var element = document.createElement("div");
element.className = "cylon-eye";
element.style.height = "50px";
element.style.width = "50px";
element.style.backgroundImage = "linear-gradient(to right,rgba(255, 0, 0, 0.1) 25%,rgba(255, 0, 0) 50%,rgba(255, 0, 0, 0.1) 75%)";
element.style.animation = "4s linear 0s infinite alternate move-eye";

document.body.appendChild(element);