console.log('213')
$(document).ready(function () {
    $("form").on('submit', function (event) {
        event.preventDefault();
        $.post("/php.php", $(this).serialize(), function (data) {
            
            if (data != 'not') {
                $("body").html(data);
            }   
            else {
                console.log('not')
            }
        }
        );
    });
});
function save()
{
    var login = document.getElementById("")
}
function regist(){
    $.post("/regist.php", {registration: "yes"}, function (data) {
            
        if (data != 'not') {
            $("body").html(data);
        }   
        else {
            console.log('not')
        }
    })
}

var fullscreen;
var fsEnter = document.getElementById('fullscr');

fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        } else {
        fullscreen = false;
        document.exitFullscreen();
    }
});
document.addEventListener("fullscreenchange", function() { 
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        fullscreen = true;
       
        } else {
        fullscreen = false;
    }
});    
