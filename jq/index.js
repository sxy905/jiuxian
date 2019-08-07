$(function () {
    
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
})