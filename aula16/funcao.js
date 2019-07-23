function fat(n){
    let fatorial =  1
    for( n; n > 0; n--){
        fatorial *=  n
    }
    return fatorial
}
console.log(fat(5))