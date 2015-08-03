//Quando o Documento HTML estiver carregado
/*jQuery(document).ready(function(){
 //Ao clicar em um elemento do tipo button
 jQuery("button").click(function(){
 //Requisição Ajax
 jQuery.ajax({
 url: "http://www.hackathongse.tecnologia.ws/teste.php", //URL de destino
 dataType: "json", //Tipo de Retorno
 success: function(json){ //Se ocorrer tudo certo
 var msg = "Nome: " + json.salas.nome + "\n";
 msg += "Senha: " + json.salas.senha + "\n";
 msg += "SenhaAdm: " + json.salas.senhaAdm;
 alert(msg);
 }
 });
 });
 });*/

//popular salas
/*
 $(document).ready(function () {
 $.ajax({
 type: "POST",
 url: "http://www.hackathongse.tecnologia.ws/BuscarSalas.php",
 //data: {montadora: $("#montadora").val()},
 dataType: "json",
 success: function (json) {
 var options = "";
 
 for (i = 0; i < json.total_salas; i++) {
 options += '<option value="' + json.salas[i].nome + '">' + json.salas[i].nome + '</option>';
 }
 $("#salas").html(options);
 }
 });
 });
 */

/*
 //preencher nome da sala
 $(document).ready(function () {
 $("#btn").click(function () {
 $.ajax({
 type: "POST",
 url: "http://www.hackathongse.tecnologia.ws/nomeSala.php",
 //data: ,
 dataType: "json",
 success: function (json) {
 var options = "";
 options += 'sala: ' + json.salas[0].nome;
 $("#sala").html(options);
 }
 });
 });
 });
 
 */
//----------------------------------------------------------------------------------------------------
//buscar dados
$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "http://www.hackathongse.tecnologia.ws/buscarOficina.php",
        dataType: "json",
    })
            .done(function (json) {
                var options = "";
                for (i = 0; i < json.total; i++) {
                    options += '<option value="' + json.oficinas[i].id_oficina + '">' + json.oficinas[i].datahorario + " - " + json.oficinas[i].nome + '</option>';
                }
                $("#selecionaoficina").html(options);

            });
});

//----------------------------------------------------------------------------------------------------
//salvar dados inscricao
$(document).ready(function () {
    $("#botaosalvarinscricao").click(function () {
        var c = $("#cpf").val();
        var ido = $("#selecionaoficina").val();
        alert(ido);
        if (c == "" || ido == "") {
            alert("Informe o Cpf e selecione a oficina!");
        } else {
            $.ajax({
                method: "POST",
                url: "http://www.hackathongse.tecnologia.ws/salvarOficina.php",
                data: {cpf: c, idoficina: ido},
                dataType: "json",
            })
                    .done(function (json) {
                        if (json.msg == "Pessoa não encontrada!") {
                            alert("Cpf não cadastrado!");
                        } else {
                            alert("Inscrição realizada com sucesso!");
                        }

                    });
        }

    });
});

//----------------------------------------------------------------------------------------------------
//salvar dados cadastro
$(document).ready(function () {
    $("#botaosalvarcadastro").click(function () {
        var n = $("#nome").val();
        var c = $("#cpf").val();
        var t = $("#telefone").val();
        if (n == "" || c == "" || t == "") {
            alert("Preencher todos os campos!");
        } else {
            $.ajax({
                method: "POST",
                url: "http://www.hackathongse.tecnologia.ws/salvarInscricao.php",
                data: {nome: n, cpf: c, telefone: t}
            })
                    .done(function (msg) {
                        alert("Cadastro realizada com sucesso!");
                    });
        }
    });
});
//----------------------------------------------------------------------------------------------------