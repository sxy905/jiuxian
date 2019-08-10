$(function () {
    let data = "";
    var xhr = $.getJSON("../service/Data_detail.php", function (json) {
        data = JSON.parse(json)
    })
    xhr.done(function () {
        function QueryString2obj(str) {
            var obj = {};
            var arr = str.split("&");
            for (var i = 0; i < arr.length; i++) {
                var tempArr = arr[i].split("=");
                obj[tempArr[0]] = tempArr[1];
            }
            return obj;
        }

        function renderleft() {
            let big_box = `<div class="show-pic">
                                <img src="${src}" alt="">
                            </div>`;

            let ul_box = "";
            if (typeof (lis_ID) != "undefined") { //有id就搜索json数据库
                ul_box = Array.from(lis_ID).map((ele_lis) => {
                    return `<li>
                                <a href="">
                                    <img src="${ele_lis}" alt="">
                                </a>
                            </li>`;
                }).join("");

            } else {
                ul_box = `<li>
                            <a href="">
                                <img src="${src}" alt="">
                            </a>
                        </li>`;
            }
            let introShow = `${big_box}
                                <div class="show-list clearfix">
                                    <a class="show-list-prev" href="javascript:;"><i class="dIcon"></i></a>
                                    <div class="show-list-con">
                                        <ul class="clearfix">
                                            ${ul_box}
                                        </ul>
                                    </div>
                                    <a class="show-list-next" href="javascript:;"><i class="dIcon"></i></a>
                                </div>
                                <div class="showOther">
                                    <div class="goodsNo">商品编号：<span>010068004</span></div>
                                    <div class="sOtherRight">
                                        <div class="showCollect"><a><i class="dIcon"></i><span>收藏
                                                    （<em>0</em>）
                                                </span></a></div>
                                        <div class="showShare sShare-list"><i class="dIcon"></i><span>分享</span>
                                        </div>
                                    </div>
                                </div>`;
            $(".introShow").html(introShow);
        }

        $(".img_title").css("height", "0px");
        let dom = $(`<div class="line_img"></div>`);
        dom.html('<img src="../images/detail_img.jpg" alt="">');
        $("#header").append(dom);
        var queryString = decodeURIComponent(window.location.search.slice(1));
        var obj = QueryString2obj(queryString);
        let title = obj.title;
        let src = obj.src;
        let price = obj.price;
        let des = obj.des;
        let goodid = obj.goodid;
        let product_id = "";
        
        $(".comName").children("h1").text(title);
        $(".infoPri").find("strong").text(price);
        if (obj.hasOwnProperty('product_id')) {
            product_id = obj.product_id;
        }
        let lis_ID = data[product_id];
        renderleft();

        $("#addToCartForDetail").click(function () {
            let num = $("#_nub").val();
            $.ajax({  
                type: "get",
                url: "../service/addCart.php",
                data: `goodid=${goodid}&price=${price}&src=${src}&num=${num}`,
                success: function (response) {
                    $(".showBox").css("display", "block");
                    var time = setInterval(function () {
                        $(".showBox").hide();
                    }, 3000)

                    $(".u-buy-close").click(function () {
                        $(".showBox").hide();
                        clearInterval();
                    })
                }
            });

        })
        let val = $("#_nub").val() * 1;
        $(".buyNum-add").click(function () {
            val = $("#_nub").val() * 1;
            $("#_nub").val(val + 1);
        })

        $(".buyNum-reduce").click(function () {
            val = $("#_nub").val() * 1;
            if (val <= 1) {
                $(".buyNum-add").attr("disabled", true);
            } else {
                $(".buyNum-add").removeAttr("disabled");
                $("#_nub").val(val - 1);
            }
        })

    })
})