function adicionarGame() {
  let gamesNovos = document.getElementById("newGame").value;
  if (gamesNovos.endsWith(".jpg")) {
    listarGamesNaTela(gamesNovos);
  } else {
      console.error("URL inválida")
  }
  document.getElementById("newGame").value = "";
}

function listarGamesNaTela(gamesNovos) {
    let elementoGamesNovos = "<img src=" + gamesNovos + ">";
    let elementoListaGames = document.getElementById("listaGames");
    elementoListaGames.innerHTML =
      elementoListaGames.innerHTML + elementoGamesNovos;
}
/* let listaFilmes = [
    "https://static.chollometro.com/threads/raw/HffoQ/747794_1/re/1024x1024/qt/60/747794_1.jpg",
    "https://s3.gaming-cdn.com/images/products/7325/orig/god-of-war-pc-jogo-steam-cover.jpg",
    "https://s1.gaming-cdn.com/images/products/5913/orig/final-fantasy-vii-remake-intergrade-remake-edition-pc-jogo-epic-games-cover.jpg",
    "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png"
  ];
  
  let addFilmes = [];

  for (var i = 0; i < addFilmes.length; i++) {
    document.write("<img src=" + addFilmes[i] + ">");
  }


console.log(addFilmes); */
