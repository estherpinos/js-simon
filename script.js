let numeri = document.getElementsByClassName('number');
let play = document.getElementById('btn');


const listaNumeri=[]
let numeritotai=5;

document.querySelector('button').addEventListener('click', function()
{
  generaNumeri();

})

function generaNumeri(){
  let numeriRandom= Math.ceil(Math.random() * 100);
while (listaNumeri<numeritotai) {
 let numeroRandom = Math.ceil(Math.random() * 100);
 listaNumeri.push(numeroRandom);
 console.log(listaNumeri);
 
}
return listaNumeri;

}
