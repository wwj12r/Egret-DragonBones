var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene012 = (function (_super) {
    __extends(Scene012, _super);
    function Scene012(next) {
        var _this = _super.call(this) || this;
        _this.width = PromoData.stageW;
        _this.height = PromoData.stageH;
        _this.next = next;
        _this.createView();
        return _this;
    }
    Scene012.prototype.createView = function () {
        this.loadingGif = new Gif('012_1');
        this.addChild(this.loadingGif);
        this.loadingGif.x = this.width / 2;
        this.loadingGif.y = 350;
        var cb = function () {
            PromoData.stage.removeChild(PromoData.scene012);
            // PromoData.scene021.create_01()
        };
        this.loadingGif.play("yun", "ani", 1, cb.bind(this));
        this.loadingGif.display.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frameEvent, this);
    };
    Scene012.prototype.frameEvent = function (evt) {
        if (evt.frameLabel === 'yun2') {
            this.next();
            console.log("armature 播放到了一个关键帧！ 帧标签为：", evt.frameLabel);
        }
    };
    return Scene012;
}(egret.Sprite));
__reflect(Scene012.prototype, "Scene012");
