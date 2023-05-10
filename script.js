var dados_brutos = [];
var soma = 0;
var media = 0;
var mediana = 0;
var maior = 0;
var moda = [];
var somatorio = 0;
var variancia = 0;
var desvio_padrao = 0;
var coef_variacao = 0;
var dado = 0;

function sendDados() {
  dado = Number(document.getElementById("dados").value);
  console.log(dado);
  if (!dado) {
    alert("Adicione um dado");
  } else {
    if (dados_brutos.length < 200) {
      dados_brutos.push(dado);
      document.getElementById("dados").value = "";
    } else {
      alert("Não é possível adicionar mais dados!");
    }
  }
}

function calcMedia() {
  dados_brutos.forEach((element) => {
    soma += element;
  });
  media = soma / dados_brutos.length;
  return media;
}

function calcMediana() {
  if (dados_brutos.length % 2 !== 0) {
    mediana = dados_brutos[(dados_brutos.length + 1) / 2 - 1];
  } else {
    mediana =
      (dados_brutos[dados_brutos.length / 2 - 1] +
        dados_brutos[dados_brutos.length / 2 + 1 - 1]) /
      2;
  }
  return mediana;
}

function calcFreq() {
  const ocorrencias = dados_brutos.reduce((element, ocorrencia) => {
    return (
      element[ocorrencia] ? ++element[ocorrencia] : (element[ocorrencia] = 1),
      element
    );
  }, {});
  calcModa(ocorrencias);
}

function calcModa(ocorrencias) {
  let valores_obj = Object.values(ocorrencias);

  Array.prototype.hasModa = function () {
    for (var i = 1; i < this.length; i++) {
      if (this[i] !== this[0]) return false;
    }
    return true;
  };

  if (valores_obj.hasModa() === true) {
    moda = "Não possui moda";
  } else {
    for (var element in ocorrencias) {
      if (ocorrencias[element] > maior) {
        maior = ocorrencias[element];
        console.log(maior);
        chave_maior = element;
      }
    }
    moda.push(chave_maior);
    console.log(chave_maior);
    for (var element in ocorrencias) {
      if (element !== chave_maior && ocorrencias[element] === maior) {
        chave = element;
        moda.push(chave);
      }
    }
  }
  console.log(moda);
  return moda;
}

function calcVariancia() {
  dados_brutos.forEach((element) => {
    somatorio += Math.pow(element - media, 2);
  });
  console.log(somatorio);
  variancia = somatorio / (dados_brutos.length - 1);
  return variancia;
}

function calcDesvioPadrao() {
  desvio_padrao = Math.sqrt(variancia);
  return desvio_padrao;
}

function calcCoefVariacao() {
  coef_variacao = (desvio_padrao / media) * 100;
  return coef_variacao;
}

function medidasPosicao() {
  if (!document.getElementById("dados").value) {
    alert("Adicione um dado");
  } else {
    calcFreq();

    document.getElementById("table_medidas").innerHTML = `
	<thead>
    <tr>
      <th scope="col">Medidas</th>
      <th scope="col">Resultados</th>
    </tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">Média</th>
				<td>${calcMedia()}</td>
			</tr>
			<tr>
				<th scope="row">Mediana</th>
				<td>${calcMediana()}</td>
			</tr>
			<tr>
				<th scope="row">Moda</th>
				<td>${moda}</td>
			</tr>
			<tr>
				<th scope="row">Variância</th>
				<td>${calcVariancia()}</td>
			</tr>
			<tr>
				<th scope="row">Desvio Padão</th>
				<td>${calcDesvioPadrao()}</td>
			</tr>
			<tr>
				<th scope="row">Coeficiente de variação</th>
				<td>${calcCoefVariacao()}</td>
			</tr>
		</tbody>
	`;

    document.getElementById("dados").disabled = true;
    document.getElementById("new").style.display = "initial";
  }
}

function reset() {
  window.location.reload();
}

document
  .getElementById("medidas_posicao")
  .addEventListener("click", medidasPosicao);

document.getElementById("new").addEventListener("click", reset);

document.getElementById("dados").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendDados();
  }
});
