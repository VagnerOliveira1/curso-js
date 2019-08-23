var objetoAjax = new XMLHttpRequest();

objetoAjax.open('GET','https://api.github.com/users/VagnerOliveira1');
objetoAjax.send(null);

objetoAjax.onreadystatechange  = function(){
    if(objetoAjax.readyState === 4){
        console.log(JSON.parse(objetoAjax.responseText))
    }
}