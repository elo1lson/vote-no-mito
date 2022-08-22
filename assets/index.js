let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let buttonsGrid = document.querySelector('.buttons-grid')
let numberField = document.querySelectorAll('.number-mito')

let first = true
let firstNumber
let secondNumber
const yourVote = document.querySelector('.your-vote')
yourVote.style.display = 'none'

function createButton(element) {
    let createdButton = document.createElement('button', element)
    createdButton.classList.add('buttonn')
    createdButton.innerHTML = element
    buttonsGrid.appendChild(createdButton)

    createdButton.addEventListener('click', checkNumber)
    return createButton
}
let mitoPfp = document.querySelector('.mito-pfp')
mitoPfp.style.display = 'none'
let corrige = document.querySelector('.corrige').addEventListener('click', Corrige)
let confirma = document.querySelector('.confirma').addEventListener('click', Confirma)
let dataList = document.querySelectorAll('.data-list')
let nome = document.querySelector('.nome')
let partido = document.querySelector('.partido')
let vice = document.querySelector('.vice')


function Corrige() {
    console.log(typeof numberField[1].innerHTML);
    if (!firstNumber) return
    if (secondNumber) {
        first = true
        secondNumber = false
        return numberField[1].innerHTML = ''
    }
    if (firstNumber) {
        first = true
        secondNumber = false
        return numberField[0].innerHTML = ''
    }

}
function Confirma() {
    if (firstNumber && secondNumber) {
        if (numberField[0].innerHTML == 2 && numberField[1].innerHTML == 2) {
            for (let index = 0; index < dataList.length; index++) {
                mitoPfp.style.display = 'block'
                dataList[index].style.display = 'block';
                nome.innerHTML = 'Jair Messia Mito Bolsonaro'
                partido.innerHTML = 'PL'
                vice.innerHTML = 'Walter Souza Braga Netto '
                console.log(4);

            }
        }

    } else {
        alert(777777)
    }

}
function checkNumber() {
    if (first) {
        numberField[0].innerHTML = this.innerHTML
        first = false
        firstNumber = true
        return

    }
    numberField[1].innerHTML = this.innerHTML
    secondNumber = true
    return


}
array.forEach(element => {
    createButton(element)
});