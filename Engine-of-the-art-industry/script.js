// var menu = document.getElementById("menu");
// function FancMenu(){
//     console.log(menu);
// }

// var oo = document.getElementById('pp');
// var ooo = document.querySelector('#pp')
// var statee = 'yes';
// var kkk = 0;

// $(document).ready(function () {
//     $("form").on('submit', function (event) {
//         event.preventDefault();
//         $.post("/server.php", $(this).serialize(), function (data) {

//             if (data != 1) {
//                 $("form").html(data);
//             }
//             else {
//                 console.log("error224")
//                 }
//             }

//         );
//     });
// });
function randomAnime(){
    var a = Math.floor(Math.random()*(30-0)+0);
    // location.replace("http://engine-of-the-art-industry/Anime.php?a="+a);
    location.replace("http://engine-of-the-art-industry/Anime.php?a="+a)
}