function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro Verifique os dados e tente novamente')
    }else{
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement(`img`)
        img.setAttribute(`id`,`foto`)

        if(formsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                img.setAttribute(`src`,`m-crianca.jpg`)
                //Criança
            }
            else if(idade < 25){
                img.setAttribute(`src`,`m-jovem.jpg`)
                //Jovem
            }else if(idade < 50){
                img.setAttribute(`src`,`m-adulto.jpg`)
                //Adulto
            }else{
                img.setAttribute(`src`,`m-idoso.jpg`)
                //Idoso
            }

        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                img.setAttribute(`src`,`f-crianca.jpg`)
                //Criança
            }
            else if(idade < 25){
                img.setAttribute(`src`,`f-jovem.jpg`)
                //Jovem
            }else if(idade < 50){
                img.setAttribute(`src`,`f-adulta.jpg`)
                //Adulto
            }else{
                img.setAttribute(`src`,`f-idosa.jpg`)
                //Idoso
            }



        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}