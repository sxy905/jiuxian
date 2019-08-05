class jx {
    constructor(data, root = document.body) {
        this.root = root;
        this.data = data;
        this.slider_1 = this.data.slider_1;
        this.slider_F1 = this.data.slider_F1;
        this.slider_F2 = this.data.slider_F2;
        this.slider_F3 = this.data.slider_F3;
        this.slider_F4 = this.data.slider_F4;
        this.slider_F5 = this.data.slider_F5;
        this.slider_r1 = this.data.slider_r1;
        this.slider_r2 = this.data.slider_r2;
        this.slider_s = this.data.slider_s;
        this.tab_1 = this.data.tab_1;
    }
    init() {
        this.renderUI();
    }
    renderBanner() {
        let arr = [];
        Array.from(this.slider_1).forEach((ele) => {
            arr.push(ele.goodsSrc);
        })
        var banner = new BannerManager(arr, document.getElementsByClassName("nav_content")[0]);
        banner.init();

        let html = '<div class="nav_img_box">';
        Array.from(this.slider_s).forEach((ele, index) => {
            if ((index) % 3 == 0) {
                html += `<div class="nav_box">  
                <img src="${ele.goodsSrc}" alt="">`;
            } else {
                if ((index + 1) % 3 == 0) {
                    html += `<img src="${ele.goodsSrc}" alt=""></div>`;
                } else {
                    html += `<img src="${ele.goodsSrc}" alt="">`;
                }
            }
        })
        $(".nav_content_box").html(html);
    }
    renderTab(){
        
    }
    renderUI() {
        this.renderBanner();
        this.renderTab();
    }

}