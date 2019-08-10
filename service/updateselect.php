<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $goodid=$_REQUEST["goodid"];
    $isActive=$_REQUEST["isActive"];
    $conn=new mysqli("127.0.0.1","root","","jiuxian");
    if($goodid==""){  //全选更新整个数据
        $sql="UPDATE `t_jx_cartlist` SET `isActive`=$isActive";
    }elseif($isActive==-1){  // 删除
        $sql="DELETE FROM `t_jx_cartlist` WHERE goodid='$goodid'";
    }else{ //单选更新单个数据
        $sql="UPDATE `t_jx_cartlist` SET `isActive`=$isActive WHERE goodid='$goodid'";
    }
    $res=mysqli_query($conn,$sql);
    echo $res;   
?>