function checkPassword(){
    let password = document.getElementById("Password").value;
    let ConformPassword = document.getElementById("Conform-Password").value;
    console.log(password, ConformPassword);
    let message = document.getElementById("message");
    if(password.length!=0){
        if(password == ConformPassword){
            message.textContent = "Successfull"
            message.style.background = "#3ae374";

        }else{
            message.textContent = "Pasword don't match";
            message.style.fontSize = "20px"
            // message.textContent.style.length = "20px"
            message.style.background = "#ff4d4d";
        }
    }
}