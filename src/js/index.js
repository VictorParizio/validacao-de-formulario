const textInput = document.querySelectorAll('input, textarea')
const obrigatorio = document.querySelectorAll('span')
const enviar = document.getElementById('enviar')


enviar.addEventListener('click', () => {
    textInput.forEach(function (item) {
        if (item.value !== '') {
            item.classList.remove('invalido')
            item.classList.add('valido')
        } else if (item.value === '') {
            item.classList.add('invalido')
            item.classList.remove('valido')
        }
    })

    if(textInput[0].classList.contains('invalido')){
        obrigatorio[0].classList.add('obrigatorio')
    } else {
        obrigatorio[0].classList.remove('obrigatorio')
    }

    if(textInput[1].classList.contains('invalido')){
        obrigatorio[1].classList.add('obrigatorio')
    } else {
        obrigatorio[1].classList.remove('obrigatorio')
    }

    if(textInput[2].classList.contains('invalido')){
        obrigatorio[2].classList.add('obrigatorio')
    } else {
        obrigatorio[2].classList.remove('obrigatorio')
    }

    if(textInput[3].classList.contains('invalido')){
        obrigatorio[3].classList.add('obrigatorio')
    } else {
        obrigatorio[3].classList.remove('obrigatorio')
    }
})