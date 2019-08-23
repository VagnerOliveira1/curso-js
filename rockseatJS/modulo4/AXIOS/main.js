axios.get('https://api.github.com/users/VagnerOliveira1')
    .then(function(response){
        console.log(JSON.parse(response.data.repos_url))
    })
    .catch(function(error){
        console.warn(error)
    })