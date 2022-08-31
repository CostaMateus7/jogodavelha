
let casas = document.querySelectorAll('.jogo')
let resultado = document.querySelector('#resultado')
const conteiner = document.querySelector('#conteiner')
const resul = document.querySelector('#resul')
let confereEmpate = 0
let encerrar = false

let valor = "O"
const vencedor = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
casas.forEach((casa)=>(casa.addEventListener('click', jogada)))

 function jogada(e){
  valor = valor === "X" ? "O" : "X"
  confereEmpate ++  
  e.target.innerHTML = valor 
  e.target.classList.add(valor)
  e.target.removeEventListener('click', jogada)
  checarVencedor(valor)
  setTimeout(computador,1000)
}
function computador(){
  const casasDisponiveis = []
  for (let index = 0; index < casas.length; index++){
    if(
      !casas[index].classList.contains('X') && 
      !casas[index].classList.contains('O')
    ){
      casasDisponiveis.push(casas[index])
    }
  }
  const numeroAleatorio = Math.floor(Math.random() * casasDisponiveis.length)
  valor = valor === "X" ? "O" : "X"
  confereEmpate ++  
  if(encerrar === false){
  casasDisponiveis[numeroAleatorio].innerHTML = valor 
  casasDisponiveis[numeroAleatorio].classList.add(valor)
  casasDisponiveis[numeroAleatorio].removeEventListener('click', jogada)
  checarVencedor(valor)
  }

}

function checarVencedor(jogadorDaVez){
  const ganhador = vencedor.some((comb)=>{
    return comb.every((index)=>{
      return casas[index].classList.contains(jogadorDaVez)   
  })
})
      if(ganhador){
        encerrarJogo(jogadorDaVez)
      } else if(confereEmpate == 9){
        encerrarJogo('Ninguém')
      }
}

function reiniciarJogo(){
  location.reload()
}
function encerrarJogo(ganhador_ou_empate){
  encerrar = true
  resultado.style.display = 'block';
  conteiner.style.filter = 'blur(30px)';
  resul.innerHTML += `${ganhador_ou_empate} Venceu!`
  const ok = document.getElementById('ok')
  ok.addEventListener('click', reiniciarJogo)     
}
