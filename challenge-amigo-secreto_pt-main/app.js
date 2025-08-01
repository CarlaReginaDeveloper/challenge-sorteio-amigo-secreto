//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
  let nomeAdicionado = document.getElementById("amigo").value;

  //Deixar os nomes em caixa alta
  nomeAdicionado = nomeAdicionado.toUpperCase();

  //Verifica se o campo para digitar o nome foi adicionado vazio, pede para digitar nome valido. Se estiver tudo certo, adiciona na lista.
  if (nomeAdicionado === "") {
    alert("Por favor, digite um nome válido.");
    
  } else if (listaDeAmigos.includes(nomeAdicionado)) {
    //Verifica se já tem um nome igual na lista e pede para o usuário digitar o sobrenome para diferenciar
    alert(
      "Atenção!!\nNome digitado já incluído. Por favor, digite outro nome.\nCaso nome seja o mesmo, digite o sobrenome: \nEX: JOAO HENRIQUE"
    );
  } else {
    listaDeAmigos.push(nomeAdicionado);

    mostrarNaTela(nomeAdicionado);
  }

  document.getElementById("amigo").value = "";
}

function mostrarNaTela(nome) {
  //Mostra na tela os nomes adicionados, acrescentando o elemento <li> no html
  let listarAmigos = document.getElementById("listaAmigos");
  let item = document.createElement("li");
  item.textContent = nome;
  listarAmigos.appendChild(item);
}

//Sorteia um indice da lista aleatoriamente...
function sortearNumeroIndice(lista) {
  let numeroIndiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[numeroIndiceAleatorio];
}

//... então mostra o nome do indice correspondente que foi sorteado
function sortearAmigo() {
  let sorteado = sortearNumeroIndice(listaDeAmigos);

  console.log(sorteado);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é ${sorteado}.</li>`;
}

//Reinicia a lista e limpa a tela
function reiniciar() {
  listaDeAmigos = [];

  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
