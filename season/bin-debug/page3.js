var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page3 = (function () {
    function page3() {
        page3.init();
    }
    page3.init = function () {
        var page3 = new Gif('page3', true);
        page3.x = 7385;
        page3.y = 400;
        page3.scaleX = 2;
        page3.scaleY = 2;
        gameStart.middleLayer.addChild(page3);
        page3.play("page3Armature", "page3Animation");
        this.page3title = new egret.Bitmap(RES.getRes("page3title_png"));
        gameStart.middleLayer.addChild(this.page3title);
        this.page3title.x = 7400;
        this.page3title.y = 30;
        this.page3title.alpha = 0;
    };
    return page3;
}());
__reflect(page3.prototype, "page3");
