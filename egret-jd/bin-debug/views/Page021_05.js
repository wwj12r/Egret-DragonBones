var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Page021_05 = (function (_super) {
    __extends(Page021_05, _super);
    function Page021_05() {
        var _this = _super.call(this) || this;
        _this.width = 2900;
        _this.height = PromoData.stageH;
        _this.createView();
        return _this;
    }
    Page021_05.prototype.createView = function () {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0xffffff);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)
        this.gif = new Gif('02_05');
        this.addChild(this.gif);
        this.gif.width = this.width;
        this.gif.height = this.height;
        this.gif.x = this.width / 2 + 50;
        this.gif.y = this.height / 2;
        // this.gif.scaleX = 2
        // this.gif.scaleY = 2
        this.gif.play("armature2-5", "animation2-5");
    };
    return Page021_05;
}(egret.Sprite));
__reflect(Page021_05.prototype, "Page021_05");
