"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function criarPessoa(nome, idade, profissao) {
    return {
        nome,
        idade,
        profissao
    };
}
function saudacao(pessoa) {
    return `Olá meu nome é: ${pessoa.nome}, tenho ${pessoa.idade}, e minha profissão é ${pessoa.profissao}.`;
}
const pessoa1 = criarPessoa("Daniel", 18, "Desenvolvedor de software");
console.log(saudacao(pessoa1));
//# sourceMappingURL=app.js.map