function registrarPessoa(pessoa) {
    console.log("Nome: ".concat(pessoa.nome, "."));
    console.log("Idade: ".concat(pessoa.idade, "."));
    console.log("Email: ".concat(pessoa.email, "."));
}
var pessoa1 = {
    nome: "Daniel",
    idade: 18,
    email: "daniel@email.com"
};
var pessoa2 = {
    nome: "Joao",
    idade: 12,
    email: "joao@email.com"
};
registrarPessoa(pessoa1);
registrarPessoa(pessoa2);
