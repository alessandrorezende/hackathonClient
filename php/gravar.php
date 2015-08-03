<?php
	header ("Access-Control-Allow-Origin: *");
	include "conectar.php";

	$nome	  = $_POST["nome"];
	$senha 	  = $_POST["senha"];
	$senhaAdm = $_POST["senhaAdm"];

	$sql = mysql_query("INSERT INTO tb_salas (nome, senha, senhaAdm) VALUES ('$nome', '$senha', '$senhaAdm')");
?>