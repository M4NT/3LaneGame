function checar() {
	var respostaUsuario = document.getElementById('resposta').value;
	var respostaCerta1 = 'cubone';
	var respostaCerta2 = 'mewtwo';
	var respostaCerta3 = 'treecko';

	if (
		respostaUsuario.toLowerCase() === respostaCerta1 ||
		respostaCerta2 ||
		respostaCerta3
	) {
		alert('Parabéns, você acertou!');
	} else {
		alert('Parabéns, você errou!');
	}
}

function mudarConteudo1() {
	document.getElementById('dica1').innerHTML = 'Tem rabo';
	document.getElementById('dica2').innerHTML = 'É Único';
	document.getElementById('dica3').innerHTML = 'Ash deu um soco';
}

function mudarConteudo2() {
	document.getElementById('dica1').innerHTML = 'Tipo Planta';
	document.getElementById('dica2').innerHTML = 'Tem rabo';
	document.getElementById('dica3').innerHTML = 'É inicial';
}
