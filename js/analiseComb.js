function permutacaoSimples() {
    let valor = document.getElementById("permut_simples").value
    let permutacao_simples = 1;

    for(let i = 1; i <= valor; i++) {
        permutacao_simples *= i;
    }
    document.getElementById("result_permutacao").innerHTML = `
        Permutação Simples: ${permutacao_simples}
    `
}

function arranjoSimples(){
    let elementos = document.getElementById("total_elementos").value
    let arranjos = document.getElementById("total_arranjos").value
    let numerador = 1;
    let denominador = 1;
    let arranjo_simples = 1;

    for(let i = 1; i <= elementos; i++) {
        numerador *= i;
    }
    console.log(numerador)

    for(let i = 1; i <= (elementos - arranjos); i++) {
        denominador *= i;
    }
    console.log(denominador)


    arranjo_simples = numerador / denominador;

    document.getElementById("result_arranjo").innerHTML = `
        Arranjo Simples: ${arranjo_simples}
    `
}

function combinacaoSimples(){
    let elementos = document.getElementById("total_elementos_combinacao").value
    let subconjuntos = document.getElementById("total_subconjuntos").value
    let fatorial_elementos = 1;
    let fatorial_subconjuntos = 1;
    let denominador = 1;
    let combinacao_simples = 1;

    for(let i = 1; i <= elementos; i++) {
        fatorial_elementos *= i;
    }

    for(let i = 1; i <= (subconjuntos); i++) {
        fatorial_subconjuntos *= i;
    }

    for(let i = 1; i <= (elementos - subconjuntos); i++) {
        denominador *= i;
    }

    combinacao_simples = fatorial_elementos / (denominador*fatorial_subconjuntos)

    document.getElementById("result_combinacao").innerHTML = `
        Combinacao Simples: ${combinacao_simples}
    `
}

function arranjoRepeticao() {
    let elementos = document.getElementById("total_elementos_arranjo").value
    let repeticao = document.getElementById("arranjo_repeticao").value 
    let arranjo_repeticao = 0;

    arranjo_repeticao = Math.pow(repeticao, elementos)

    document.getElementById("result_arranjo_repeticao").innerHTML = `
        Arranjo com Repetição: ${arranjo_repeticao}
    `
}



document.getElementById("calcPermutacao").addEventListener("click", permutacaoSimples);
document.getElementById("calcArranjo").addEventListener("click", arranjoSimples);
document.getElementById("calcCombinacao").addEventListener("click", combinacaoSimples);
document.getElementById("calcArranjoRepeticao").addEventListener("click", arranjoRepeticao);