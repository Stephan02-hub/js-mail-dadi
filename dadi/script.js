const numeri = [1,2,3,4,5,6];

let giocatore = Math.floor(Math.random() * 7);
alert(giocatore)
let computer = Math.floor(Math.random() * 7);
alert(computer)

if (giocatore > computer){
    alert("giocatore vince")
} else if (computer > giocatore){
    alert("computer vince")
} else {(giocatore === computer)
    alert("pareggio")
}
