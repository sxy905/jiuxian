<?php
header("Content-Type: text/html;charset=utf-8"); 
# 先获取提交的参数
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
// $username ="15119109312";
// $password ="731f55bde88f4eac";
# 连接数据库并且到数据库中进行查询
$db = mysqli_connect("127.0.0.1", "root", "", "jiuxian");
 
# 用户名存在 && 密码要正确
# 检查指定的用户名
$sql = "SELECT * FROM  t_jx_userlist WHERE phone = '$username'";
$result = mysqli_query($db,$sql);
$data = array("status" => "", "msg" => "", "data" => "");
if(mysqli_num_rows($result) == "0")
{
  $data["status"] = "error";
  $data["msg"] = "登录失败：该账户不存在！";
}else{
  /* 检查密码是否正确 */
  $res = mysqli_fetch_array($result);
  if($res["password"] != $password)
  {
    $data["status"] = "error";
    $data["msg"] = "登录失败：密码不正确！";
  }else{
    $data["status"] = "success";
    $data["msg"] = "恭喜你，登录成功！";
  }
}
// var_dump($data);
echo json_encode($data, true);
?>