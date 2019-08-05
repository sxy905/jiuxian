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
        let span_text=$(this).parent().find("span");
        //有值
        if ($(this).val()) {
            text_box.removeClass("t_form");
            text_p.css("display", "none");
            span_text.css("display", "none");
        } else {//无值
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
        let span_text=$(this).parent().find("span");
        text_box.removeClass("t_form");
        text_p.css("display", "none");
        span_text.css("display", "none");
        error_icon.css("display", "block");
        error_icon.addClass("clear").removeClass("str");
    })
})