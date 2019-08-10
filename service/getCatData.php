<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian");
    $sql="SELECT * FROM t_jx_cartlist";
    $sql = "SELECT t_jx_cartlist.*,t_jx_goodlist.title,t_jx_goodlist.src FROM t_jx_cartlist , t_jx_goodlist WHERE t_jx_cartlist.goodid = t_jx_goodlist.goodid";
    $res=mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
    echo json_encode($data, true);
?>