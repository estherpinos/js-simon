let numeri = document.getElementsByClassName('.number');
let play = document.getElementById('btn');

// 1.Creo array vuoto dove mettere i numeri random.

let numeriTotali=5;
let numeriIndovinati=[];


// 2.Cuando faccio click sul bottone:
document.querySelector('button').addEventListener('click', function()
{
 reset();
 let listaNumeri= generaNumeri();
 mostraNumeri(listaNumeri);
 setTimeout(function(){
 reset();

 setTimeout(function(){
  let cont=0;
  for (let i = 0; i <numeriTotali; i++) {
  let messaggio= parseInt(prompt('inserisci un numero'));
 
  if (listaNumeri.includes(messaggio)) {
    numeriIndovinati.push(messaggio);

  }
  
  
 }
 console.log(numeriIndovinati);

 document.getElementById('numeri').innerHTML=`<h1> i numeri indovinati sono ${numeriIndovinati.length} :
 </h1>`;

 for (let h = 0; h < numeriIndovinati.length; h++) {
  document.getElementById('numeri').innerHTML+=`<h1>${numeriIndovinati[h]} </h1>`;
  
 }


 console.log(numeriIndovinati);
 },500);


  


 },5000);

  

})

// FUNZIONI

function generaNumeri(){

  let listaNumeri=[];
  for (let i = 0; i < numeriTotali; i++) {
    let numeroRandom = Math.ceil(Math.random() * 100);
    listaNumeri.push(numeroRandom);
  }
  return listaNumeri;

}

function mostraNumeri(listaNumeri){
  for (let i = 0; i < listaNumeri.length; i++) {
    const element = listaNumeri[i];
    document.getElementById('numeri').innerHTML+=`<h2> ${element} </h2>`;
    
  }

}

function reset(){
  document.getElementById('numeri').innerHTML=``;
}










