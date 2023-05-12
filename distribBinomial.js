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
  let combinacao = calcCombinacao(entrada, variavel_x);
  let pro_binomial = 0;

  pro_binomial =
    combinacao *
    Math.pow(prob_success, variavel_x) *
    Math.pow(1 - prob_success, entrada - variavel_x);

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
		</tbody>
	`;
}

document
  .getElementById("calcDistribBinomial")
  .addEventListener("click", probabilidadeBinomial);
