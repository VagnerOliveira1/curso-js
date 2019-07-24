function exibeConteudo(){
    var endereco ={
        rua:"Rua dos pinheiros",
        numero:1293,
        bairro:"Centro",
        cidade:"São Paulo",
        uf:"SP"
    }
    return endereco
}
var local = exibeConteudo()

console.log(`O usuario mora em ${local.cidade} / ${local.uf}, no bairro ${local.bairro}, na rua ${local.rua} com o nº ${local.numero}`)

