

function carregar(){
//     var msg = window.document.getElementById('msg')
//     var foto = window.document.getElementById('foto')
//     var data = new Date()
//     var hora = data.getHours()
//     msg.innerHTML = `Agora são ${hora} horas`
//     if(hora >= 0 && hora < 12){
        
//         foto.src ='amanhecer.jpg'
//     }
//     else if(hora >=12 && hora < 18){
//         foto.src ='tarde.jpg'
//     }
//     else{
//         foto.src ='noite.jpg'
//     }



// }
var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data =new Date()
    var hora = 1
    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png' 
        document.body.style.background = '#fdb748'
    } else if (hora >= 12 && hora <= 18) {
        //bom tarde
        img.src = 'tarde.png'
        document.body.style.background = '#4b2d45'
        } else { 
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#5a296a'
    }
}     
