var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Page021_06 = (function (_super) {
    __extends(Page021_06, _super);
    function Page021_06() {
        var _this = _super.call(this) || this;
        _this.width = 2300;
        _this.height = PromoData.stageH;
        _this.createView();
        return _this;
    }
    Page021_06.prototype.createView = function () {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)
        var _this = this;
        this.gif = new Gif('02_06');
        this.addChild(this.gif);
        this.gif.width = this.width;
        this.gif.height = this.height;
        this.gif.x = this.width / 2 - 10;
        this.gif.y = this.height / 2;
        this.gif.play("armature2-6", "animation2-6");
        var goVR = new egret.Shape();
        goVR.graphics.beginFill(0xffffff, 0);
        goVR.graphics.drawRect(1100, 260, 450, 130);
        goVR.graphics.endFill();
        this.addChild(goVR);
        goVR.$touchEnabled = true;
        goVR.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.goVR();
        }, this);
        var goOut = new egret.Shape();
        goOut.graphics.beginFill(0xffffff, 0);
        goOut.graphics.drawRect(1430, 570, 300, 150);
        goOut.graphics.endFill();
        this.addChild(goOut);
        goOut.$touchEnabled = true;
        goOut.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.goOut();
        }, this);
    };
    Page021_06.prototype.goVR = function () {
        console.log('==> goVR <==');
        inLib.track('h5_promo_egret-jd_go_vr');
        //    console.log(inLib.com.isInApp)
        if (Scene011.soundChannel) {
            Scene011.soundChannel.stop();
        }
        if (inLib.com.isInApp()) {
            inLib.awake('in://camera?channel=web&type=ar&scene=jingdong');
        }
        else {
            //location.href = location.protocol + '//m.in66.com/applinks?protocol=' + encodeURIComponent('in://camera?channel=web&type=ar&scene=jingdong')
            var applinks = location.protocol + '//m.in66.com/applinks';
            var uri = 'https://h5.in66.com/inpromo/2017/egret/jd13/index.html?goVr=true';
            if (inLib.com.isIos) {
                uri = encodeURIComponent(uri);
            }
            uri = "in://webview?url=" + encodeURIComponent(uri);
            location.href = [applinks, '?protocol=', encodeURIComponent(uri)].join('');
        }
    };
    Page021_06.prototype.goOut = function () {
        inLib.track('h5_promo_egret-jd_go_out');
        if (Scene011.soundChannel) {
            Scene011.soundChannel.stop();
        }
        location.href = 'https://pro.m.jd.com/mall/active/a2zdYEpPtYorGkfTrQdyAUoajHG/index.html';
        console.log('==> goOUt <==');
    };
    return Page021_06;
}(egret.Sprite));
__reflect(Page021_06.prototype, "Page021_06");
