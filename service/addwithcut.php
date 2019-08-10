<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $goodid=$_REQUEST["goodid"];
    $num=$_REQUEST["num"];
    $price=$_REQUEST["price"];
    $total=$num*$price;
    $conn=new mysqli("127.0.0.1","root","","jiuxian");
    $sql="UPDATE `t_jx_cartlist` SET `num`='$num',`total`='$total'WHERE goodid='${goodid}'";
    $res=mysqli_query($conn,$sql);
    echo $res;
?>