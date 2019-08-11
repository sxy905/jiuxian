<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","jiuxian");

    $sql_banner_1="SELECT * FROM t_jx_advlist WHERE type='jx_banner_1'";
    $result_banner_1=mysqli_query($conn,$sql_banner_1);
    $data_banner_1=mysqli_fetch_all($result_banner_1,MYSQLI_ASSOC);  //数组

    $sql_banner_s="SELECT * FROM t_jx_advlist WHERE type='jx_banner_s'";
    $result_banner_s=mysqli_query($conn,$sql_banner_s);
    $data_banner_s=mysqli_fetch_all($result_banner_s,MYSQLI_ASSOC);  //数组

    $sql_banner_r1="SELECT * FROM t_jx_advlist WHERE type='jx_banner_r1'";
    $result_banner_r1=mysqli_query($conn,$sql_banner_r1);
    $data_banner_r1=mysqli_fetch_all($result_banner_r1,MYSQLI_ASSOC);  //数组

    $sql_banner_r2="SELECT * FROM t_jx_advlist WHERE type='jx_banner_r2'";
    $result_banner_r2=mysqli_query($conn,$sql_banner_r2);
    $data_banner_r2=mysqli_fetch_all($result_banner_r2,MYSQLI_ASSOC);  //数组



    $sql_banner_F1="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_F1'";
    $result_banner_F1=mysqli_query($conn,$sql_banner_F1);
    $data_banner_F1=mysqli_fetch_all($result_banner_F1,MYSQLI_ASSOC);  //数组

    $sql_banner_F2="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_F2'";
    $result_banner_F2=mysqli_query($conn,$sql_banner_F2);
    $data_banner_F2=mysqli_fetch_all($result_banner_F2,MYSQLI_ASSOC);  //数组

    $sql_banner_F3="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_F3'";
    $result_banner_F3=mysqli_query($conn,$sql_banner_F3);
    $data_banner_F3=mysqli_fetch_all($result_banner_F3,MYSQLI_ASSOC);  //数组

    $sql_banner_F4="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_F4'";
    $result_banner_F4=mysqli_query($conn,$sql_banner_F4);
    $data_banner_F4=mysqli_fetch_all($result_banner_F4,MYSQLI_ASSOC);  //数组

    $sql_banner_F5="SELECT contents FROM t_jx_advlist WHERE type='jx_banner_F5'";
    $result_banner_F5=mysqli_query($conn,$sql_banner_F5);
    $data_banner_F5=mysqli_fetch_all($result_banner_F5,MYSQLI_ASSOC);  //数组

    $sql_layer_img="SELECT * FROM t_jx_advlist WHERE type='jx_layer_img'";
    $result_layer_img=mysqli_query($conn,$sql_layer_img);
    $data_layer_img=mysqli_fetch_all($result_layer_img,MYSQLI_ASSOC);  //数组

    $sql_index_tab="SELECT * FROM t_jx_advlist WHERE type='jx_index_tab'";
    $result_index_tab=mysqli_query($conn,$sql_index_tab);
    $data_index_tab=mysqli_fetch_all($result_index_tab,MYSQLI_ASSOC);  //数组

    $sql_adv_tab="SELECT * FROM t_jx_advlist WHERE type='jx_adv_tab'";
    $result_adv_tab=mysqli_query($conn,$sql_adv_tab);
    $data_adv_tab=mysqli_fetch_all($result_adv_tab,MYSQLI_ASSOC);  //数组


    $sql_adv_tab_box="SELECT * FROM t_jx_advlist WHERE type='jx_adv_tab_box'";
    $result_adv_tab_box=mysqli_query($conn,$sql_adv_tab_box);
    $data_adv_tab_box=mysqli_fetch_all($result_adv_tab_box,MYSQLI_ASSOC);  //数组

    $sql_F1_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F1_menu'";
    $result_F1_menu=mysqli_query($conn,$sql_F1_menu);
    $data_F1_menu=mysqli_fetch_all($result_F1_menu,MYSQLI_ASSOC);  //数组

    $sql_F2_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F2_menu'";
    $result_F2_menu=mysqli_query($conn,$sql_F2_menu);
    $data_F2_menu=mysqli_fetch_all($result_F2_menu,MYSQLI_ASSOC);  //数组

    $sql_F3_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F1_menu'";
    $result_F3_menu=mysqli_query($conn,$sql_F3_menu);
    $data_F3_menu=mysqli_fetch_all($result_F3_menu,MYSQLI_ASSOC);  //数组

    $sql_F4_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F1_menu'";
    $result_F4_menu=mysqli_query($conn,$sql_F4_menu);
    $data_F4_menu=mysqli_fetch_all($result_F4_menu,MYSQLI_ASSOC);  //数组

    $sql_F5_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F1_menu'";
    $result_F5_menu=mysqli_query($conn,$sql_F5_menu);
    $data_F5_menu=mysqli_fetch_all($result_F5_menu,MYSQLI_ASSOC);  //数组



    $sql_F1_tab_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F1_tab_menu'";
    $result_F1_tab_menu=mysqli_query($conn,$sql_F1_tab_menu);
    $data_F1_tab_menu=mysqli_fetch_all($result_F1_tab_menu,MYSQLI_ASSOC);  //数组

    $sql_F2_tab_menu="SELECT * FROM t_jx_advlist WHERE type='jx_F2_tab_menu'";
    $result_F2_tab_menu=mysqli_query($conn,$sql_F2_tab_menu);
    $data_F2_tab_menu=mysqli_fetch_all($result_F2_tab_menu,MYSQLI_ASSOC);

    $sql_logo_recom="SELECT * FROM t_jx_advlist WHERE type='jx_logo_recom'";
    $result_logo_recom=mysqli_query($conn,$sql_logo_recom);
    $data_logo_recom=mysqli_fetch_all($result_logo_recom,MYSQLI_ASSOC);  //数组

    $sql_floor="SELECT * FROM t_jx_advlist WHERE type='jx_floor'";
    $result_floor=mysqli_query($conn,$sql_floor);
    $data_floor=mysqli_fetch_all($result_floor,MYSQLI_ASSOC);  //数组

    $sql_floor_text="SELECT * FROM t_jx_advlist WHERE type='jx_floor_text'";
    $result_floor_text=mysqli_query($conn,$sql_floor_text);
    $data_floor_text=mysqli_fetch_all($result_floor_text,MYSQLI_ASSOC);  //数组

    $sql_adv_img="SELECT * FROM t_jx_advlist WHERE type='jx_adv_img'";
    $result_adv_img=mysqli_query($conn,$sql_adv_img);
    $data_adv_img=mysqli_fetch_all($result_adv_img,MYSQLI_ASSOC);  //数组

    $sql_main_title="SELECT * FROM t_jx_advlist WHERE type='jx_main_title'";
    $result_main_title=mysqli_query($conn,$sql_main_title);
    $data_main_title=mysqli_fetch_all($result_main_title,MYSQLI_ASSOC);  //数组

    // $sql_adv_img="SELECT * FROM t_jx_advlist WHERE type='jx_adv_img'";
    // $result_adv_img=mysqli_query($conn,$sql_adv_img);
    // $data_adv_img=mysqli_fetch_all($result_adv_img,MYSQLI_ASSOC);  //数组
    //汉字转码
    function decodeUnicode($str){
        return preg_replace_callback('/\\\\u([0-9a-f]{4})/i',
        create_function(
            '$matches',
            'return mb_convert_encoding(pack("H*", $matches[1]), "UTF-8", "UCS-2BE");'
        ),
        $str);
    }
    $data = array("data_banner_1" => "","data_banner_s" => "", "data_banner_r1" => "", "data_banner_r2" => "","data_banner_F1" => "", "data_banner_F2" => "", "data_banner_F3" => "","data_banner_F4" => "", "data_banner_F5" => "", "data_layer_img" => "","data_index_tab" => "", "data_adv_tab" => "", "data_adv_tab_box" => "", "data_F1_menu" => "", "data_F2_menu" => "","data_F3_menu" => "", "data_F4_menu" => "", "data_F5_menu" => "","data_F1_tab_menu" => "", "data_F2_tab_menu" => "", "data_logo_recom" => "","data_floor" => "", "data_floor_text" => "", "data_adv_img" => "","data_main_title" => "");
    $data["data_banner_1"] = $data_banner_1;
    $data["data_banner_s"] = $data_banner_s;
    $data["data_banner_r1"] = $data_banner_r1;
    $data["data_banner_r2"] = $data_banner_r2;
    $data["data_banner_F1"] = $data_banner_F1;
    $data["data_banner_F2"] = $data_banner_F2;
    $data["data_banner_F3"] = $data_banner_F3;
    $data["data_banner_F4"] = $data_banner_F4;
    $data["data_banner_F5"] = $data_banner_F5;
    $data["data_layer_img"] = $data_layer_img;
    $data["data_index_tab"] = $data_index_tab;
    $data["data_adv_tab"] = $data_adv_tab;
    $data["data_adv_tab_box"] = $data_adv_tab_box;
    $data["data_F1_menu"] = $data_F1_menu;
    $data["data_F2_menu"] = $data_F2_menu;
    $data["data_F3_menu"] = $data_F3_menu;
    $data["data_F4_menu"] = $data_F4_menu;
    $data["data_F5_menu"] = $data_F5_menu;
    $data["data_F1_tab_menu"] = $data_F1_tab_menu;
    $data["data_F2_tab_menu"] = $data_F2_tab_menu;
    $data["data_logo_recom"] = $data_logo_recom;
    $data["data_floor"] = $data_floor;
    $data["data_floor_text"] = $data_floor_text;
    $data["data_adv_img"] = $data_adv_img;
    $data["data_main_title"] = $data_main_title;
    // $data["data_banner_1"] = $data_banner_1;
    $json= json_encode($data, true);
    echo $json;
?>