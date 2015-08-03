<?php
header ("Access-Control-Allow-Origin: *");
include "conectar.php";

$result = array(

    'total_salas' => 0,

    'salas' => null

);


$sql = mysql_query("SELECT * FROM tb_salas");

$contador = mysql_num_rows($sql);


$result['total_salas'] = $contador;


if($result['total_salas'] > 0){

    while($linha = mysql_fetch_assoc($sql)){

        $arr[] = $linha;
    }

    $result['salas'] = $arr;

}


echo json_encode($result);


?>


