let numeroSecreto = 0
let contador = 1
let min = 0
let max = 10
let situacao = ''

let inputNumero = document.querySelector('#inputNumero')  
let btnChutar   = document.querySelector('#btnChutar') 
let aviso       = document.querySelector('#aviso')    

function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
}

function validarNumeroDigitado(numero) {
    if(numero <= 0 || numero > 10) {
        console.log('Número inválido!')
        aviso.classList.add('Vc errou')
        mensagemRapida('Você não está digitando um número entre 0 e 10.')
        bloquearBtnChutar()
        inputNumero.value = ''
    } else {
        console.log('Número válido')
    }
}

function jogar() {
    console.log("Jogando")
    verificarSeAcertou()
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {

        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era ' + numeroSecreto)
        break

        case 'Chute maior':
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')
        break

        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto')
        break

        default:
            console.log('Informe a situação')

    }
}

function verificarSeAcertou() {
    chute = parseInt(document.querySelector('#inputNumero').value)
    
    console.log('Nº do Chute ' + contador)
    console.log('Chute ' + chute)
    
    if(numeroSecreto === chute) {
        console.log('Acertou')
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto()
    } else if (chute > numeroSecreto) {
        console.log('Chute maior')
        situacao = 'Chute maior'
        gameOver(situacao)
    } else if (chute < numeroSecreto) {
        console.log('Chute menor')
        situacao = 'Chute menor'
        gameOver(situacao)
    } else {
        console.log('Impossível verificar se acertou!')
    }

}