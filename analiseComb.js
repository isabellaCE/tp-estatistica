function permutacaoSimples() {
  let valor = Number(document.getElementById("permut_simples").value);
  let permutacao_simples = 1;

  if (valor !== undefined || valor !== null) {
    for (let i = 1; i <= valor; i++) {
      permutacao_simples *= i;
    }
    document.getElementById("result_permutacao").innerHTML = `
		Permutação Simples: ${permutacao_simples}
	`;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function arranjoSimples() {
  let elementos = Number(document.getElementById("total_elementos").value);
  let arranjos = Number(document.getElementById("total_arranjos").value);
  let numerador = 1;
  let denominador = 1;
  let arranjo_simples = 1;

  if (elementos !== undefined && arranjos !== undefined) {
    for (let i = 1; i <= elementos; i++) {
      numerador *= i;
    }

    for (let i = 1; i <= elementos - arranjos; i++) {
      denominador *= i;
    }

    arranjo_simples = numerador / denominador;

    document.getElementById("result_arranjo").innerHTML = `
		Arranjo Simples: ${arranjo_simples}
	`;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function combinacaoSimples() {
  let elementos = Number(
    document.getElementById("total_elementos_combinacao").value
  );
  let subconjuntos = Number(
    document.getElementById("total_subconjuntos").value
  );
  let fatorial_elementos = 1;
  let fatorial_subconjuntos = 1;
  let denominador = 1;
  let combinacao_simples = 1;

  if (elementos !== undefined && subconjuntos !== undefined) {
    for (let i = 1; i <= elementos; i++) {
      fatorial_elementos *= i;
    }

    for (let i = 1; i <= subconjuntos; i++) {
      fatorial_subconjuntos *= i;
    }

    for (let i = 1; i <= elementos - subconjuntos; i++) {
      denominador *= i;
    }

    combinacao_simples =
      fatorial_elementos / (denominador * fatorial_subconjuntos);

    document.getElementById("result_combinacao").innerHTML = `
		Combinacao Simples: ${combinacao_simples}
	`;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function arranjoRepeticao() {
  let elementos = Number(
    document.getElementById("total_elementos_arranjo").value
  );
  let repeticao = Number(document.getElementById("arranjo_repeticao").value);
  let arranjo_repeticao = 0;

  if (elementos !== undefined && repeticao !== undefined) {
    arranjo_repeticao = Math.pow(repeticao, elementos);

    document.getElementById("result_arranjo_repeticao").innerHTML = `
    Arranjo com Repetição: ${arranjo_repeticao}
  `;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function combinacaoRepeticao() {
  let elementos = Number(document.getElementById("total_elementos_comb").value);
  let elementos_subconjunto = Number(
    document.getElementById("combinacao_repeticao").value
  );
  let numerador = 1;
  let denominador = 1;
  let fat_subconjunto = 1;
  let combinacao_repeticao = 0;
  let fat_numerador = elementos + elementos_subconjunto - 1;

  if (elementos !== undefined && elementos_subconjunto !== undefined) {
    for (let i = 1; i <= fat_numerador; i++) {
      numerador *= i;
    }

    for (let i = 1; i <= elementos - 1; i++) {
      denominador *= i;
    }

    for (let i = 1; i <= elementos_subconjunto; i++) {
      fat_subconjunto *= i;
    }

    combinacao_repeticao = numerador / (fat_subconjunto * denominador);

    document.getElementById("result_combinacao_repeticao").innerHTML = `
    Combinação com Repetição: ${combinacao_repeticao}
  `;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function permutacaoRepeticao() {
  let elementos = Number(
    document.getElementById("total_elementos_permut").value
  );
  let elementos_repeticao = Number(
    document.getElementById("permut_repeticao").value
  );
  let numerador = 1;
  let denominador = 1;
  let permut_repeticao = 0;

  if (elementos !== undefined && elementos_repeticao !== undefined) {
    for (let i = 1; i <= elementos; i++) {
      numerador *= i;
    }

    for (let i = 1; i <= elementos_repeticao; i++) {
      denominador *= i;
    }

    permut_repeticao = numerador / denominador;

    document.getElementById("result_permut_repeticao").innerHTML = `
    Permutação com Repetição: ${permut_repeticao}
  `;
    document.getElementById("new").style.display = "initial";
  } else {
    alert("Adicione algum dado");
  }
}

function reset() {
  window.location.reload();
}

document
  .getElementById("calcPermutacao")
  .addEventListener("click", permutacaoSimples);
document
  .getElementById("calcArranjo")
  .addEventListener("click", arranjoSimples);
document
  .getElementById("calcCombinacao")
  .addEventListener("click", combinacaoSimples);
document
  .getElementById("calcArranjoRepeticao")
  .addEventListener("click", arranjoRepeticao);

document
  .getElementById("calcCombinacaoRepeticao")
  .addEventListener("click", combinacaoRepeticao);

document
  .getElementById("calcPermutacaoRepeticao")
  .addEventListener("click", permutacaoRepeticao);

document.getElementById("new").addEventListener("click", reset);
