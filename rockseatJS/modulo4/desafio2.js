var inputElement = document.createElement('input')
var buttonElement = document.createElement('button')
var listElement = document.querySelector('#app ul')

inputElement.setAttribute('type','text')
inputElement.setAttribute('placeholder','Digite seu usuario ')
inputElement.style.width = 150
inputElement.setAttribute('value','VagnerOliveira1')

var nome = inputElement.value

var containerElement = document.querySelector('div#app')

var containerElementButton = document.querySelector('div#button')

containerElement.appendChild(inputElement)


var url = 'https://api.github.com/users/'+nome+'/repos'



console.log(url)
