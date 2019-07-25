var aparecer = document.querySelector('div.aparecer')
var mudar = document.querySelector('div input#mudar')
mudar.addEventListener('click',criaDiv)
aparecer.addEventListener('mouseenter',mudaCor)

    

function criaDiv(){
    aparecer.style.width = '100px'
    aparecer.style.height = '100px'
    aparecer.style.backgroundColor = '#F00'
    

}

function mudaCor() {
   
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    aparecer.style.backgroundColor = color

}
    

   