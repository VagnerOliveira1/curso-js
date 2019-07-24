function pares(n1,n2){
    var lista = []
    for (var i = n1; i <= n2; i++){
       if(i % 2 == 0)
            lista.push(i)
    }
    return lista

}

var lista = pares(10,35)
console.log(lista)