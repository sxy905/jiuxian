$(function () {
    //发送网络请求获取数据
    $.ajax({
        type: "post",
        url: "../service/getData.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            new jx(response).init();
        }
    });
    $(".slide").hover(function () {
        $(this).children(".slide_box").css("display", "block");
        $(this).children(".slide_box").css("z-index", "100");
        $(this).css("background-color", "#fff")
    }, function () {
        $(this).css("background-color", "#f2f2f2")
        $(this).children(".slide_box").css("display", "none");
    })

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
    $(".nav_content").mouseleave(function () {
        autoPlay();
    })


})