var carta1 = {
    nome: "Geralt of Rivia",
imagem:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/geralt_of_rivia_card.jpg",
    atributos: {
       magia : 95,
       ardiloso : 40,
       coragem :  80,
       sabedoria: 100,
       temperamento:8
    }
}

var carta2 = {
    nome: "Vesemir",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/vesemir.jpg",
    atributos: {
        magia : 88,
        ardiloso : 32,
        coragem :  70,
        sabedoria: 100,
        temperamento:5
    }
}

var carta3 = {
    nome: "Cirilla Fiona",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/cirilla_fiona_elen_riannon_card.jpg",
    atributos: {
        magia : 85,
        ardiloso : 24,
        coragem :  19,
        sabedoria: 71,
        temperamento:7 
    }
}

var carta4 = {
    nome: "Triss Merigold",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/triss_merigold_card.jpg",
    atributos: {
        magia : 60,
        ardiloso : 22,
        coragem :  9,
        sabedoria: 21,
        temperamento:18
    }
}

var carta5 = {
    nome: "Villentretenmerth",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/villentretenmerth_card.jpg",
    atributos: {
        magia : 120,
        ardiloso : 42,
        coragem :  0,
        sabedoria: 60,
        temperamento:25
    }
}

var carta6 = {
    nome: "Mysterious Elf",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/avallach_card.jpg",
    atributos: {
        magia : 12,
        ardiloso : 11,
        coragem :  30,
        sabedoria: 8,
        temperamento:7 
    }
}

var carta7 = {
    nome: "Dandelion",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/dandelion_card.jpg",
    atributos: {
        magia : 95,
        ardiloso : 19,
        coragem :  29,
        sabedoria: 76,
        temperamento:5 
    }
}

var carta8 = {
    nome: "Emiel Regis",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/emiel_regis_rohellec_terzieff.jpg",
    atributos: {
        magia : 70,
        ardiloso : 20,
        coragem :  53,
        sabedoria: 60,
        temperamento:16 
    }
  
}

var carta9 = {
    nome: "Zoltan Chivay",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/zoltan_chivay_card.jpg",
    atributos: {
        magia : 65,
        ardiloso : 25,
        coragem :  55,
        sabedoria: 20,
        temperamento:4 
    }
}

var carta10 = {
    nome: "Ghoul",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul2_card.jpg",
    atributos: {
        magia : 45,
        ardiloso : 20,
        coragem :  45,
        sabedoria: 38,
        temperamento:10
    }
}


var carta11 = {
    nome: "Crone Whispess",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/crone_whispess_card.jpg",
    atributos: {
        magia : 53,
        ardiloso : 33,
        coragem :  4,
        sabedoria: 55,
        temperamento:15
    }
}

var carta12 = {
    nome: "Griffin",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin_card.jpg",
    atributos: {
        magia : 105,
        ardiloso : 24,
        coragem :  39,
        sabedoria: 82,
        temperamento:0
    }
}


var carta13 = {
    nome: "Frightener",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/frightener_card.jpg",
    atributos: {
        magia : 80,
        ardiloso : 30,
        coragem :  40,
        sabedoria: 60,
        temperamento:8
    }
}


var carta14 = {
    nome: "Vampire Bruxa",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/vampire_bruza_card.jpg",
    atributos: {
        magia : 5,
        ardiloso : 35,
        coragem :  30,
        sabedoria: 20,
        temperamento:9
    }
}

var carta15 = {
    nome: "Arachas",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/arachas2_card.jpg",
    atributos: {
        magia : 49,
        ardiloso : 40,
        coragem :  0,
        sabedoria: 0,
        temperamento:10
    }
}

var carta16 = {
    nome: "Celaeno Harpy",
    imagem: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/celaeno_harpy_card.jpg",
    atributos: {
        magia : 70,
        ardiloso : 60,
        coragem :  30,
        sabedoria: 40,
        temperamento:20
    }
}



var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8 , carta9, carta10, carta11, carta12, carta13, carta14, carta15 , carta16]
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar ()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = " Quantidade de cartas no jogo " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar () {
  var divPlacar = document.getElementById ('placar')
  var html  = " Jogador" + pontosJogador + "/" + pontosMaquina + " Maquina"
  divPlacar.innerHTML = html 
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">VOCE VENCEU !!!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">VOCE PERDEU !!! "</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">EMPATOU !!!"</p>'
    }

   if (cartas.length == 0 ){
     alert ( "Fim de Jogo")
     if(pontosJogador > pontosMaquina){
       htmlResutado = '<p class="resultado-final">VOCE VENCEU</p>' 
     } else if ( pontosMaquina > pontosJogador) {
       htmlResutado = '<p class="resultado-final">VOCE PERDEU</p>'
     } else {
       htmlResutado = '<p class="resultado-final">VOCE EMPATOU</p>'
     }
   } else {
     document.getElementById('btnProximaRodada').disabled = false
   }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
   
  
    atualizaPlacar () 
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById ( 'cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class ="carta"></div> <div id="carta-maquina" class = "carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById ('resultado')
  divResultado.innerHTML = ""
}