function fatRecursiva(n){
    if(n== 1){
        return 1
    }
    else{
        return n * fatRecursiva(n-1)
    }
}

console.log(fatRecursiva(6))