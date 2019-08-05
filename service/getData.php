<?php
//设置编码格式
header("Content-type:application/json;charset=utf-8");    
include 'connect.php';//相当于复制connect.php的文件内容过这里
//获取全屏轮播图信息


$sql = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_1'";  
$res = mysqli_query($conn,$sql); 
$data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分

//获取F1轮播信息
$sql2 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_F1'"; 
$res2=$conn->query($sql2);
$data2=$res2->fetch_all(MYSQLI_ASSOC);

//获取F2轮播信息
$sql3 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_F2'"; 	
$res3=$conn->query($sql3);
$data3=$res3->fetch_all(MYSQLI_ASSOC);

//获取F3轮播信息
$sql4 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_F3'"; 	
$res4=$conn->query($sql4);
$data4=$res4->fetch_all(MYSQLI_ASSOC);

//获取F4轮播信息
$sql5 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_F4'"; 	
$res5=$conn->query($sql5);
$data5=$res5->fetch_all(MYSQLI_ASSOC);

//获取F5轮播信息
$sql6 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_F5'"; 	
//执行语句
$res6=$conn->query($sql6);
$data6=$res6->fetch_all(MYSQLI_ASSOC);

//获取全屏轮播图右侧1
$sql7 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_r1'"; 	
//执行语句
$res7=$conn->query($sql7);
$data7=$res7->fetch_all(MYSQLI_ASSOC);

//获取全屏轮播图右侧1
$sql8 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'slider_r2'"; 	
//执行语句
$res8=$conn->query($sql8);
$data8=$res8->fetch_all(MYSQLI_ASSOC);

//获取tab1
$sql9 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass =  'tab_1'"; 	
//执行语句
$res9=$conn->query($sql9);
$data9=$res9->fetch_all(MYSQLI_ASSOC);


//获取tab1
$sql10 = "SELECT * 
FROM  `t_jx_goodslist` t
WHERE t.goodsClass = 'slider_s'"; 	
//执行语句
$res10=$conn->query($sql10);
$data10=$res10->fetch_all(MYSQLI_ASSOC);

$goodlist=array(
    'slider_1'=>$data,
    'slider_F1'=>$data2,
    'slider_F2'=>$data3,
    'slider_F3'=>$data4,
    'slider_F4'=>$data5,
    'slider_F5'=>$data6,
    'slider_r1'=>$data7,
    'slider_r2'=>$data8,
    'tab_1'=>$data9,
    'slider_s'=>$data10
);
$json = json_encode($goodlist);
echo decodeUnicode($json);  
$res->close();//关掉结果集
$res2->close();//关掉结果集
$res3->close();//关掉结果集
$res4->close();//关掉结果集
$res5->close();//关掉结果集
$res6->close();//关掉结果集
$res7->close();//关掉结果集
$res8->close();//关掉结果集
$res9->close();//关掉结果集
$res10->close();//关掉结果集
$conn->close();//断开连接 
?>