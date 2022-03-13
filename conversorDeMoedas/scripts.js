let valorDigitado = document.querySelector('#valorEmReal')
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')
let aviso = document.querySelector('#aviso')

let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')

let valorDoDolar   = 5.0500000
let valorDoEuro    = 5.5400000
let valorDoBitcoin = 229762.85
let valorEmReal    = 0.0000000

let moedaEstrangeira = ''
let moedaConvertida  = 0.0000000

function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

btnConverter.addEventListener('click', function() {

    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break
    
        default:
            aviso.textContent = 'Qual o Valor?'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})