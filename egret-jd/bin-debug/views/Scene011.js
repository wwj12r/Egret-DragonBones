var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene011 = (function (_super) {
    __extends(Scene011, _super);
    function Scene011(next) {
        var _this = _super.call(this) || this;
        _this.musicOn = false;
        _this.musicLoaded = false;
        _this.width = PromoData.stageW;
        _this.height = PromoData.stageH;
        _this.next = next;
        _this.createView();
        return _this;
    }
    Scene011.prototype.autoplay = function () {
        var _this = this;
        this.sound = new egret.Sound();
        var url = "resource/assets/sound.mp3";
        //添加加载完成侦听
        this.sound.addEventListener(egret.Event.COMPLETE, function (event) {
            _this.musicLoaded = true;
            //获取加载到的 Sound 对象
            // var sound:egret.Sound = <egret.Sound>event.target;
            //播放音乐
        }, this);
        //开始加载
        this.sound.load(url);
    };
    Scene011.prototype.createView = function () {
        this.autoplay();
        var bg = new egret.Bitmap(RES.getRes("01-bg_jpg"));
        bg.width = this.width;
        bg.height = this.height;
        this.addChild(bg);
        this.loadingGif = new Gif('01');
        this.addChild(this.loadingGif);
        this.loadingGif.x = this.width / 2;
        this.loadingGif.y = 350;
        var skip = new egret.Bitmap(RES.getRes("skip_png"));
        skip.width = 163;
        skip.height = 50;
        skip.x = this.width - 200;
        skip.y = 20;
        skip.touchEnabled = true;
        skip.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            inLib.track('h5_promo_egret-jd_touch_skip');
            PromoData.skip = true;
            PromoData.stage.removeChild(PromoData.scene011);
            PromoData.stage.promo.createScene021();
        }, this);
        this.addChild(skip);
        inLib.track('h5_promo_egret-jd_title_page_enter');
    };
    Scene011.prototype.createTapArea = function (next) {
        var _this = this;
        Scene011.shp = new egret.Shape();
        Scene011.shp.graphics.beginFill(0xff0000, 0);
        Scene011.shp.graphics.drawRect(0, 0, 400, 150);
        Scene011.shp.graphics.endFill();
        Scene011.shp.x = this.width / 2 - 200;
        Scene011.shp.y = 500;
        this.addChild(Scene011.shp);
        Scene011.shp.touchEnabled = true;
        Scene011.shp.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            inLib.track('h5_promo_egret-jd_title_enter');
            Scene011.soundChannel = _this.sound.play(0, 0);
            _this.next();
        }, this);
    };
    Scene011.prototype.play = function () {
        var cb = function () { this.createTapArea(); };
        this.loadingGif.play("armatureName", "ani_1", 1, cb.bind(this));
    };
    return Scene011;
}(egret.Sprite));
__reflect(Scene011.prototype, "Scene011");
