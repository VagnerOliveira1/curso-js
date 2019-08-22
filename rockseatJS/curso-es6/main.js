class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.todos.push();
        console.log(this.todos);
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Fulano'

    }
    mostraUsuario(){
        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){

    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();