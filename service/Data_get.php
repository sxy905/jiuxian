<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $json_string=file_get_contents("data_index.json");
    $data=json_encode($json_string,true);
    echo $data;
    // echo file_get_contents("data_index.json");
?>