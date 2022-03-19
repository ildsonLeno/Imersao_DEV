var Criss = {
  Personagem:
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZ_Q653gyTfxbfo0-kHTlRBmwxwAp5TJ5Ww&usqp=CAU">',
  nome: "Criss",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

var Leno = {
  Personagem:
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoJ8HgzeC2YSvSpGGfjtYkCzRydLos5gK7A&usqp=CAU">',
  nome: "Leno",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

var Isaac = {
  Personagem:
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxjIgakN9xpAsJC_FzI9NRzofebiwmn_5mJCpmzFjFXOF__GhFr3VziXY5-y74VG5GYo&usqp=CAU">',
  nome: "Isaac",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

Criss.pontos = calculaPontos(Criss);
Leno.pontos = calculaPontos(Leno);
Isaac.pontos = calculaPontos(Isaac);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas;
  return pontos;
}

var jogadores = [Criss, Leno, Isaac];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].Personagem + "</td>";
    html += "<td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";

    html +=
      " <td><button onClick='adicionarVitoria( " +
      i +
      ")'>Vitória</button></td>";
    html +=
      " <td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      " <td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
  }
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function reiniciar(i) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibirJogadoresNaTela(jogadores);
}
