function checar() {
	var respostaUsuario = document.getElementById('resposta').value;
	var respostaCerta1 = 'cubone';
	var respostaCerta2 = 'mewtwo';
	var respostaCerta3 = 'treecko';

	if ((respostaUsuario.toLowerCase() == respostaCerta1)||(respostaUsuario.toLowerCase() == respostaCerta2)||(respostaUsuario.toLowerCase() == respostaCerta3)) {
		alert('Parabéns, você acertou!');
	} else {
		alert('Você errou, tente novamente!');
	}

}

function mudarConteudo1() {
	document.getElementById('dica1').innerHTML = '1º Dica: <br>Mamífero';
	document.getElementById('dica2').innerHTML = '2º Dica: <br>Dinossauro';
	document.getElementById('dica3').innerHTML = '3º Dica: <br>Órfão';
}

function mudarConteudo2() {
	document.getElementById('dica1').innerHTML = '1º Dica: <br>Tem rabo';
	document.getElementById('dica2').innerHTML = '2º Dica: <br>É Único';
	document.getElementById('dica3').innerHTML = '3º Dica: <br>Ash deu um soco';
}

function mudarConteudo3() {
	document.getElementById('dica1').innerHTML = '1º Dica: <br>Tipo Planta';
	document.getElementById('dica2').innerHTML = '2º Dica: <br>Tem rabo';
	document.getElementById('dica3').innerHTML = '3º Dica: <br>É inicial';
}