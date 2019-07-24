function temHabilidade(skills){
    for( var item in skills){
        if(skills[item] === 'Javascript')
            return true
    }
    return false

}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills))
