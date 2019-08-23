
var idade = function(n=30){
    return new Promise(function(resolve, reject){
        
        setTimeout(()=>{
            if(n.value >= 18){
                resolve(' Maior de Idade')
            }
            else{
                reject('Menor de Idade')
            }

        }, 2000)
    })

}
idade()
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})

