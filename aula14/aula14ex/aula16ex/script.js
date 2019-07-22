function contador(){

    var inicio = document.getElementById('txtIni')

    var fim = document.getElementById('txtFim')

    var passo = document.getElementById('passo')

    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        window.alert("Dados Inválidos")
    }
    else{
        var i = Number(inicio.value)
        var final = Number(fim.value)
        var contator = Number(passo.value)
        while(i<= final){
             res.innerHTML += `${i}\u{1F375}`
             i = i + contator
        }
        res.innerHTML +=`\u{1F3C1}`
    }
    
   

}