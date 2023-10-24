var oo = document.getElementById('pp');
var ooo = document.querySelector('#pp')
var statee = 'yes';
var kkk = 0;

$(document).ready(function () {
    $("form").on('submit', function (event) {
        event.preventDefault();
        $.post("/php.php", $(this).serialize(), function (data) {
            
            if (data != 1) {
                $("form").html(data);
            }
            else {
                if (statee == 'yes') {
                    
                    oo.style.animationPlayState = 'running';
                    statee = "no";
                    console.log(statee);
                    oo.addEventListener("animationiteration", () => {
                        oo.style.animationPlayState = 'paused';
                        console.log('animation has');
                      });
                    setTimeout(() => {statee = 'yes'}, 1200);
                }
            }
            
            
        }
        );
    });
});

oo.addEventListener("animationstart", () => {
    console.log('animation has');
});

oo.addEventListener("animationend", () => {
    console.log('animation has ended');
  });

  oo.addEventListener("animationcancel", () => {
    console.log('animation was cancelled');
  });
  oo.addEventListener("animationiteration", () => {
    kkk++;
    console.log(kkk);
    switch (kkk) {
        case 5:
            console.log('оч много не правильных ответов');
            break;
        case 100:
            console.log('оч  оч много не правильных ответов');
            break;
    
        case 150:
            console.log(' оч оч оч много не правильных ответов');
            break;
    
        default:
            break;
    }
    if(kkk == 5){ console.log('оч много не правильных ответов');}
    if(kkk == 100){ console.log('оч оч много не правильных ответов');}
    if(kkk == 150){ console.log('оч оч оч много не правильных ответов');}
  });
  
  
var o;
o = document.getElementById('p');
var state = 'yes';
function secret() {

    if (state == 'yes') {
        o.innerHTML = document.getElementById("lol").value;
        o.style.animationPlayState = "running";
        state = "no";
        o.addEventListener("animationiteration", () => {
            o.style.animationPlayState = 'paused';
            console.log('5646 ');
          });
        setTimeout(() => {state = 'yes'}, 2000)
    }
    else { return }
};
