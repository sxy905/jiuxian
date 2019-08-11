class Jx_index {
    constructor(data, root = document.body) {
        this.data = data;
        this.root = root;
        this.jx_banner_1 = this.data.jx_banner_1;
        this.jx_banner_s = this.data.jx_banner_s;
        this.jx_banner_r1 = this.data.jx_banner_r1;
        this.jx_banner_r2 = this.data.jx_banner_r2;
        this.jx_banner_F1 = this.data.jx_banner_F1;
        this.jx_banner_r1 = this.data.jx_banner_r1;
        this.jx_banner_F2 = this.data.jx_banner_F2;
        this.jx_banner_F3 = this.data.jx_banner_F3;
        this.jx_banner_F4 = this.data.jx_banner_F4;
        this.jx_banner_F5 = this.data.jx_banner_F5;
        this.jx_layer_img = this.data.jx_layer_img;
        this.jx_index_tab = this.data.jx_index_tab;
        this.jx_adv_tab = this.data.jx_adv_tab;
        this.jx_index_tab_box = this.data.jx_index_tab_box;
        this.jx_adv_tab_box = this.data.jx_adv_tab_box;
        this.jx_recom_tab = this.data.jx_recom_tab;
        this.jx_F1_box = this.data.jx_F1_box;
        this.jx_F2_box = this.data.jx_F2_box;
        this.jx_F3_box = this.data.jx_F3_box;
        this.jx_F4_box = this.data.jx_F4_box;
        this.jx_F5_box = this.data.jx_F5_box;
        this.jx_F1_tab = this.data.jx_F1_tab;
        this.jx_F2_tab = this.data.jx_F2_tab;
        this.jx_F1_menu = this.data.jx_F1_menu;
        this.jx_F2_menu = this.data.jx_F2_menu;
        this.jx_F3_menu = this.data.jx_F3_menu;
        this.jx_F4_menu = this.data.jx_F4_menu;
        this.jx_F5_menu = this.data.jx_F5_menu;
        this.jx_logo_recom = this.data.jx_logo_recom;
        this.jx_logo_box = this.data.jx_logo_box;
        this.jx_store_text = this.data.jx_store_text;
        this.jx_F1_info = this.data.jx_F1_info;
        this.jx_F2_info = this.data.jx_F2_info;
        this.jx_F3_info = this.data.jx_F3_info;
        this.jx_F1_tab_menu = this.data.jx_F1_tab_menu;
        this.jx_F2_tab_menu = this.data.jx_F2_tab_menu;
        this.jx_floor = this.data.jx_floor;
        this.jx_floor_text = this.data.jx_floor_text;
        this.jx_adv_img = this.data.jx_adv_img;
        this.jx_nav_left=this.data.jx_nav_left;
    }
    init() {
        this.renderUI();
    }
    renderBanner() {
        new BannerManager(this.jx_banner_1 , document.getElementsByClassName("nav_content")[
            0], 20, true).init();

        let left=Array.from(this.jx_nav_left).map((ele,index)=>{
            let info=Array.from(ele.contents).map((item)=>{
                return `<a href="">${item}</a>`;
            }).join(""); 
            return `<div class="nav-box">
                        <div class="nav-all">
                            <div class="nav-title">
                                <h2>
                                    <i class="icon title${index+1}"></i>
                                    ${ele.title}
                                </h2>
                            </div>
                            <div class="nav-info">
                               ${info}
                            </div>
                        </div>
                    </div>`
        }).join("");


        let right = '<div class="nav_img_box">';
        Array.from(this.jx_banner_s ).forEach((ele, index) => {
            if ((index) % 3 == 0) {
                right += `<div class="nav_box">  
                <img src="${ele}" alt="">`;
            } else {
                if ((index + 1) % 3 == 0) {
                    right += `<img src="${ele}" alt=""></div>`;
                } else {
                    right += `<img src="${ele}" alt="">`;
                }
            }
        })

        let all=`<div class="nav_content_box">
                    <div class="nav-content_margin">
                        <div class="nav_left">
                            ${left}
                        </div>
                        ${right}
                    </div>
                </div>`;
        $(".nav_content").append($(all));
        $(".nav-info").children("a")[0].href="jx_goodlist.html";
    }
    renderTab_act() {
        new BannerManager(Array.from(this.jx_banner_r1), document.getElementsByClassName("banners1")[0], 10, false).init();

        new BannerManager(Array.from(this.jx_banner_r2), document.getElementsByClassName("banners2")[0], 10, false).init();
        $(".ul_title").find("li").eq(0).addClass("on");
        $(".ul_title").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_box").children(".li_box").eq(index).css("display", "block").siblings().css("display", "none");
        })

        $(".notice_ul").find("li").eq(0).addClass("on");
        $(".notice_ul").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".notice_box").children("ul").eq(index).css("display", "block").siblings().css("display", "none");
        })

        //跳到详情页
        let self = this;
        $(".tab_box").on("click", ".box1", function () {
            let outer = $(".ul_title li[class='on']").index();
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_index_tab_box[outer][inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
    }
    renderTab() {
        let res_tab = Array.from(this.jx_index_tab).map((eletab) => {
            return `<li>${eletab}</li>`;
        }).join("");
        res_tab = `<ul class="clearfix ul_title">${res_tab}</ul>`;

        let res_box = Array.from(this.jx_index_tab_box).map((elebox) => {
            let box = `<div class="li_box clearfix">`;
            let box_index = Array.from(elebox).map((ele_index) => {
                return `<div class="box1 fl">
                            <img src="${ele_index.src}" alt="">
                            <div class="sigleline">
                                
                                <a>${ele_index.des}</a>
                            </div>
                            <span>￥${ele_index.price}</span>
                        </div>`;
            }).join("");
            return `${box}${box_index}</div>`
        }).join("");
        res_box = `<div class="tab_box">${res_box}</div>`
        let left = `<div class="fl data_box">${res_tab}${res_box}</div>`

        let adv_tab = Array.from(this.jx_adv_tab).map((ele_adv_tab) => {
            return `<li>${ele_adv_tab}</li>`;
        }).join("");
        adv_tab = `<ul class="notice_ul">${adv_tab}</ul>`

        let adv_ul = Array.from(this.jx_adv_tab_box).map((ele_adv_ul) => {
            let adv_text = Array.from(ele_adv_ul).map((ele_adv_text) => {
                return `<li class="sigleline"><a href="">${ele_adv_text}</a></li>`;
            }).join("");
            adv_text = `<ul>${adv_text}</ul>`;
            return adv_text;
        }).join("");
        adv_ul = `<div class="notice_box">${adv_ul}</div>`;

        let banners1 = '<div class="banners1"></div>';

        let banners2 = '<div class="banners2"></div>';

        let right = `<div class="fr">${adv_tab}${adv_ul}${banners1}${banners2}`;

        let index_tab = $('<div class="data_li clearfix"></div>');

        index_tab.html(`<div class="content clearfix">${left}${right}</div>`);
        $("main").append(index_tab);
    }
    renderlayerimg() {
        let lay_img = Array.from(this.jx_layer_img).map((ele) => {
            return `<p><img src="${ele}" alt=""></p>`;
        }).join("");
        lay_img = `<div class="img_line">${lay_img}</div>`;
        let lay_box = $('<div class="detail_img_box"></div>');
        lay_box.html(lay_img);
        $("main").append(lay_box);
    }
    renderrecom() {
        let top = `<h2>
                        <i class="iconre"></i>
                        <span>优惠推荐</span>
                        <p class="fr dot">
                            <span class="on"></span>
                            <span></span>
                            <span></span>
                        </p>
                    </h2>`;
        let recom_box = Array.from(this.jx_recom_tab).map((ele_box) => {
            let recom_info = Array.from(ele_box).map((ele_info, index) => {
                return `<div class="slider_box">
                            <div class="img_slider_box">
                                <img src="${ele_info.src}" alt="">
                                <div class="sigleline">
                                    <a>${ele_info.des}</a>
                                </div>
                                <span>￥${ele_info.price}</span>
                            </div>
                        </div>`;
            }).join("");
            return `<div class="tab_slider">${recom_info}</div>`;
        }).join("");
        recom_box = `<div class="tab_slider_box">${recom_box}</div>`;
        let rem_all = `<div class="content"><div class="recom">${top}<div class="img_slider"><span class="icon_lt"></span><span class="icon_gt"></span>${recom_box}</div></div></div>`;

        let recom = $('<div class="recom_box"></div>');
        recom.html(rem_all);
        $("main").append(recom);
    }

    renderrecom_act() {
        let len = $(".tab_slider_box").children(".tab_slider").length;
        let index = 0;
        $(".dot").on("click", "span", function () {
            index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_slider_box").children(".tab_slider").eq(index).css("display", "block").siblings().css("display", "none");
        })

        $(".icon_lt").click(function () {
            if (index != 0) {
                $(".tab_slider_box").children(".tab_slider").eq(index - 1).css("display", "block").siblings().css("display", "none");
                $(".dot").children("span").eq(index - 1).addClass("on").siblings().removeClass("on");
                index--;
                if (index < 0) {
                    index = 0;
                }
            }

        })

        $(".icon_gt").click(function () {
            if (index != (len - 1)) {
                $(".tab_slider_box").children(".tab_slider").eq(index + 1).css("display", "block").siblings().css("display", "none");
                $(".dot").children("span").eq(index + 1).addClass("on").siblings().removeClass("on");
                index++;
                if (index >= len) {
                    index = len;
                }
            }
        })

        //跳到详情页
        let self = this;
        $(".tab_slider_box").on("click", ".slider_box", function () {
            console.log($(".dot span [class='on']"));

            let outer = $(".dot span[class='on']").index();
            let inner = $(this).index();
            console.log(outer, inner);
            let queryStr = self.obj2QueryString(self.jx_recom_tab[outer][inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })

    }
    //菜单  box  menu_item
    renderF1_F2(menu_title, f_box, left_info, f_menu_item, f_tab, classname = "", floor = "1F", floor_text = "白酒馆") {
        let title = Array.from(menu_title).map((ele_title) => {
            return `<a href="" class="line">${ele_title}</a>`;
        }).join("");
        title = `<div class="f_info">
                    <i class="ff f_1">${floor}</i>
                    <span>${floor_text}<span />
                        <div class="f1_right fr">
                            ${title}
                        </div>
                </div>`
        let F1_box = Array.from(f_box).map((elel_box) => {
            return `<div class="slider_right_box fl">
                        <div class="F1_img_box">
                            <img src="${elel_box.src}" alt="">
                        </div>
                        <div class="F1_box_title"> 
                            <a>${elel_box.des}</a>
                        </div>
                        <div class="F1_box_price">
                            <span>￥${elel_box.price}</span>
                        </div>
                    </div>`;
        }).join("");
        F1_box = `<div class="slider_1_right fr">${F1_box}</div>`;
        let top = `<div class="content">
                    ${title}
                    <div class="f_img">
                        <div class="slider_1 fl"></div>
                            ${F1_box}
                    </div>`

        let left_type = Array.from(left_info).map((ele_info) => {
            let info_p = ele_info.info;
            let p_span = Array.from(info_p).map((ele_p) => {
                return `<span><a href="">${ele_p}</a></span>`;
            }).join("");
            let p_box = `<p>${p_span}</p>`;
            return `<div class="detail_recom">
                            <span>${ele_info.type}</span>
                            ${p_box}
                    </div>`;
        }).join("");
        left_type = `<div class="f1_detail fl">${left_type}</div>`;
        let tab_menu = Array.from(f_menu_item).map((ele_tab_menu) => {
            return `<a href="">${ele_tab_menu}</a>`;
        }).join("");

        let box_menu = Array.from(f_tab).map((ele_tab) => {
            let menu_item = Array.from(ele_tab).map((ele_item) => {
                return `<div class="hot_box_s">
                            <div class="hot_box_left fl">
                                <img src="${ele_item.src}" alt="">
                            </div>
                            <div class="hot_box_right fr">
                                <span>${ele_item.des}</span>
                                <span class="price">${ele_item.price}</span>
                            </div>
                        </div>`;
            }).join("");
            return `<div class="hot_box clearfix">${menu_item}</div>`;
        }).join("");
        box_menu = `<div class="hot_img">${box_menu}</div>`;

        let bottom = `${left_type}<div class="f1_detail_img fr">
                        <div class="hot">
                            <p style="display: inline-block">
                                <i class="icon_hot hot1"></i>
                                <span class="hot_text1">本周热销排行榜</span>
                            </p>
                            <div class="hot_type fr">
                                ${tab_menu}
                            </div>
                        </div>
                        ${box_menu}
                    </div>
                    </div>`;
        let F1 = $(`<div class="${classname}"></div>`);
        F1.html(`${top}${bottom}`);
        $("main").append(F1);
    }

    renderF1_F2_act(floor_className, arr_banner, location_dom, point_size, num_t_f) {
        $(floor_className).find(".hot_type").children("a").eq(0).addClass("on");
        $(floor_className).find(".hot_type").on("mouseenter", "a", function () {
            let index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(floor_className).find(".hot_img").children(".hot_box").eq(index).css("display", "block").siblings().css("display", "none");
        });
        new BannerManager(arr_banner, location_dom, point_size, num_t_f).init();

        //跳到详情页
        let self = this;
        // F1box
        $(".slider_1_right ").eq(0).on("click", ".slider_right_box", function () {
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_F1_box[inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })

        //F1tab
        $(".hot_img").eq(0).on("click", ".hot_box_s", function () {
            let outer = $(".hot_type a[class='on']").eq(0).index();
            let inner = $(this).index();
            console.log(outer, inner);
            let queryStr = self.obj2QueryString(self.jx_F1_tab[outer][inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })

        // F2box
        $(".slider_1_right").eq(1).on("click", ".slider_right_box", function () {
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_F2_box[inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
        //f2tab
        $(".hot_img").eq(1).on("click", ".hot_box_s", function () {
            let outer = $(".hot_type a[class='on']").eq(1).index();
            let inner = $(this).index();
            console.log(outer, inner);
            let queryStr = self.obj2QueryString(self.jx_F2_tab[outer][inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
    }

    renderF3(menu_title, f_box, left_info, classname = "", floor = "1F", floor_text = "白酒馆") {
        let title = Array.from(menu_title).map((ele_title) => {
            return `<a href="" class="line">${ele_title}</a>`;
        }).join("");
        title = `<div class="f_info">
                    <i class="ff f_1">${floor}</i>
                    <span>${floor_text}<span />
                        <div class="f1_right fr">
                            ${title}
                        </div>
                </div>`
        let F1_box = Array.from(f_box).map((elel_box) => {
            return `<div class="slider_right_box fl">
                        <div class="F1_img_box">
                            <img src="${elel_box.src}" alt="">
                        </div>
                        <div class="F1_box_title"> 
                            <a>${elel_box.des}</a>
                        </div>
                        <div class="F1_box_price">
                            <span>￥${elel_box.price}</span>
                        </div>
                    </div>`;
        }).join("");
        F1_box = `<div class="slider_1_right fr">${F1_box}</div>`;
        let left_type = Array.from(left_info).map((ele_info) => {
            let info_p = ele_info.info;
            let p_span = Array.from(info_p).map((ele_p) => {
                return `<span><a href="">${ele_p}</a></span>`;
            }).join("");
            let p_box = `<p>${p_span}</p>`;
            return `<div class="detail_recom">
                            <span>${ele_info.type}</span>
                            ${p_box}
                    </div>`;
        }).join("");
        left_type = `<div class="f1_detail fl">${left_type}</div>`;
        let top = `<div class="content">
                    ${title}
                    <div class="left_F3">
                        <div class="f_img">
                            <div class="slider_1 fl"></div>    
                        </div>
                        ${left_type}
                    </div>
                    ${F1_box}`

        let F1 = $(`<div class="${classname}"></div>`);
        F1.html(`${top}`);
        $("main").append(F1);
        //跳到详情页
        let self = this;
        // F3box
        $(".slider_1_right ").eq(2).on("click", ".slider_right_box", function () {
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_F3_box[inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
    }
    renderF4_F5(menu_title, f_box, classname = "", floor = "1F", floor_text = "白酒馆") {
        let title = Array.from(menu_title).map((ele_title) => {
            return `<a href="" class="line">${ele_title}</a>`;
        }).join("");
        title = `<div class="f_info">
                    <i class="ff f_1">${floor}</i>
                    <span>${floor_text}<span />
                        <div class="f1_right fr">
                            ${title}
                        </div>
                </div>`
        let F1_box = Array.from(f_box).map((elel_box) => {
            return `<div class="slider_right_box fl">
                        <div class="F1_img_box">
                            <img src="${elel_box.src}" alt="">
                        </div>
                        <div class="F1_box_title"> 
                            <a>${elel_box.des}</a>
                        </div>
                        <div class="F1_box_price">
                            <span>￥${elel_box.price}</span>
                        </div>
                    </div>`;
        }).join("");
        F1_box = `<div class="slider_1_right fr">${F1_box}</div>`;
        let top = `<div class="content">
                    ${title}
                    <div class="f_img">
                        <div class="slider_1 fl"></div>
                            ${F1_box}
                    </div>`

        let F1 = $(`<div class="${classname}"></div>`);
        F1.html(`${top}`);
        $("main").append(F1);
    }

    renderF3_F5_act(floor_className, arr_banner, location_dom, point_size, num_t_f) {
        new BannerManager(arr_banner, location_dom, point_size, num_t_f).init();
        
        //跳到详情页
        let self = this;
        $(".slider_1_right ").eq(3).on("click", ".slider_right_box", function () {
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_F4_box[inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
        $(".slider_1_right ").eq(4).on("click", ".slider_right_box", function () {
            let inner = $(this).index();
            let queryStr = self.obj2QueryString(self.jx_F5_box[inner]);
            let str = "jx_detail.html?" + queryStr;
            window.location.href = str;
        })
    }
    renderlogo() {
        let lis = Array.from(this.jx_logo_recom).map((ele_lis) => {
            return `<li>${ele_lis}</li>`;
        }).join("");

        let box = Array.from(this.jx_logo_box).map((ele_box) => {
            let index = 0;
            let item_box = Array.from(ele_box).map((ele_item) => {
                if (Array.isArray(ele_item)) {
                    let inner = Array.from(ele_item).map((inner_item) => {
                        return `<li class="lis"><img src="${inner_item}" alt=""></li>`;
                    }).join("");
                    inner = `<div class="logo_index clearfix">${inner}</div>`;
                    return inner;
                } else {
                    let item = `<li class="lis"><img src="${ele_item}" alt=""></li>`;
                    return item;
                }
            }).join("");
            item_box = `<div class="logo_item">${item_box}</div>`;
            return item_box;
        }).join("");
        box = `<div class="logo_box">${box}</div>`;
        let html = `<div class="content">
                    <div class="logo_top clearfix">
                        <ul class="logo_ul clearfix">
                            ${lis}
                        </ul>
                        <div class="titleSlider"><b></b></div>
                    </div>
                    ${box}
                </div>`;

        let F1 = $(`<div class="logo-box"></div>`);
        F1.html(`${html}`);
        $("main").append(F1);
    }

    renderlogo_act() {
        $(".logo_index").children("li").children("img").hover(function () {
            $(this).stop().animate({
                marginLeft: '-100px'
            }, "normal");

        }, function () {
            $(this).stop().animate({
                marginLeft: '0'
            }, "normal");
        })

        $(".logo_ul").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".titleSlider").css("left", (index * 105) + "px");
            $(".logo_box").children(".logo_item").eq(index).css("display", "block").siblings().css("display", "none");
        })
    }

    renderstore() {
        let dl_text = Array.from(this.jx_store_text).map((ele) => {
            let store_a = ele.des;
            let a_s = Array.from(store_a).map((ele_a) => {
                return `<a href="" class="dd_a">${ele_a}</a>`;
            }).join("");
            return `<dt class="store_dt">
                        <img src="${ele.src}" alt="">
                    </dt>
                    <dd class="store_dd">
                        <p>
                            ${a_s}
                        </p>
                    </dd>`;
        }).join("");
        let html = `<div class="content">
                    <div class="store_title">
                        <i></i>
                    <span>品牌精品店</span>
                    </div>
                    ${dl_text}
                </div>`;
        let F1 = $(`<div class="store_box"></div>`);
        F1.html(`${html}`);
        $("main").append(F1);

    }
    renderadv() {
        let html = `<div class="jx_adv_img">
                        <div class="content">
                            <div class="adv_img_box" style="background: url(${this.jx_adv_img}) center top no-repeat scroll;"></div>
                            <span class="clear">x</span>
                        </div>
                    </div>`;
        let F1 = $(`<div class="jx_adv_box"></div>`);
        F1.html(`${html}`);
        $("main").append(F1);
    }

    obj2QueryString(o) {
        let queryString = "";
        for (let key in o) {
            queryString += "&" + `${key}=${o[key]}`;
        }
        return queryString.slice(1);
    }

    renderUI() {
        this.renderBanner();
        let self = this;
        this.renderTab();
        this.renderTab_act();
        this.renderlayerimg();
        this.renderrecom();
        this.renderrecom_act();

        this.renderF1_F2(this.jx_F1_menu, this.jx_F1_box, this.jx_F1_info, this.jx_F1_tab_menu, this.jx_F1_tab, "f1", this.jx_floor[0], this.jx_floor_text[0]);
        this.renderF1_F2_act(".f1", Array.from(this.jx_banner_F1), document.getElementsByClassName("slider_1")[0], 10, false);

        this.renderF1_F2(this.jx_F2_menu, this.jx_F2_box, this.jx_F2_info, this.jx_F2_tab_menu, this.jx_F2_tab, "f2", this.jx_floor[1], this.jx_floor_text[1]);
        this.renderF1_F2_act(".f2", Array.from(this.jx_banner_F2), document.getElementsByClassName("slider_1")[1], 10, false);

        this.renderF3(this.jx_F3_menu, this.jx_F3_box, this.jx_F3_info, "f3", this.jx_floor[2], this.jx_floor_text[2])
        this.renderF4_F5(this.jx_F4_menu, this.jx_F4_box, "f4", this.jx_floor[3], this.jx_floor_text[3])
        this.renderF4_F5(this.jx_F5_menu, this.jx_F5_box, "f5", this.jx_floor[4], this.jx_floor_text[4])
        this.renderF3_F5_act("", Array.from(this.jx_banner_F3), document.getElementsByClassName("slider_1")[2], 10, false);
        this.renderF3_F5_act("", Array.from(this.jx_banner_F3), document.getElementsByClassName("slider_1")[3], 10, false);
        this.renderF3_F5_act("", Array.from(this.jx_banner_F3), document.getElementsByClassName("slider_1")[4], 10, false);
        this.renderlogo();
        this.renderlogo_act();
        this.renderstore();
        this.renderadv();
        // this.showgoods();
        // this.showArray(".hot_img",".hot_box_s",".hot_type a[class='on']",self.jx_F2_tab);
    }
    start() {
        this.init();
    }

}