
function main(){
  let email = document.getElementById("email").value  
    Email.send({
        SecureToken: "27a206f7-959a-4222-96ec-200e779f8817  ",
        Host : "smtp.elasticemail.com",
        Username : "rafaellofrich@gmail.com",
        Password : "66758D51A2F31A46E0C77DF15250368D0224",
        To : email,
        From : "rafaellofrich@gmail.com",
        Subject : "tyd",
        Body : '123456789012345678'
    }).then(
      message => alert(message)
    )
    

}