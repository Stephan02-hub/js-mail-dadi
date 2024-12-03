const mail = [
    "braghesesteven@gmail.com","martinolanari@gmail.com", "gliangelivolano@gmail.com"
];

let email = prompt("metti l'email");
let flag = false;

for(let i = 0; i < mail.lenght; i++){
    if(mail[i] === email){
        flag = true;
    }
}

if(flag){
    alert("c'è l'email")
}else{
    alert("non c'è l'email")
}