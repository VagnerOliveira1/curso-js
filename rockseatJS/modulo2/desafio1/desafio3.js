var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var nomes = ["Diego", "Gabriel", "Lucas"]

function rederNomes(){
    listElement.innerHTML = ""

    for (nome of nomes){
        var nomeElement = document.createElement('li')
        var nomeText = document.createTextNode(nome)
        nomeElement.appendChild(nomeText)
        listElement.appendChild(nomeElement)

    }
    
   
}
rederNomes()


function adicionar(){
        var nomeElement = inputElement.value
        nomes.push(nomeElement)
        inputElement.value = ""
        rederNomes()
}

buttonElement.onclick = adicionar
