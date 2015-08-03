<?

$usuario = "hackathongse";

$senha = "Gohorse1@";

$banco = "hackathongse";

$hostname = "mysql01.hackathongse.hospedagemdesites.ws";

//

mysql_connect($hostname, $usuario, $senha) or die('Erro na conexao');

mysql_select_db($banco) or die('Erro na Seleção do Banco');



//codificacao de carateres

mysql_query("SET NAMES 'utf8' ");

mysql_query("SET character_set_connection=utf8");

mysql_query("SET character_set_client=utf8");

mysql_query("SET character_set_results=utf8");



?>