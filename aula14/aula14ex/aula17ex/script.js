function calcular(){
    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('tabuada')

   
   if(numero.value.length != 0){
    num = Number(numero.value)
       tabuada.innerHTML = " "
        for(var i =1 ; i <= 10; i ++){
            var item = document.createElement(`option`)
            item.text = `${num} x ${i} = ${num*i} `
            tabuada.appendChild(item)

        }
    }
    else{
        window.alert("Digite um valor")
    }


}