$(function () {
    let data = "";
    $.getJSON("../service/Data_detail.php", function (json) {
        data = JSON.parse(json)
    })
    $(".img_title").css("height", "0px");
    let dom = $(`<div class="line_img"></div>`);
    dom.html('<img src="../images/detail_img.jpg" alt="">');
    $("#header").append(dom);

    function renderleft() {
        
        return `<li>
                    <a href="">
                        <img src="" alt="">
                    </a>
                </li>`
    }
})