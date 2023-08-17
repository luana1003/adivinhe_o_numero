var palpites = document.querySelector('.palpites');
var numRandom = Math.floor(Math.random() * 100) + 1;
var ultimoResultado = document.querySelector('.ultimo__resultado');
var proximidadePalpite = document.querySelector('.proximidade__palpite');
var enviarPalpite = document.querySelector('.enviar__palpite');
var palpiteDigitado = document.querySelector('.palpite__digitado');
var quantPalpites = 1;
var botaoReiniciar;

function verificarPalpite() {
  var palpiteUsuario = Number(palpiteDigitado.value);
  if (quantPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }

  palpites.textContent += palpiteUsuario + ' ';

  if (palpiteUsuario === numRandom) {
    ultimoResultado.textContent = 'Parabéns! Você acertou o número!';
    ultimoResultado.style.color = 'green';
    ultimoResultado.style.backgroundColor = 'transparent';
    proximidadePalpite.textContent = '';
    declararFimDeJogo();
  } else if (quantPalpites === 10) {
    ultimoResultado.textContent = '!!!GAME OVER!!!';
    ultimoResultado.style.textAlign = 'center';
    ultimoResultado.style.fontSize = '24px';
    ultimoResultado.color = 'yellow';
    proximidadePalpite.textContent = '';
    declararFimDeJogo();
  } else {
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.color = 'yellow';
    ultimoResultado.style.textAlign = 'center';
    ultimoResultado.style.backgroundColor = 'transparent';
    if(palpiteUsuario < numRandom) {
      proximidadePalpite.textContent='Seu palpite está muito baixo!' ;
    } else if(palpiteUsuario > numRandom) {
      proximidadePalpite.textContent = 'Seu palpite está muito alto!';
    }
  }

  quantPalpites++;
  palpiteDigitado.value = '';
}

enviarPalpite.addEventListener('click', verificarPalpite);

function declararFimDeJogo() {
  palpiteDigitado.disabled = true;
  enviarPalpite.disabled = true;
  botaoReiniciar = document.createElement('button');
  botaoReiniciar.textContent = 'Reiniciar jogo';
  document.getElementById('fundo').appendChild(botaoReiniciar);
  botaoReiniciar.addEventListener('click', limparResultados);
  botaoReiniciar.style.backgroundColor = 'transparent';
  botaoReiniciar.style.color = 'white';
  botaoReiniciar.style.border = '2px solid white';
  botaoReiniciar.style.borderRadius = '50px';
  botaoReiniciar.style.padding = '10px';
}

function limparResultados() {
  quantPalpites = 1;
  var resultados = document.querySelectorAll('.resultados p');
  for(var i = 0 ; i < resultados.length ; i++) {
    resultados[i].textContent='';
  }

  botaoReiniciar.parentNode.removeChild(botaoReiniciar);
  palpiteDigitado.disabled = false;
  enviarPalpite.disabled = false;
  palpiteDigitado.value='';
  palpiteDigitado.focus();
  numRandom=Math.floor(Math.random() * 100) + 1;
}