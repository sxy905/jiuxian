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
        this.jx_titie_recom = this.data.jx_titie_recom;
        this.jx_logo_box = this.data.jx_logo_box;
        this.jx_store_text = this.data.jx_store_text;
        this.jx_F1_info = jx_F1_info;
        this.jx_F2_info = jx_F2_info;
        // this.jx_F5_menu=jx_F5_menu;
        // this.jx_titie_recom=jx_titie_recom;

    }
    init() {
        this.renderUI();
    }
    // renderBanner() {
    //     let arr = [];
    //     Array.from(this.slider_1).forEach((ele) => {
    //         arr.push(ele.goodsSrc);
    //     })
    //     var banner = new BannerManager(arr, document.getElementsByClassName("nav_content")[0]);
    //     banner.init();

    //     let html = '<div class="nav_img_box">';
    //     Array.from(this.slider_s).forEach((ele, index) => {
    //         if ((index) % 3 == 0) {
    //             html += `<div class="nav_box">  
    //             <img src="${ele.goodsSrc}" alt="">`;
    //         } else {
    //             if ((index + 1) % 3 == 0) {
    //                 html += `<img src="${ele.goodsSrc}" alt=""></div>`;
    //             } else {
    //                 html += `<img src="${ele.goodsSrc}" alt="">`;
    //             }
    //         }
    //     })
    //     $(".nav_content_box").html(html);
    // }
    renderTab_act() {
        new BannerManager(Array.from(this.jx_banner_r1), document.getElementsByClassName("banners1")[0]).init();

        new BannerManager(Array.from(this.jx_banner_r2), document.getElementsByClassName("banners2")[0]).init();
        $(".ul_title").on("mouseenter", "li", function () {
            let index = $(this).index();
            // $(this).addClass("tab_hover").siblings().removeClass("tab_hover");
            $(".tab_box").children(".li_box").eq(index).css("display", "block").siblings().css("display", "none");
        })


        $(".notice_ul").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(".notice_box").children("ul").eq(index).css("display", "block").siblings().css("display", "none");
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
                            <span>${ele_index.price}</span>
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
                                <span>${ele_info.price}</span>
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
            }
        })

        $(".icon_gt").click(function () {
            if (index != (len - 1)) {
                $(".tab_slider_box").children(".tab_slider").eq(index + 1).css("display", "block").siblings().css("display", "none");
                $(".dot").children("span").eq(index + 1).addClass("on").siblings().removeClass("on");
                index++;
            }
        })
    }

    renderF1() {
        let title = Array.from(this.jx_F1_menu).map((ele_title) => {
            return `<a href="" class="line">${ele_title}</a>`;
        })
        title = `<div class="f_info">
                    <i class="ff f_1">1F</i>
                    <span>白酒馆<span />
                        <div class="f1_right fr">
                            ${title}
                        </div>
                </div>`
        let F1_box = Array.from(this.jx_F1_box).map((elel_box) => {
            return `<div class="slider_right_box fl">
                        <img src="${elel_box.src}" alt="">
                        <div>
                            <i class="icon_img"></i>
                            <a>${elel_box.des}</a>
                        </div>
                        <span>${elel_box.price}</span>
                    </div>`;
        }).join("");
        F1_box = `<div class="slider_1_right fr">${F1_box}</div>`;
        let top = `<div class="content">
                    ${title}
                    <div class="f_img">
                        <div class="slider_1 fl"></div>
                            ${F1_box}
                    </div>`

        let left_type = Array.from(this.jx_F1_info).map((ele_info) => {
            let left_info = Array.from(ele_info).map((ele_detail) => {
                let info_p=ele_detail.info;
                let p_s=Array.from(info_p).map((ele_p)=>{
                    return `<span><a href="">${ele_p}</a></span>`;
                }).join("");
                ps=`<p>${p_s}</p>`;
                return `<div class="detail_recom">
                            <span>${ele_detail.type}</span>
                            ${ps}
                        </div>`;
            })
        })
    }
    renderF1_act() {

    }
    renderUI() {
        // this.renderBanner();
        this.renderTab();
        this.renderTab_act();
        this.renderlayerimg();
        this.renderrecom();
        this.renderrecom_act();
        this.renderF1();
        this.renderF1_act();
    }
    start() {
        this.init();
    }

}