$(function () {
    let itemData;
    getCatInfo();
    let isActive = 1;
    let price;
    let goodid;
    //全选与否  goodid = "";
    $(".check-all").click(function () {
        let flag = $(this).hasClass("checkbox-checked");
        if (flag) {
            isActive = 0;
        } else {
            isActive = 1;
        }
        goodid = "";
        updateSelect();
    })

    //单个商品的选择与否  goodid = 本身;
    $(".cartMain").on("click", ".click-checkbox", function (e) {
        let index = $('.click-checkbox').index($(this));
        goodid = itemData[index].goodid;
        let flag = $(this).hasClass("checkbox-checked");
        if (flag) {
            isActive = 0;
        } else {
            isActive = 1;
        }
        updateSelect();
    })

    //个数的增减
    //减  goodid = 本身;
    let num;
    $(".cartMain").on("click", ".cut", function () {
        let index = $(".cut").index($(this));
        num = $(this).parent().next().val();
        if (num > 1) {
            num--;
            price = itemData[index].price;
            goodid = itemData[index].goodid;
            addwithcut();
        }
    })

    //加  goodid = 本身;
    $(".cartMain").on("click", ".add", function () {
        let index = $(".add").index($(this));
        num = $(this).parent().prev().val();
        num++;
        price = itemData[index].price;
        goodid = itemData[index].goodid;
        addwithcut();
    })

    //删除isActive = -1
    $(".cartMain").on("click", ".list-del", function () {
        let index = $(".list-del").index($(this));
        goodid = itemData[index].goodid;
        isActive = -1;
        updateSelect();
    })

    function getCatInfo() {
        $.ajax({
            type: "get",
            url: "../service/getCatData.php",
            dataType: "json",
            success: function (data) {
                itemData = data
                let count = 0;
                let res = data.map((ele, index) => {
                    if (ele.isActive == 1) {
                        count++;
                    }
                    return `<div class="p-type" proid="">
                                <div class="cart-list select-bg">
                                    <div class="clearfix">
                                        <div class="cTab-tr cart-checkbox noMt">
                                            <label class="click-checkbox ${ele.isActive==1 ? "checkbox-checked":"" }">
                                            <i class="cartIcon"></i>
                                            <input name="" type="checkbox" value="">
                                            </label> 
                                        </div>
                                        <div class="cTab-tr cart-goods">
                                            <div class="goods-info">
                                                <div class="goods-img">
                                                    <a href="" target="_blank">
                                                    <img src="${ele.src}" width="80" height="80">
                                                    </a>
                                                </div>
                                                <div class="goods-right">
                                                    <div class="goods-name">
                                                        <a href="" target="_blank">
                                                            <img class="" src="">
                                                            ${ele.title}
                                                        </a>
                                                    </div>
                                                    <div class="cart-tag">
                                                        <span>腰斩价</span>
                                                        <span>买赠</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cTab-tr cart-price">
                                            <div class="goods-price">${ele.price}</div>
                                        </div>
                                        <div class="cTab-tr cart-gold">
                                            <div class="goods-gold"></div>
                                        </div>
                                        <div class="cTab-tr cart-quantity">
                                            <div class="goods-num">
                                                <p><i class="cartIcon cut ${ele.num==1 ? "min":"" }"></i></p>
                                                <input name="" type="text" class="num" value="${ele.num}" autocomplete="off"
                                                    minnum="1">
                                                <p><i class="cartIcon add "></i></p>
                                            </div>
                                            <div class="cart-stock">即将售罄</div>
                                        </div>
                                        <div class="cTab-tr cart-subtotal">
                                            <div class="goods-total-price">${ele.total}</div>
                                        </div>
                                        <div class="cTab-tr cart-operating">
                                            <div class="goods-operating">
                                                <p><a href="javascript:;" class="list-del">删除</a></p>
                                                <p><a href="javascript:;" class="move-collect">移入我的收藏</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                }).join("");
                $(".cart-list-wrap").html(res);
                if (count == data.length) {
                    $(".check-all").addClass("checkbox-checked");
                } else {
                    $(".check-all").removeClass("checkbox-checked");
                }
                $(".my-cart-tit").children("span").text(data.length);
                getTotalPrice(data);
                $(".pieces").children("em").text(count);
                if (count == 0) {
                    $(".cart-gopay-btn").children("a").removeClass("done");
                } else {
                    $(".cart-gopay-btn").children("a").addClass("done");
                }
            }
        })
    }

    function updateSelect() {
        $.ajax({
            type: "get",
            url: "../service/updateselect.php",
            dataType: "json",
            data: `goodid=${goodid}&isActive=${isActive}`,
            success: function (data) {
                getCatInfo();
            }
        })
    }


    function getTotalPrice(data) {
        var res = 0;
        data.forEach(element => {
            if (element.isActive == 1) {
                res += element.total * 1;
            }
        });
        $(".total").children("em").text("￥" + res)
    }

    function addwithcut() {
        $.ajax({
            type: "get",
            url: "../service/addwithcut.php",
            dataType: "json",
            data: `goodid=${goodid}&price=${price}&num=${num}`,
            success: function (data) {
                getCatInfo();
            }
        })
    }
})