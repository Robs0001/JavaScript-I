

const visitante = {
  nome: "João Silva",
  idade: 25,
  documento: "123.456.789-00"
};
function gerarMensagemVisitante(pessoa) {
  return `Visitante ${pessoa.nome}, com ${pessoa.idade} anos, portador do documento ${pessoa.documento}.`;
}
console.log(gerarMensagemVisitante(visitante));