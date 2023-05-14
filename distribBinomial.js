function calcCombinacao(elementos, subconjuntos) {
  let fatorial_elementos = 1;
  let fatorial_subconjuntos = 1;
  let denominador = 1;
  let combinacao_simples = 1;

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

  return combinacao_simples;
}

function probabilidadeBinomial() {
  let entrada = Number(document.getElementById("entrada").value);
  let prob_success = Number(document.getElementById("prob_success").value);
  let variavel_x = Number(document.getElementById("variavel_x").value);

  if (
    entrada !== undefined &&
    prob_success !== undefined &&
    variavel_x !== undefined
  ) {
    let combinacao = calcCombinacao(entrada, variavel_x);
    let pro_binomial = 0;
    let pro_binomial_menor_x = 0;
    let pro_binomial_maior_x = 0;

    pro_binomial =
      combinacao *
      Math.pow(prob_success, variavel_x) *
      Math.pow(1 - prob_success, entrada - variavel_x);

    for (let i = 0; i <= variavel_x; i++) {
      pro_binomial_menor_x +=
        calcCombinacao(entrada, i) *
        Math.pow(prob_success, i) *
        Math.pow(1 - prob_success, entrada - i);
    }

    for (let i = variavel_x; i <= entrada; i++) {
      pro_binomial_maior_x +=
        calcCombinacao(entrada, i) *
        Math.pow(prob_success, i) *
        Math.pow(1 - prob_success, entrada - i);
    }

    document.getElementById("table_medidas").innerHTML = `
	    <thead>
        <tr>
          <th scope="col">P(X)</th>
          <th scope="col">Resultados</th>
        </tr>
	    	</thead>
	    	<tbody>
	    		<tr>
	    			<th scope="row">P(X = ${variavel_x})</th>
	    			<td>${pro_binomial}</td>
	    		</tr>
          <tr>
	    			<th scope="row">P(X >= ${variavel_x})</th>
	    			<td>${pro_binomial_maior_x}</td>
	    		</tr>
          <tr>
	    			<th scope="row">P(X <= ${variavel_x})</th>
	    			<td>${pro_binomial_menor_x}</td>
	    		</tr>
          
	    	</tbody>
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
  .getElementById("calcDistribBinomial")
  .addEventListener("click", probabilidadeBinomial);

document.getElementById("new").addEventListener("click", reset);
