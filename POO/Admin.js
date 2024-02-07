import User from "./User.js";

class Admin extends User{
    constructor(nome,email,nascimento,role='admin',ativo=true){
        super(nome,email,nascimento,role,ativo)
    }
}

const novoAdmin = new Admin('Siclano','si@cla.no','10-02-92')
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());