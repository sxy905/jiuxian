<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian"); //连接数据库
    $json_string=file_get_contents("Data_adv.json");  //json 数据
    $data = json_decode($json_string,true);
    // print_r($data);  //数据打印
    // print_r($data[0]["contents"]);
    // echo count($data);
    for ($i=0; $i <count($data); $i++) { 
        $contents = json_encode($data[$i]["contents"]);
        // echo $contents;
        $type = $data[$i]["type"];
        $sql="INSERT INTO `t_jx_advlist`(`type`, `contents`) VALUES ('$type','$contents')";
        echo $sql;
        $res = mysqli_query($conn,$sql);
        echo $res;
    }
    mysqli_close($conn); //关闭连接
?>