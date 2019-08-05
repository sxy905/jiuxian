<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $json_string=file_get_contents("data.json");

    $data=json_decode($json_string,true);

    $db = mysqli_connect("127.0.0.1","root","","jiuxian");
    
    // // 检测连接
    // if ($db ->connect_error) {
    //     die("fail: " . $db ->connect_error);
    // } else{
    //     echo "success";
    // }
    
    for ($i=0; $i <count($data) ; $i++) { 
        $goodsID=$data[$i]["goodsID"];
        $goodsName=$data[$i]["goodsName"];
        $goodsSrc=$data[$i]["goodsSrc"];
        $goodsDes=$data[$i]["goodsDes"];
        $goodsClass=$data[$i]["goodsClass"];
        $goodsNowPrice=$data[$i]["goodsNowPrice"];
        $goodsPrePrice=$data[$i]["goodsPrePrice"];
        $goodsIcon=$data[$i]["goodsIcon"];
        $goodsText=$data[$i]["goodsText"];
        $createDate=  date('Y-m-d h:i:s', time());
        $sql="INSERT INTO  `t_jx_goodslist` (
            `goodsID` ,
            `goodsName` ,
            `goodsSrc` ,
            `goodsDes` ,
            `goodsClass` ,
            `goodsNowPrice` ,
            `goodsPrePrice` ,
            `goodsIcon` ,
            `goodsText` ,
            `createDate`
            )
            VALUES ('$goodsID','$goodsName','$goodsSrc', '$goodsDes', '$goodsClass','$goodsNowPrice','$goodsPrePrice','$goodsIcon', '$goodsText','$createDate')";
        echo $sql;
        
        $result = mysqli_query($db,$sql);

        var_dump($result);  //查看是否成功
    }
    echo count($data);
?>