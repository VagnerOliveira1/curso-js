let pessoa  = {nome:'Fulano',
sexo:'M',
peso:70,
idade:'21',
engordar(p=0){
   console.log(`Engordou`) 
   this.peso += p

}}
pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso} Kg`)