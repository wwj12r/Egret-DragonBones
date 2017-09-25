var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page6 = (function () {
    function page6() {
        page6.init();
    }
    page6.init = function () {
        Main.loadinggif.alpha = 1;
        Main.loadinggif.x = 14100;
        Main.loadinggif.y = 400;
        gameStart.bottomLayer.addChild(Main.loadinggif);
        this.goinbtn = new egret.Bitmap(RES.getRes("goin_png"));
        this.goinbtn.x = 13900;
        this.goinbtn.y = 530;
        this.goinbtn.alpha = 0;
        gameStart.bgLayer.addChild(this.goinbtn);
        this.page6title = new egret.Bitmap(RES.getRes("page6title_png"));
        gameStart.middleLayer.addChild(this.page6title);
        this.page6title.x = 13750;
        this.page6title.y = 70;
        this.page6title.alpha = 0;
    };
    return page6;
}());
__reflect(page6.prototype, "page6");
