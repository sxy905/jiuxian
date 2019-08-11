<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian"); //连接数据库
    $json_string=file_get_contents("Data_adv.json");  //json 数据
    $data = json_decode($json_string,true);

    function arrayRecursive(&$array, $function, $apply_to_keys_also = false)
    {
        static $recursive_counter = 0;
        if (++$recursive_counter > 1000) {
            die('possible deep recursion attack');
        }
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                arrayRecursive($array[$key], $function, $apply_to_keys_also);
            } else {
                $array[$key] = $function($value);
            }
    
            if ($apply_to_keys_also && is_string($key)) {
                $new_key = $function($key);
                if ($new_key != $key) {
                    $array[$new_key] = $array[$key];
                    unset($array[$key]);
                }
            }
        }
        $recursive_counter--;
    }

    function JSON($array) {
        arrayRecursive($array, 'urlencode', true);
        $json = json_encode($array);
        return urldecode($json);
    }
    for ($i=0; $i <count($data); $i++) { 
        $contents = JSON($data[$i]["contents"]);
        $type = $data[$i]["type"];
        $sql="INSERT INTO `t_jx_advlist`(`type`, `contents`) VALUES ('$type','$contents')";
        echo $sql;
        $res = mysqli_query($conn,$sql);
        echo $res;
    }
    mysqli_close($conn); //关闭连接
?>