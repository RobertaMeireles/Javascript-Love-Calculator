const name1 = document.querySelector('#name1')
const name2 = document.querySelector('#name2')
let showResult = document.querySelector('#infoInformation')
const showResultButton = document.querySelector('#infoInformation2') 
const mybutton = document.querySelector('#mybutton');
const mybuttonNewInfo = document.querySelector('#myButtonNewInfo');
const img = document.querySelector('#img')


// ADDEVENTLISTENER
mybutton.addEventListener('click', calculate)
mybuttonNewInfo.addEventListener('click', showNewInfo)

//FUNCTIONS
function calculate() {
    let info1 = (name1).value
    let info2 = (name2).value
    let v = Math.random()
    v = (v*100)+1
    if(info1 && info2) {
        if(v <= 50){
            img.src="img/sad.jpg"
            showResultButton.style.display = 'block'
            return showResult.innerHTML = `${info1} and ${info2} has ${Math.ceil(v)}% of chances to fall in love`
        }else{
            img.src="img/love.jpg"
            showResultButton.style.display = 'block'
            return showResult.innerHTML = `${info1} and ${info2} has ${Math.ceil(v)}% of chances to fall in love`
        }
    } else {
        return showResult.innerHTML =`Fill in with the sweetheart names`
    }
}

function showNewInfo() {
    showResultButton.style.display = 'none'
    name1.value = ""
    name2.value = ""
    showResult.innerHTML = ""
}







