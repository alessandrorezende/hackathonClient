<?php
header ("Access-Control-Allow-Origin: *");
include "conectar.php";

$result = array(

    'total' => 0,

    'salas' => null

);


$sql = mysql_query("SELECT nome FROM tb_salas WHERE id = (SELECT MAX(id) FROM tb_salas)");

$contador = mysql_num_rows($sql);


$result['total'] = $contador;



if($result['total'] > 0){

    while($linha = mysql_fetch_assoc($sql)){

        $arr[] = $linha;

    }

    

    $result['salas'] = $arr;

}



//echo strip_tags(json_encode($result));

echo json_encode($result);


?>


