var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var nomes = JSON.parse(localStorage.getItem('lista_nomes')) || []

function rederNomes(){
    listElement.innerHTML = ""

    for (nome of nomes){
        var nomeElement = document.createElement('li')
        var nomeText = document.createTextNode(nome)

        var linkElement = document.createElement('a')
       

        linkElement.setAttribute('href','#')

        var posicao = nomes.indexOf(nome)
        linkElement.setAttribute('onclick', 'deletaNome('+posicao+')')
        var linkText = document.createTextNode('Excluir')


        linkElement.appendChild(linkText)




        nomeElement.appendChild(nomeText)
        nomeElement.appendChild(linkElement)

        listElement.appendChild(nomeElement)

    }
    
   
}
rederNomes()


function adicionar(){
        var nomeElement = inputElement.value
        nomes.push(nomeElement)
        inputElement.value = ""
        rederNomes()
        saveToStorage()
}

buttonElement.onclick = adicionar

function deletaNome(posicao){
    nomes.splice(posicao,1)
    rederNomes()
    saveToStorage()


}
function saveToStorage(){

    localStorage.setItem('lista_nomes',JSON.stringify(nomes))

}