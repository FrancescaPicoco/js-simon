//mostrare cinque numeri casuali
//creare un ciclo x 5 con funzione di generatore numeri random
//stampare i numeri in pagina 
//far partire un timer di 30 secondi 
//allo scadere far apparire un prompt che chiede numeri visualizzati
//confrontare i numeri caricati con quelli forniti all'inizio 
//stampare il risultato dei  numeri azzeccati
const welcomeMsg = prompt("BENVENUTI! verrano mostrati 5 numeri per 30 sec. allo scadere vi verrà chgiesto di riscriverli. clicca 'OK' e accedere")
let cpuRndNumber = [];
for (let i = 0; i < 5 ; i++) {
   let recallGetRndInteger = getRndInteger(1 , 99)  
   cpuRndNumber.push(recallGetRndInteger) ;
}
console.log(cpuRndNumber)
document.getElementById("printedNumbers").innerHTML = cpuRndNumber.join(" ");
//TIMER
setTimeout(function() {hideNumb()}, 3*1000);
setTimeout(function() {getUserNumbers()}, 5*1000);
//prompt di richiesta cinque numeri visti 
function getUserNumbers() {
    let yrNumbers = [];
    while (yrNumbers.length<5) {
        let prossimoNumero = parseInt(prompt("inserisci numero successivo"));
        console.log(valueHumanNumber);
        if(!yrNumbers.includes(prossimoNumero)){
            yrNumbers.push(prossimoNumero);          
        }else{
            alert("non puoi usare doppioni")
        }
    }
    console.log(yrNumbers);
    return yrNumbers;    
}
const recallGetUserNumbers = getOkNumbers();
const numeriCorrispondenza = getOkNumbers(cpuRndNumber , recallGetUserNumbers)
//funzione per paragonare i numeri
function getOkNumbers(arrayOriginale, arrayDaConfrontare){

    //array di appoggio con i risultati
    let risultato = [];

    //per ogni elemento dell'array originale, controllo che ci sia corrispondenza nell'altro array
    for (let i = 0; i < arrayOriginale.length; i++) {
        if( arrayDaConfrontare.includes(arrayOriginale[i])) {
            risultato.push(arrayOriginale[i]);
        }
    }
    return risultato;
}

//funzione genera numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//funzione per nascondere i numeri
function hideNumb() {
    document.getElementById("printedNumbers").innerHTML = "";
} 
/*unction findMatches( , arrayHuma) {
    if(a)
    
}*/
