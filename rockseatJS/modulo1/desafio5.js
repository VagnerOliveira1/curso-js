function habilidades(usuarios){
    
    for(var i=0;i< usuarios.length; i++){
       console.log(`O ${usuarios[i].nome} possui as habilidades ${usuarios[i].habilidades.join(`, `)} `)

    }


}

var usuarios= [
    {
        nome:"Diego",
        habilidades:["Javascript", "ReactJS","Redux"]

    },
    {
        nome:"Gabriel",
        habilidades:["VueJs","Ruby on Rails","Elixir"]

    }
]

console.log(habilidades(usuarios))