$(function () {
    let itemData;
    getCatInfo();

    function getCatInfo() {
        $.ajax({
            type: "get",
            url: "../service/getCatData.php",
            dataType: "json",
            success: function (data) {
                itemData = data
                let res = data.map((ele, index) => {
                    return `<div class="p-type" proid="">
                                <div class="cart-list select-bg " itemid="item-48811" proid="48811">
                                    <div class="clearfix">
                                        <div class="cTab-tr cart-checkbox noMt">
                                            <label class="click-checkbox  checkbox-checked "><i class="cartIcon"></i><input name="" type="checkbox"
                                                    value=""></label> </div>
                                        <div class="cTab-tr cart-goods">

                                            <div class="goods-info" data-type="normalD" prid="48811">
                                                <div class="goods-img">
                                                    <a href="" target="_blank">
                                                    <img src="${ele.src}" width="80" height="80"></a>
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
                                            <div class="goods-gold">2388金币</div>
                                        </div>
                                        <div class="cTab-tr cart-quantity">
                                            <div class="goods-num">
                                                <p><i class="cartIcon cut min"></i></p>
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
                $(".my-cart-tit").children("span").text(data.length);
                getTotalPrice(data);
                $(".pieces").children("em").text(data.length);
            }
        })
    }

    $(".check-all").on("click",".cartIcon",function(){
        $(this).parents(".check-all").prop("class","checkbox-checked");
        // $(this).parents(".check-all").addClass("checkbox-checked");   
    })
    // $(".check-all").click=function(){
    //     $(".check-all").prop("checked", $(this).is(":checked"));
    //     $(".check-all").addClass("checkbox-checked");
    // }

    // $("#allSelector").click(function() {
    //     /* 设置所有的标签为选中状态 */
    //     /* 发请求去修改内容 */
    //     $(".checkbox-class").prop("checked", $(this).is(":checked"));

    //     /* 发请求设置让所有的都处理 */
    //     /* 遍历发送3次网络请求 */

    // })

    function getTotalPrice(data) {
        var res = 0;
        data.forEach(element => {
            if (element.isActive == 1) {
                res += element.total * 1;
            }
        });
        $(".total").children("em").text("￥"+res)
    }
})