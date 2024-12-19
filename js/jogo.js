    //declaraçao das variaveis globais
    let desempenho = 0;
let tentativas = 0;
let acertos = 0;
let jogar = true;

const btnReiniciar = document.getElementById('reiniciar');
const btnJogarNovamente = document.getElementById('joganovamente');

function reiniciar() {
  desempenho = 0;
  tentativas = 0;
  acertos = 0;
  jogar = true;
  jogarNovamente();
  atualizaPlacar(0, 0);
  btnJogarNovamente.className = 'visivel';
  btnReiniciar.className = 'invisivel';
}

function jogarNovamente() {
  jogar = true;
  let divis = document.getElementsByTagName("div");
  for (let i = 0; i < divis.length; i++) {
    if (divis[i].id == 0 || divis[i].id == 1 || divis[i].id == 2 || divis[i].id == 3) {
      divis[i].className = "inicial";
      const img = divis[i].querySelector('img');
      if (img) {
        img.remove(); // Remove any existing images
      }
    }
  }
}

function atualizaPlacar(acertos, tentativas) {
  desempenho = (acertos / tentativas) * 100;
  document.getElementById("resposta").innerHTML = "Placar - Acertos: " + acertos + " Tentativas: " + tentativas + " Desempenho: " + Math.round(desempenho) + "%";
}

function acertou(obj) {
  obj.className = "acertou";
  const img = new Image(100);
  img.id = "imagem";
  img.src = "https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg";
  obj.appendChild(img);
}

function errou(obj) {
  obj.className = "errou";
  const img = new Image(100);
  img.id = "imagem";
  img.src = "https://images.uncyc.org/pt/9/9d/Errou%21.gif"; // Imagem de erro
  obj.appendChild(img);
}

function verifica(obj) {
  if (jogar) {
    jogar = false;
    tentativas++;
    if (tentativas == 3) {
      btnJogarNovamente.className = 'invisivel';
      btnReiniciar.className = 'visivel';
    }
    let sorteado = Math.floor(Math.random() * 4);
    if (obj.id == sorteado) {
      acertou(obj);
      acertos++;
    } else {
      errou(obj); // Chama a função para lidar com erro
      const objSorteado = document.getElementById(sorteado);
      acertou(objSorteado);
    }
    atualizaPlacar(acertos, tentativas);
  } else {
    alert('Clique em "Jogar novamente"');
  }
}

btnJogarNovamente.addEventListener('click', jogarNovamente);
btnReiniciar.addEventListener('click', reiniciar);
