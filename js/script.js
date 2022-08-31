
let casas = document.querySelectorAll('.jogo')
let resultado = document.querySelector('#resultado')
const conteiner = document.querySelector('#conteiner')
const resul = document.querySelector('#resul')

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
  e.target.innerHTML = valor 
  e.target.classList.add(valor)
  e.target.removeEventListener('click', jogada)
  checarVencedor(valor)
  
}

function checarVencedor(jogadorDaVez){
    

  const ganhador = vencedor.some((comb)=>{
    return comb.every((index)=>{
      return casas[index].classList.contains(jogadorDaVez)   
  })
})
      if(ganhador){
        resultado.style.display = 'block';
        conteiner.style.filter = 'blur(30px)';
        resul.innerHTML += `${jogadorDaVez} - Ganhou!`
        const ok = document.getElementById('ok')
        ok.addEventListener('click', teste)     
       
      }
}

function teste(){
  location.reload()
}

