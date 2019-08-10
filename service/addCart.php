<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $price=$_REQUEST["price"];
    $goodid=$_REQUEST["goodid"];
    $num=$_REQUEST["num"];
    $src=$_REQUEST["src"];  
    $total=$price*$num;

    $conn=new mysqli("127.0.0.1","root","","jiuxian");
    $sql="SELECT * FROM t_jx_cartlist WHERE goodid='$goodid'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_num_rows($res);

    if($row==0){
        $insetSql="INSERT INTO `t_jx_cartlist`(`goodid`, `cartid`, `num`, `price`, `total`, `isActive`) VALUES ('$goodid',NULL,$num,'$price','$total',1)";
        mysqli_query($conn, $insetSql);
    }else{
     /* 先查询先前的内容 + 个数 */
        $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
        print_r($data);
        $nums = $data[0]["num"] + $num;
        $totals = $data[0]["price"] * $nums;
        /* 更新 */
        $updateSql = "UPDATE t_jx_cartlist SET num='$nums',total='$totals' WHERE goodid='$goodid'"; 
        mysqli_query($conn,$updateSql);
    }
?>