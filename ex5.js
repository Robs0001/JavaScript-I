
class Livro {
  constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
  }

  detalhes() {
      console.log(`O livro "${this.titulo}" foi escrito por ${this.autor} em ${this.ano}.`);
  }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("1984", "George Orwell", 1949);

livro1.detalhes();
livro2.detalhes();