// let casasX = document.querySelectorAll('.jogoX')
// let casasO = document.querySelectorAll('.jogoO')
let casas = document.querySelectorAll('.jogo')
let valor = "O"

casas.forEach((casa)=>(casa.addEventListener('click', jogada)))

function jogada(e){
  valor = valor === "X" ? "O" : "X"
 e.target.innerHTML = valor 
 e.target.removeEventListener('click', jogada)
  
}

function mudaValor(){
 
}



