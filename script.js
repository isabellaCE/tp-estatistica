var dados_brutos = []
var soma = 0
var media = 0
var mediana = 0

for(let i = 0; i < 6; i++) {
	let dado = parseInt(window.prompt("Digite um número"))
	dados_brutos.push(dado)
	soma += dados_brutos[i]
	console.log(dados_brutos)
}

function calcMedia() {
	dados_brutos.forEach(element => {
		soma += element
	});
	media = soma / dados_brutos.length
	console.log(media)
}

function calcMediana() {
	if(dados_brutos.length % 2 !== 0) {
		mediana = dados_brutos[((dados_brutos.length + 1) / 2)-1]
		
	}else {
		mediana = (dados_brutos[(dados_brutos.length/2)-1] + dados_brutos[((dados_brutos.length/2) + 1)-1]) / 2
	}
	console.log(mediana)
}

function medidasPosicao() {
	calcMedia()
	calcMediana()
}

console.log(media)



document.getElementById("medidas_posicao").addEventListener("click", medidasPosicao)