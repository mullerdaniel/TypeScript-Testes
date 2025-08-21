interface Livro {
    titulo: string;
    autor: string;
    isbn: string;
    disponivel: boolean;
}

interface Usuario {
    nome: string;
    email: string;
    livrosEmprestados: Livro[];
}

class Biblioteca {
    private livros: Livro[] = [];
    private usuarios: Usuario[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    registrarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    emprestarLivro(isbn: string, email: string): void {
        const livro = this.livros.find(livro => livro.isbn === isbn);
        const usuario = this.usuarios.find(usuario => usuario.email === email);

        if (!livro || !usuario) {
            console.log("Livro ou usuário não encontrado!");
            return;
        }

        if (!livro.disponivel) {
            console.log(`O livro ${livro.titulo} não está disponível.`);
            return;
        }

        livro.disponivel = false;
        usuario.livrosEmprestados.push(livro);
        console.log(`O livro ${livro.titulo} foi emprestado para ${usuario.nome}.`);
    }

    devolverLivro(isbn: string, email: string): void {
        const livro = this.livros.find(livro => livro.isbn === isbn);
        const usuario = this.usuarios.find(usuario => usuario.email === email);

        if (!livro || !usuario) {
            console.log("Livro ou usuário não encontrado!");
            return;
        }

        const index = usuario.livrosEmprestados.findIndex(livro => livro.isbn === isbn);
        if (index === -1) {
            console.log("O livro não foi emprestado para este usuário.");
            return;
        }

        usuario.livrosEmprestados.splice(index, 1);
        livro.disponivel = true;
        console.log(`O livro ${livro.titulo} foi devolvido por ${usuario.nome}.`);
    }

    exibirStatus(): void {
        console.log("Livros na biblioteca:");
        this.livros.forEach(livro => {
            console.log(`${livro.titulo} (${livro.disponivel ? 'Disponível' : 'Indisponível'})`);
        });
        console.log("\nUsuários registrados:");
        this.usuarios.forEach(usuario => {
            console.log(`${usuario.nome} - Livros emprestados: ${usuario.livrosEmprestados.length}`);
        });
    }
}

// Criando instâncias
const biblioteca = new Biblioteca();

// Adicionando livros
biblioteca.adicionarLivro({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    isbn: "12345",
    disponivel: true
});

biblioteca.adicionarLivro({
    titulo: "1984",
    autor: "George Orwell",
    isbn: "67890",
    disponivel: true
});

// Registrando usuários
biblioteca.registrarUsuario({
    nome: "Ana",
    email: "ana@email.com",
    livrosEmprestados: []
});

biblioteca.registrarUsuario({
    nome: "Carlos",
    email: "carlos@email.com",
    livrosEmprestados: []
});

// Emprestando e devolvendo livros
biblioteca.emprestarLivro("12345", "daniel@email.com");
biblioteca.devolverLivro("12345", "daniel@email.com");

// Exibindo o status final
biblioteca.exibirStatus();
