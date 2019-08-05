<?php
	$servername='localhost';//主机名
	$username='root';//用户名
	$password='';//密码
	$dbname='jiuxian';//数据库名称
	
	//创建数据库连接
	$conn=new mysqli($servername,$username,$password,$dbname);
	
	// 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    //查询前设置编码，防止输出乱码
	$conn->set_charset('utf8');	
	
	//汉字转码
	function decodeUnicode($str){
		return preg_replace_callback('/\\\\u([0-9a-f]{4})/i',
		create_function(
			'$matches',
			'return mb_convert_encoding(pack("H*", $matches[1]), "UTF-8", "UCS-2BE");'
		),
		$str);
	}
?>