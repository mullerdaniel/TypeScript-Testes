interface Pessoa {
    nome: string;
    idade: number;
    email: string;
}

function registrarPessoa(pessoa: Pessoa){
    console.log(`Nome: ${pessoa.nome}.`);
    console.log(`Idade: ${pessoa.idade}.`);
    console.log(`Email: ${pessoa.email}.`);
}


const pessoa1: Pessoa = {
    nome: "Daniel",
    idade: 18,
    email: "daniel@email.com"
};

const pessoa2: Pessoa = {
    nome: "Joao",
    idade: 12,
    email: "joao@email.com"
};

registrarPessoa(pessoa1);
registrarPessoa(pessoa2);