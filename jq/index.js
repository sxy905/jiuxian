$(function () {

    $(".slide").hover(function () {
        $(this).children(".slide_box").css("display", "block");
        $(this).children(".slide_box").css("z-index", "100");
        $(this).css("background-color", "#fff")
    }, function () {
        $(this).css("background-color", "#f2f2f2")
        $(this).children(".slide_box").css("display", "none");
    })


    function QueryString2obj(str) {
        var obj = {};
        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
            var tempArr = arr[i].split("=");
            obj[tempArr[0]] = tempArr[1];
        }
        return obj;
    }

    var queryString = decodeURIComponent(window.location.search.slice(1));
    var obj = QueryString2obj(queryString);
    let username = obj.username;
    console.log(username);
    console.log($(".login"));
    
    $(".login").text("欢迎您");
    $(".register").text(username);

    
    autoPlay();
    var count = 0;

    function autoPlay() {
        let timer = setInterval(function () {
            $(".nav_img_box").children(".nav_box").eq(count).css("display", "block").siblings().css("display", "none");
            count++;
            if (count > 9) {
                count = 0;
            }
        }, 2000);

        $(".nav_content").mouseenter(function () {
            clearInterval(timer);
        })
    }
    document.getElementsByTagName
    $(".nav_content").mouseleave(function () {
        autoPlay();
    })

    $(".input_box").focus(function () {
        $(this).parent().find("p").css("display", "none");
    })

    $(".hover_h").hover(function () {
        $(".erweima").css("display", "block");
    }, function () {
        $(".erweima").css("display", "none");
    })

    $.ajax({
        type: "get",
        url: "../service/getAdv.php",
        dataType: "json",
        success: function (data) {
            let jx_main_title = JSON.parse(data.data_main_title[0].contents);
            // console.log(jx_main_title);
            let res = jx_main_title.map((ele) => {
                return `<a href="">${ele}</a>`;
            }).join("");
            $(".title_a").html(res);
        }
    })
})