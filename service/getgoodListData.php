<?php
     header("Content-Type: text/html;charset=utf-8"); 
     $conn=new mysqli("127.0.0.1","root","","jiuxian");

     $sql_a="SELECT * FROM t_jx_goodlist WHERE type='giu_b' OR type='giu_d' OR type='giu_t'";
     $result_a=mysqli_query($conn,$sql_a);
     $data_a=mysqli_fetch_all($result_a,MYSQLI_ASSOC);  //数组

     $sql_b="SELECT * FROM t_jx_goodlist WHERE type='giu_b'";
     $result_b=mysqli_query($conn,$sql_b);
     $data_b=mysqli_fetch_all($result_b,MYSQLI_ASSOC);  //数组

     $sql_d="SELECT * FROM t_jx_goodlist WHERE type='giu_d'";
     $result_d=mysqli_query($conn,$sql_d);
     $data_d=mysqli_fetch_all($result_d,MYSQLI_ASSOC);  //数组

     $sql_t="SELECT * FROM t_jx_goodlist WHERE type='giu_t'";
     $result_t=mysqli_query($conn,$sql_t);
     $data_t=mysqli_fetch_all($result_t,MYSQLI_ASSOC);  //数组

     $data = array("data_a" => "","data_b" => "", "data_d" => "", "data_t" => "");
     $data["data_a"] = $data_a;
     $data["data_b"] = $data_b;
     $data["data_d"] = $data_d;
     $data["data_t"] = $data_t;
     echo json_encode($data, true);
?>