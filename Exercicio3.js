let dog1 = "   MALU  "
let dog2 = "  aMOra  "
let dog1SemEspaco = dog1.trim()
let dog2SemEspaco = dog2.trim()
const dog1Padrao = dog1SemEspaco.slice(0,1).toUpperCase() + dog1SemEspaco.slice(1).toLowerCase()
const dog2Padrao = dog2SemEspaco.slice(0,1).toUpperCase() + dog2SemEspaco.slice(1).toLowerCase()

console.log(`O nome do dog 1 da maneira que foi mencionado é ${dog1} e após formatação é ${dog1Padrao}`)
console.log(`O nome do dog 1 da maneira que foi mencionado é ${dog2} e após formatação é ${dog2Padrao}`)

if(dog1Padrao.length == 4 && dog2Padrao.length == 5){
    console.log(`O nome ${dog1Padrao}, contém apenas ${dog1Padrao.length} letras e o nome ${dog2Padrao}, contém apens ${dog2Padrao.length} caracteres`)
}else{
    console.log(`O nome ${dog1Padrao}, contém a quantidade de caracteres diferente de ${dog1Padrao.length} e o nome ${dog2Padrao}, contém a quantidade de caracteres diferente de ${dog2Padrao.length} caracteres`)
}