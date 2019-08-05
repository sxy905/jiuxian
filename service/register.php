<?php
header("Content-Type: text/html;charset=utf-8"); 

$db = mysqli_connect("127.0.0.1","root","","jiuxian");

$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];

$sql = "INSERT INTO `t_jx_userlist` (`password`, `phone`) VALUES ('$password', '$phone')";
$result = mysqli_query($db, $sql);

$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);
?>