<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian");

    $sql_banner_1="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_1'";
    $result_banner_1=mysqli_query($conn,$sql_banner_1);
    $data_banner_1=mysqli_fetch_all($result_banner_1,MYSQLI_ASSOC);  //数组
    // print_r($data_banner_1);
    // $sql_b="SELECT * FROM t_jx_goodlist WHERE type='giu_b'";
    // $result_b=mysqli_query($conn,$sql_b);
    // $data_b=mysqli_fetch_all($result_b,MYSQLI_ASSOC);  //数组

    // $sql_d="SELECT * FROM t_jx_goodlist WHERE type='giu_d'";
    // $result_d=mysqli_query($conn,$sql_d);
    // $data_d=mysqli_fetch_all($result_d,MYSQLI_ASSOC);  //数组

    // $sql_t="SELECT * FROM t_jx_goodlist WHERE type='giu_t'";
    // $result_t=mysqli_query($conn,$sql_t);
    // $data_t=mysqli_fetch_all($result_t,MYSQLI_ASSOC);  //数组

    $data = array("data_banner_1" => "","data_b" => "", "data_d" => "", "data_t" => "");
    $data["data_banner_1"] = $data_banner_1;
    echo json_encode($data, true);
?>