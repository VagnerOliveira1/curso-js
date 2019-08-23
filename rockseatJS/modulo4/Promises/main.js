var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        
        var objetoAjax = new XMLHttpRequest()
        objetoAjax.open('GET','https://api.github.com/users/VagnerOliveira1')
        objetoAjax.send(null)

        objetoAjax.onreadystatechange = function(){
            if(objetoAjax.readyState === 4){
                if(objetoAjax.status === 200){
                    resolve(JSON.parse(objetoAjax.responseText))
                }
                else{
                   reject('ERROR')
                }
            }
        }    
    });
}

minhaPromise()
    .then(function(response){
        console.log(response)
    }).catch(function(error){
         console.warn(error)
})
