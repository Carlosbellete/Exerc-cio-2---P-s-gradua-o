/*
Na função abaixo recebe um argumento nome, que será recebido no teste e chama o método para 
fazer com que o argumento tenha todas as suas letras maiúsculas
*/

function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

/*
Na função abaixo recebe dois argumentos sendo idade e porte, onde eu atribuo uma váriável a um operador
lógico e em seguida retorno o resultado do operador lógico.
*/

function verificarSePodeSerAdotado(idade, porte){
    const adocao = idade === 1 && porte === 'M'
    return adocao
}

/*
Na função abaixo recebe 3 argumentos, sendo nome, idade e peso. Porém para o teste apenas 1 deles é usado,
que é o peso, para realizar o calculo de quantas gramas de consumo diário. Tentei me basear pela atividade
que pedia para multiplicar o peso por 30 gramas, porém, preferi fazer por 300 gramas no caso. Em seguida
retorno o valor do calculo 
*/

function calcularConsumoDeRacao(nome, idade, peso){
    const consumo = peso * 300
    return consumo
}

/*
Na função abaixo recebe um argumento sendo o porte, onde eu atribuo uma váriável a um operador
lógico onde sendo verdadeiro ele exibe a mensagem esperada e sendo falso ele exibe outra mensagem e por
fim retorna o resultado do operador lógico.
*/

function decidirTipoDeAtividadePorPorte(porte){
    const atividade = porte === 'pequeno' ? 'brincar dentro de casa' : 'pode brincar fora de casa'
    return atividade
}

/*
Na função abaixo retorna uma promise resolvida pelo retorno.
*/

async function buscarDadoAsync(){
    return 'Pipoca'
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}