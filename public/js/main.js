    var tempoInicial = $('#contador').text();
    var campo = $("#campo-digitacao");
    $(document).ready(function () {
        wordsCounter();
        tamanhoFrasePrincipal();
        startupTiming();
        ValidationEdge();
        restart();
        $('#BotaoDoPlacar').click(function(){
            MostrarPlacar();
        });
        
    })
    
    function tamanhoFrasePrincipal(){
        var frase = $('.frase').text();
        var tamanhoFrase = $("#tamanho-frase");
        var numPalavras = frase.split(" ").length;
        tamanhoFrase.text(numPalavras);
    }
    
function wordsCounter() {
    
    
    campo.on("input", function (e) {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(conteudo.length);
    });
}
function AtualizaTempoComNovaFrase(tempo){
   tempoInicial =  tempo; 
   $('#contador').text(tempo) 
}
function startupTiming() {
    var time = $('#contador').text();
    campo.one("focus", function () {
        var Idcountdown = setInterval(() => {
            time--;
            $('#contador').text(time);
            var cont = campo.val();
            var Palavras = cont.split(" ").length - 1;
            if (time < 1) {
                campo.attr("disabled", true);
                campo.css("background-color", "lightgrey");
                clearInterval(Idcountdown);
                insertScoreBoard();

                // if (Palavras > 3 && cont.length > 10) {
                //     alert('Parabéns');
                // } else {
                //     alert('Muito ruim');
                // }
            }
        }, 1000);
    });
}
function ValidationEdge(){
    var frase = $(".frase").text();
    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length);
        if (comparavel == digitado) {
            campo.addClass('borda-verde');
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}


function restart() {
    $('#restart').on("click", function () {
        campo.attr('disabled', false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $('#contador').text(tempoInicial);
        campo.css("background-color", "white");
        startupTiming();
        var frase = $(".frase").text();
        campo.on("input", function () {
            var digitado = campo.val();
            var comparavel = frase.substr(0,digitado.length);
            if (comparavel == digitado) {
                campo.addClass('borda-verde');
                campo.removeClass("borda-vermelha");
            } else {
                campo.addClass("borda-vermelha");
                campo.removeClass("borda-verde");
            }
        });
        campo.addClass("borda-normal");
        campo.removeClass("borda-normal");
        campo.removeClass("borda-verde");
    });
}
function insertScoreBoard(){
    var table = $('.placar').find('tbody');
    var user = "Yan";
    var numWords = $('#contador-palavras').text();
    var buttonRemove = "<a href='#'><td class='remove'>Remove</td></a>";
    var row = novalinha(user, numPalavras);
        table.append(row); 
        $('.placar').stop().slideToggle(1000);

} 
$('.remove').click(function(event){
    event.preventDefault();
    var linha = $(this).parent();
    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();
    }, 1000)
})
function newRow(user, numPalavras) {
    var row = $('<tr>');
    var ColumnUser = $('<td>').text(user);
    var columnWords = $('<td>').text(numPalavras);
    var columnRemove = $('<td>').addClass('remove');
    var link = $('<a>').attr('href', '#');
    var icone = $('<td>').addClass('remove');
    link.append(icone);
    console.log(link);
}
function MostrarPlacar(){
    var posicaoPlacar = $('.placar').stop().slideToggle(1000);
}
function scrollPlacar(){
    $('.placar').offset().top;
    $('body').animate(
    {
        scrollTop: "30px"
    }, 1000);
}
function teste(){
    var testando = $('#teste').offset().top;
    $('body').animate({
        scrollTop: testando+'px'
    })
}
teste();