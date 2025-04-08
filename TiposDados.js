//           STRING - CONCATENAÇÃO
const turma = "02"
const data = "05/04/2025"
//console.log("Minha turma é " + turma + " no dia 5 de Abril")

//           STRING - INTERPOLAÇÃO
//console.log(`Minha turma é ${turma} no dia ${data}`)

//           STRING - Contar caracteres - Length

//console.log(data.length)

//           STRING - separar strings - split

const nomesAlunos = "Carlos Yanne bellete karolyne"
const nomesAlunosSeparados = nomesAlunos.split(" ")

//console.log(nomesAlunosSeparados)

//           STRING - transformar strings em letras minusculas ou maiusculas - toLowerCase para minusculo ou toUpperCase para maiusculo

//console.log(nomesAlunos.toLowerCase())
//console.log(nomesAlunos.toUpperCase())

//           STRING - Verificar se existe na string - .includes

//console.log(nomesAlunos.includes("Carlos"))

//           STRING - substituição de string, o primeiro parametro é oq ele está buscando e o segundo é o que vai substituir - .replaceAll
//console.log(nomesAlunos.replaceAll("a", "0"))

//           STRING - Retirar espaços desnecessários no começo e no fim da string - .trim
//console.log(nomesAlunos.trim())

//           STRING - recortar uma string - .slice
const cpf = "70146794494"
let primeiros = cpf.slice(0, 3)

console.log(primeiros)