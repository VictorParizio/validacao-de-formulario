const textInput = document.querySelectorAll('.campo')
const obrigatorio = document.querySelectorAll('span')
const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    textInput.forEach(function (item, indice) {
        if (item.value !== '') {
            item.classList.add('valido')
            item.classList.remove('invalido')
            obrigatorio[indice].classList.remove('obrigatorio')

        } else if (item.value === '') {
            item.classList.add('invalido')
            item.classList.remove('valido')
            obrigatorio[indice].classList.add('obrigatorio')
        }
    })
})