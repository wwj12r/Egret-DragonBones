var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Page021_01 = (function (_super) {
    __extends(Page021_01, _super);
    function Page021_01() {
        var _this = _super.call(this) || this;
        _this.width = 2500;
        _this.height = PromoData.stageH;
        _this.createView();
        return _this;
    }
    Page021_01.prototype.createView = function () {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)
        this.gif = new Gif('02_01');
        // this.gif.width = this.width / 2
        // this.gif.height = this.height / 2
        this.gif.width = this.width;
        this.gif.height = this.height;
        this.gif.x = this.width / 2 + 10;
        this.gif.y = this.height / 2;
        // this.gif.scaleX = 2
        // this.gif.scaleY = 2
        this.addChild(this.gif);
        this.gif.play("armature2-1", "animation2-1");
        var cloud2_1 = new egret.Bitmap(RES.getRes("cloud2-1_png"));
        cloud2_1.x = -50;
        cloud2_1.y = 0;
        this.addChild(cloud2_1);
    };
    return Page021_01;
}(egret.Sprite));
__reflect(Page021_01.prototype, "Page021_01");
