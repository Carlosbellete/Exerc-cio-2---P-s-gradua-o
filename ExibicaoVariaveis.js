//CONSOLE API

//exibir texto
console.log("Aula inicial JS")
//exibir erro
console.error("Falha na execução")
//exibir alerta
console.warn("Atenção")
//exibição de informação em formato de tabela
console.table([{
    nome: "samuel",
    turma: "02",
    disciplina: "Programação em JS"
},{
    nome: "Carlos",
    turma: "02",
    disciplina: "Programação em JS"
}])

//CONSTANTES E VÁRIAVEIS

//INFORMAÇÕES DE DOG QUE NÃO MUDAM

const nome = "Pandora"
const raca = "vira-lata"
const sexo = "Macho"
const cor = "Cinza"
const dataDeNascimento = "05/04/2022"
const porte = "M"

//INFORMAÇÕES QUE MUDAM

idade = 3
peso = 10.5
vacinado = true
castrado = true
tamanho = "M"

//hoisting - içamento ou elevação

const irmaos = [
    {
    nome: "Bellete",
    idade: 25
    },
    {
    nome: "Yanne",
    idade: 23
    }
]
console.table(irmaos)