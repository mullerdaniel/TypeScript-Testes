interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

function criarPessoa(nome: string, idade: number, profissao: string) {
    return {
        nome,
        idade,
        profissao
    };
}

function saudacao(pessoa: Pessoa): string {
    return `Olá meu nome é: ${pessoa.nome}, tenho ${pessoa.idade}, e minha profissão é ${pessoa.profissao}.`;
}

const pessoa1 = criarPessoa("Daniel", 18, "Desenvolvedor de software");

console.log(saudacao(pessoa1))