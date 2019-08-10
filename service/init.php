<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian"); //连接数据库
    $json_string=file_get_contents("goodlist.json");  //json 数据
    $data = json_decode($json_string,true);
    // print_r($data);  //数据打印
    
    echo count($data);
    for ($i=0; $i <count($data); $i++) { 
        $title = $data[$i]["title"];
        $price = $data[$i]["price"];
        $src = $data[$i]["src"];
        $pro = $data[$i]["pro"];
        $goodid = $data[$i]["goodid"];
        $type = $data[$i]["type"];

        $sql="INSERT INTO `t_jx_goodlist`(`src`, `title`, `pro`, `price`, `goodid`, `type`) VALUES ('$src','$title','$pro','$price','$goodid','$type')";
        echo $sql;
        $result = mysqli_query($conn,$sql);
        // var_dump($result);  //查看是否成功
        
    }
    mysqli_close($conn); //关闭连接
?>