// var nema = [[5,2,3],[5,2,5],[5,2,3]];
// for (let index = 0; index < nema.length; index++) {
//     for (let t = 0; t < nema.length; t++) {
//         // alert(nema[index,t]);
        
//     }
    
// }


function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число");
  
     
      
  
      numbers.push(+value);
      if (value == "" ){ break};
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  alert( sumInput() );
// "use strict";
// window.onload=function(){
//     window.scrollTo(0,document.body.scrollHeight);
// }
//document.getElementById("text").innerText = "dd"
// var myanime = "whst";
// for (let i = 0; i < 5; i++) 
// {
//     document.write(myanime);
// }
// function login() {
//     if (document.getElementById("nameIF").value == "Admin") {
//         let pwd = document.getElementById("pwdIF").value
//         if (pwd == "Admin") {
//             alert('АВторизация')
//             // var input = document.getElementById("imgIF");
//             // var fReader = new FileReader();
//             // fReader.readAsDataURL(input.files[0]);
//             // fReader.onloadend = function(event){
//             //     document.getElementById("avatar").src = event.target.result;
//             // }
//             // document.getElementById("Autorisation").hidden = true;
//             // document.getElementById("Welcome").hidden = false;
//         }
//         else if (pwd == "Cancel") {
//             document.getElementById("Autorisation").hidden = true;
//             document.getElementById("Canceled").hidden = false;
//         }
//         else {
//             document.getElementById("Autorisation").hidden = true;
//             document.getElementById("F*ck you").hidden = false;
//         }
//     }
//     else if (document.getElementById("nameIF").value == "Cancel") {
//         document.getElementById("Autorisation").hidden = true;
//         document.getElementById("Canceled").hidden = false;
//     }
//     else {
//         document.getElementById("Autorisation").hidden = true;
//         document.getElementById("Wrong name").hidden = false;
//     }
// }