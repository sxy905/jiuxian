$(function () {
    //cookies有值直接点击登录，验证码隐藏
    let usm = Cookies.get("username");
    let pwd = Cookies.get("password");
    if (usm && pwd) {
        $("#password").val(pwd);
        $("#username").val(usm);
        $(".card_f").css("display", "none");
        $("#auto").attr("checked", true);
    }

    //输入框有值cookies值就不显示p 
    let inputs = $(".frame").find("input");
    for (let i in inputs) {
        if ($(inputs).eq(i).val() != '') {
            $(inputs).eq(i).parent().find("p").css("display", "none");
        }
    }

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

    //tab
    $(".loginTit").on("click", "a", function () {
        let index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".loginType").eq(index).css("display", "block");
        $(`.loginType:not(:eq(${index}))`).css("display", "none");
    })


    $(".frame").on("blur", "input", function () {
        let text_box = $(this).parent();
        let text_p = $(this).parent().find("p");
        let error_icon = $(this).parent().find(".error");
        let span_text = $(this).parent().find("span");
        //有值
        if ($(this).val()) {
            text_box.removeClass("t_form");
            text_p.css("display", "none");
            span_text.css("display", "none");
        } else { //无值
            text_box.addClass("t_form");
            text_p.css("display", "block");
            error_icon.css("display", "block");
            span_text.css("display", "block");
            error_icon.addClass("st").removeClass("clear");
        }
    })
    $(".frame").on("focus", "input", function () {
        let text_box = $(this).parent();
        let text_p = $(this).parent().find("p");
        let error_icon = $(this).parent().find(".error");
        let span_text = $(this).parent().find("span");
        text_box.removeClass("t_form");
        text_p.css("display", "none");
        span_text.css("display", "none");
        error_icon.css("display", "block");
        error_icon.addClass("clear").removeClass("str");
    })

    $(".text_box").on("click", ".clear", function () {
        let input = $(this).parent().find("input");
        input.val("");
        $(".card_f").css("display", "block");
        $("#auto").attr("checked", false);
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
        // $("#testcard").trigger("blur");
    });
    let code_G = "";
    let eq = "";
    $("#testcard").blur(function () {
        code_G = $.trim($("#testcard").val());
        let text_box = $(this).parent();
        let text_p = $(this).parent().find("p");
        let error_icon = $(this).parent().find(".error");
        let span_text = $(this).parent().find("span");
        error_icon.css("display", "none");
        eq = (code_G.toLowerCase() == imgCode_G.toLowerCase());
        if (code_G) {
            if (eq) {
                text_box.removeClass("t_form");
                text_p.css("display", "none");
                span_text.css("display", "none");
            } else {
                text_box.addClass("t_form");
                text_p.css("display", "none");
                span_text.css("display", "block");
                span_text.html("验证码错误！");
            }
        } else {
            text_box.addClass("t_form");
            text_p.css("display", "block");
            span_text.css("display", "block");
        }
    })

    $("#testcard").focus(function () {
        let text_box = $(this).parent();
        let text_p = $(this).parent().find("p");
        let error_icon = $(this).parent().find(".error");
        let span_text = $(this).parent().find("span");
        text_box.removeClass("t_form");
        text_p.css("display", "none");
        span_text.css("display", "none");
        error_icon.css("display", "none");
    })
    //注册

    /* 检查页面中是否存在Cookie数据 */
    $("#save").click(function () {
        let username_G = $.trim($("#username").val());
        let password_G = $.trim($("#password").val());
        let passwordMd5 = md5(password_G).slice(16);
        let testcard_G = $("#testcard").val();
        if (usm && pwd) {
            if (username_G == usm && passwordMd5 == pwd) {
                window.location.href = "jx_index.html";
            }
            // passwordMd5 = pwd;
        }
        if (username_G && passwordMd5 && testcard_G && (code_G.toLowerCase() == imgCode_G.toLowerCase())) {
            $.ajax({
                type: "post",
                url: "../service/login.php",
                dataType: "json",
                data: `username=${username_G}&password=${passwordMd5}`,
                success: function (response) {
                    // console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert(response.msg);
                        /* 跳转到登录页面 */
                        /* 检查是否勾选复选框 */
                        let flag = $("#auto").is(":checked");
                        if (flag) {
                            /* 如果用户勾选了免登录复选框，那么就把当前的用户名和密码保存到Cookie中 */
                            Cookies.set("username", username_G, 30);
                            Cookies.set("password", passwordMd5, 30);
                        }
                        let str=`username=${username_G}`;
                        window.location.href = "jx_index.html?"+str;
                    } else {
                        alert(response.msg);
                    }
                }
            });
        } else if (username_G && passwordMd5) {
            $("#testcard").parent().addClass("t_form");
            let text_p = $("#testcard").parent().find("p");
            let span_text = $("#testcard").parent().find("span");
            text_p.css("display", "none");
            span_text.css("display", "block");
            span_text.html("验证码错误！");
            return false;
        } else {

        }
    })
})