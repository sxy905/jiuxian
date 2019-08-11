$(function () {
    //帮助中心显示问题
    $(".help_head_nav").hover(function () {
        $(".help_info").css("display", "block");
    }, function () {
        $(".help_info").css("display", "none");
    })

    $(".help_info>ul>li").hover(function () {
        $(this).find("a").css("text-decoration", "underline");
    }, function () {
        $(this).find("a").css("text-decoration", "none");
    })

    $(".jx_main").eq(0).addClass("block1");

    //切换问题
    $(".reg_type").on("click", ".regist", function () {
        let index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".jx_main").eq(index).addClass("block1").siblings().removeClass("block1");
        return false;
    })

    let regUsename = /^[A-Za-z]{6,8}$/;

    let regTelephone = /^1[3-9]\d{9}$/; /* 1开头 第二位3-9 后面全都是数字   11位 */

    let regPassword = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,20}$/;

    let regEmail = /^[\w-+&%]+@[\w-+&%]+\.[a-zA-Z]+$/;

    let phone_G = $.trim($("#phone").val());
    //失去焦点
    $("#phone").blur(function () {
        phone_G = $.trim($("#phone").val());
        let next = $(this).next();
        let next2 = $(this).next().next();
        //有值
        if (phone_G) {
            if (regTelephone.test(phone_G)) { //符合正则表达式
                next.css("display", "none");
                next2.css("display", "block");
                next2.removeClass("st").addClass("rig");
                $(this).removeClass("t_form");
            } else {
                next.text("请输入正确的手机号码");
                next.css("background-color", "#ff6666");
                $(this).addClass("t_form");
            }

        } else { //无值
            next.css("display", "block");
            next.css("background-color", "#ff6666");
            next.text("请输入手机号");
            $(this).addClass("t_form");
            next2.css("display", "block");
        }
    })
    //焦点
    $("#phone").focus(function () {
        let next = $(this).next();
        let next2 = $(this).next().next();
        next.text("请输入11位手机号");
        next.css("display", "block");
        next.css("background-color", "#999");
        next2.css("display", "none");
    })

    //验证码
    let captcha = new CaptchaMini({
        lineWidth: 0,
        lineWidth: 0, //线条宽度
        lineNum: 0, //线条数量
        dotR: 0, //点的半径
        dotNum: 0, //点的数量
        preGroundColor: [0, 0], //前景色区间
        backGroundColor: [255, 255], //背景色区间
        fontSize: 60, //字体大小
        //字体类型
        length: 4 //验证码长度
    });
    let imgCode_G = "";
    captcha.draw(document.querySelector('#regCapIcon'), r => {
        console.log(r, "验证码");
        imgCode_G = r;
        $("#testCard").trigger("blur");
    });

    let code_G = $.trim($("#testCard").val());
    $("#testCard").blur(function () {
        code_G = $.trim($("#testCard").val());
        let next = $(this).next();
        if (code_G) {
            if (code_G.toLowerCase() == imgCode_G.toLowerCase()) {
                next.css("display", "none");
                $(this).removeClass("t_form");
                next.removeClass("b_next_no_num");
            } else {
                next.css("display", "block");
                next.text("请输入正确的验证码");
                next.css("background-color", "#ff6666");
                $(this).addClass("t_form");
            }
        } else {
            next.addClass("b_next_no_num");
            next.text("请输入验证码");
            $(this).addClass("t_form");
        }
    })


    //以下代码仅为演示用,具体传入参数请参看接口描述详情页.
    //需要引用jquery库

    function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear() +
            "" // "年"
            +
            (month >= 10 ? month : "0" + month) +
            "" // "月"
            +
            (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate()) +
            "" +
            (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours()) +
            "" +
            (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes()) +
            "" +
            (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
        return datetime;
    }

    var countdown = 60;

    function settime() {
        let timer = setTimeout(settime, 1000);
        if (countdown == 0) {
            $("#getMsg").attr("disabled", false);
            $("#getMsg").html("发送短信验证码");
            countdown = 60;
            clearInterval(timer);
        } else {
            $("#getMsg").attr("disabled", true);
            $("#getMsg").html("重新发送(" + countdown + ")");
            countdown--;
        }

    }
    //电话号码
    //获取电话验证码
    let msgCodeText = "";

    $("#getMsg").click(function () {
        let next = $(this).next();
        msgCodeText = parseInt(Math.random() * 1000000);
        // msgCodeText = "123456"
        let minute = 3;
        let text = $.trim($("#phone").val());;
        if(text==""){
            alert("请输入电话号码");
        }
        if (text && regTelephone.test(text)) {
            next.css("display", "none");
            $(this).removeClass("t_form");
            next.removeClass("b_next_no_num");
            /* 发送网络请求：发短信 */
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-2',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '101615', //这里需要改成自己的appid
                    "showapi_sign": 'e21eb07617884449b2a734d328f6f162',  //这里需要改成自己的应用的密钥secret
                    "content":`您好,${text},验证码是${msgCodeText}, 本次登录密码有效时间为[minute]分钟`,
                    "title":"某某公司名称",
                    "notiPhone":text
                },
            
                error: function(XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function(result) {
                    console.log(result) //console变量在ie低版本下不能用
                    alert(result.showapi_res_code)
                }
            });
            

            if (typeof ($("#getMsg").attr("disabled")) == "undefined") {
                //不存在执行
                settime();
            } else {
                //存在执行
            }

        } else {
            next.addClass("b_next_no_num");
            next.text("请输入验证码");
            $(this).addClass("t_form");
        }
    })

    //短信验证码
    let msg_G = $.trim($("#msg").val());
    $("#msg").blur(function () {
        msg_G = $.trim($("#msg").val());
        let next = $(this).next();
        if (msg_G) {
            if (msg_G == msgCodeText) {
                next.css("display", "none");
                $(this).removeClass("t_form");
                next.removeClass("b_next_no_num");
            } else {
                next.css("display", "block");
                next.text("请输入正确的短信验证码");
                next.css("background-color", "#ff6666");
                $(this).addClass("t_form");
            }
        } else {
            next.addClass("b_next_no_num");
            next.text("请输入验证码");
            $(this).addClass("t_form");
        }
    })

    //密码
    //失去焦点
    let passwordA_G = $.trim($("#passwordA").val());
    $("#passwordA").blur(function () {
        passwordA_G = $.trim($("#passwordA").val());
        let next = $(this).next();
        let next2 = $(this).next().next();
        //有值
        if (passwordA_G) {
            if (regPassword.test(passwordA_G)) { //符合正则表达式
                next.css("display", "none");
                next2.css("display", "block");
                next2.removeClass("st").addClass("rig");
                $(this).removeClass("t_form");

            } else {
                next.text("密码长度为8-20位");
                next.css("background-color", "#ff6666");
                $(this).addClass("t_form");
            }

        } else { //无值
            next.css("display", "block");
            next.css("background-color", "#ff6666");
            next.text("请输入密码");
            $(this).addClass("t_form");
            next2.css("display", "block");
        }
    })
    //焦点
    $("#passwordA").focus(function () {
        let next = $(this).next();
        let next2 = $(this).next().next();
        next.text("8-20位字符，数字、字母、符号至少包含两种");
        next.css("display", "block");
        next.css("background-color", "#999");
        next2.css("display", "none");
    })

    //验证密码
    //失去焦点
    let passwordB_G = $.trim($("#passwordB").val());
    $("#passwordB").blur(function () {
        passwordB_G = $.trim($("#passwordB").val());
        let next = $(this).next();
        let next2 = $(this).next().next();
        //有值
        if (passwordB_G) {
            if (passwordB_G == passwordA_G) { //符合正则表达式
                next.css("display", "none");
                next2.css("display", "block");
                next2.removeClass("st").addClass("rig");
                $(this).removeClass("t_form");
            } else {
                next.css("display", "block");
                next.text("两次输入密码不一致");
                next.css("background-color", "#ff6666");
                $(this).addClass("t_form");
            }

        } else { //无值
            next.css("display", "block");
            next.css("background-color", "#ff6666");
            next.text("请再次输入密码");
            $(this).addClass("t_form");
            next2.css("display", "block");
        }
    })
    //焦点
    $("#passwordB").focus(function () {
        let next = $(this).next();
        let next2 = $(this).next().next();
        next.css("display", "none");
        next.css("background-color", "#e5e5e5");
        next2.css("display", "none");
    })

    let flag = $("#reg_agr").is(":checked");
    $(".check_box").on("click", "#reg_agr", function () {
        flag = $("#reg_agr").is(":checked");
        let agr_text = $(this).parent().children("p");
        console.log(flag);
        if (flag) {
            agr_text.css("display", "none");
            $("#submit").attr('disabled', false);
        } else {
            agr_text.css("display", "block");
            $("#submit").attr("disabled", true);
        }
    })

    $("#submit").click(function () {
        let passwordMd5 = md5(passwordA_G).slice(16);
        if (flag && phone_G && code_G && passwordA_G && passwordB_G && msg_G && $(".t_form").length == 0) {
            $.ajax({
                type: "post",
                url: "../service/register.php",
                dataType: "json",
                data: `password=${passwordMd5}&phone=${phone_G}`,
                success: function (response) {
                    // console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert(response.msg);
                        /* 跳转到登录页面 */
                        window.location.href = "login.html"
                    } else {
                        alert(response.msg);
                    }
                }
            });
        }
    })
})