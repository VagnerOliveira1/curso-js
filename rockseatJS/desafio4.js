function experiencia(anos){
   // switch(Number(anos)){
        if (anos >=0 && anos <= 1)
            return 'Iniciante'
         
        else if (anos <= 3)
            return 'Intermediario'

        else if (anos <= 6)
            return 'Avançado'
       else
            return 'Jedi Master'
   // }

}
console.log(experiencia(1))