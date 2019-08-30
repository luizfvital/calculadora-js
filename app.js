let container = document.getElementsByClassName('container')[0]
let input = document.getElementById('input')

let resetInput = false

container.addEventListener('click', (e) => {

    // resetar o input (display da calculadora) toda vez que algum cálculo for computado
    if (resetInput) {
        input.value = ''
        resetInput = false
    }

    // button pressionado na calculadora
    const targetId = e.target.id
    switch (targetId) {
        case 'zero':
            input.value += '0'
            break
        case 'one':
            input.value += '1'
            break
        case 'two':
            input.value += '2'
            break
        case 'three':
            input.value += '3'
            break
        case 'four':
            input.value += '4'
            break
        case 'five':
            input.value += '5'
            break
        case 'six':
            input.value += '6'
            break
        case 'seven':
            input.value += '7'
            break
        case 'eight':
            input.value += '8'
            break
        case 'nine':
            input.value += '9'
            break
        case 'point':
            input.value += '.'
            break
        case 'openParentesis':
            input.value += '('
            break
        case 'closeParentesis':
            input.value += ')'
            break
        case 'addSymbol':
            input.value += '+'
            break
        case 'subSymbol':
            input.value += '-'
            break
        case 'timesSymbol':
            input.value += '*'
            break
        case 'divideSymbol':
            input.value += '/'
            break
        case 'percent':
            input.value += '%'
            break
    }

    // button para resetar o input
    if (e.target.id === 'ac') {
        input.value = ''
    }

    if (e.target.id === 'showResultSymbol') {
        // sair da função se o input estiver vazio
        if (input.value === '') {
            return
        }
        // trocar o sinal de porcentagem para fazer o cálculo
        let result = input.value.replace(/%/, '/100')
        input.value = eval(result)

        resetInput = true
    }
});

