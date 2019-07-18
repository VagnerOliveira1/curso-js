

function carregar(){

var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()

    msg.innerHTML =`Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML+= `<p><strong>BOM DIA</strong></p>`
        img.src ='amanhecer.jpg' 
        document.body.style.background = '#fdb748'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML+= `<p><strong>BOA TARDE</strong></p>`       
        img.src ='tarde.jpg'
        document.body.style.background = '#4b2d45'
    } else { 
        msg.innerHTML+= `<p><strong>BOM DIA</strong></p>`       
        img.src ='noite.jpg'
        document.body.style.background = '#5a296a'
    }
}     
