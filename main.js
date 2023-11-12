//mostrare cinque numeri casuali
//creare un ciclo x 5 con funzione di generatore numeri random
//stampare i numeri in pagina 
//far partire un timer di 30 secondi 
//allo scadere far apparire un prompt che chiede numeri visualizzati
//confrontare i numeri caricati con quelli forniti all'inizio 
//stampare il risultato dei  numeri azzeccati
const welcomeMsg = prompt("BENVENUTI! verrano mostrati 5 numeri per 30 sec. allo scadere vi verrà chgiesto di riscriverli. clicca 'OK' e accedere")
const cpuRndNumber = [];
for (let i = 0; i < 5 ; i++) {
   let recallGetRndInteger = getRndInteger(1 , 99)  
   cpuRndNumber.push(recallGetRndInteger) ;
}
console.log(cpuRndNumber)
document.getElementById("printedNumbers").innerHTML = cpuRndNumber.join(" ");
//TIMER
setTimeout(function() {hideNumb()}, 3*1000);
setTimeout(function() {
    let recallGetUserNumbers = getUserNumbers();
    let numeriindovinati = getOkNumbers(cpuRndNumber , recallGetUserNumbers );
    alert("Hai indovinato " + numeriindovinati.length + " numeri");
    alert("I numeri che hai indovinato sono: " + numeriindovinati.join(", ") );},
     5*1000);
//setTimeout(function() {getOkNumbers(cpuRndNumber , recallGetUserNumbers)()}, 20*1000);
//prompt di richiesta cinque numeri visti 
function getUserNumbers() {
    let yrNumbers = [];
    while (yrNumbers.length<5) {
        let prossimoNumero = parseInt(prompt("inserisci numero successivo"));
        if(!yrNumbers.includes(prossimoNumero)){
            yrNumbers.push(prossimoNumero);          
        }else{
            alert("non puoi usare doppioni")
        }
    }
    console.log(yrNumbers);
    return yrNumbers;    
}


//let = getOkNumbers(cpuRndNumber , recallGetUserNumbers);
//arrayoriginale=cpuRndNumber _____ arrayDaConfrontare=yrNumbers
//funzione per paragonare i numeri
function getOkNumbers(arrayOriginale, arrayDaConfrontare){
    //creo un array in cui scrivo i numeri finali azzeccati
    let finalArray = [];
    //confronto i dati per ogni array==>ciclo
    for (let i = 0; i < arrayOriginale.length; i++) {
        if (arrayOriginale[i] == arrayDaConfrontare[i]){
            finalArray.push(arrayDaConfrontare[i]);
        }              
    } 
    return finalArray;
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
