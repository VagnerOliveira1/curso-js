let num = document.querySelector(`input#numero`)
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    return false
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    return false
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Invalido')
    }
   
    
}
function finalizar(){
    res.innerHTML= `Ao todo temos ${valores.length} encontrados`
    valores.sort()
    var ultimo = valores[Number(valores.length)]
    res.innerHTML += ` O maior valor é ${ultimo}`

}
