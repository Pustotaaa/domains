var oo = document.getElementById('pp');
var ooo = document.querySelector('#pp')
var statee = 'yes';
var kkk = 0;
var vereneno;
var vaevea;
var ver;
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
                    oo.addEventListener("animationiteration", () => {
                        oo.style.animationPlayState = 'paused';
            
                      });
                    setTimeout(() => {statee = 'yes'}, 1200);
                }
            }
            
            
        }
        );
    });
});

oo.addEventListener("animationstart", () => {
    
});

oo.addEventListener("animationend", () => {
    
  });

  oo.addEventListener("animationcancel", () => {
    
  });
  oo.addEventListener("animationiteration", () => {
    kkk++;
    switch (kkk) {
        case 1:
            vereneno = document.getElementById('text').value;
            console.log(vereneno)
            break;
        case 2:
            vaevea = document.getElementById('text').value;
            console.log(vereneno,ver)
            console.log(Math.pow(vereneno,ver))
            break;
    
        case 150:
            console.log(' оч оч оч много не правильных ответов');
            break;
    
        default:
            break;
    }
    if(kkk == 5){ ;}
    if(kkk == 100){ ;}
    if(kkk == 150){ ;}
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
           
          });
        setTimeout(() => {state = 'yes'}, 2000)
    }
    else { return }
};
