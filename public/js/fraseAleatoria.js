$('#botao-frase').click(function(){
    fraseAleatoria();
})
function fraseAleatoria(){
    $.get('http://localhost:3000/frases', TrocaFraseAleatoria );   
}
function TrocaFraseAleatoria(data){
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    $('.frase').text(data[numeroAleatorio].texto);
    AtualizaTempoComNovaFrase(data[numeroAleatorio].tempo);
    wordsCounter();
    tamanhoFrasePrincipal();
    ValidationEdge();
    restart();
}