var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.width = PromoData.stageW;
        _this.height = PromoData.stageH;
        return _this;
    }
    LoadingUI.prototype.timerFunc = function (event) {
        LoadingUI.prefakeload++;
        this.textField.text = LoadingUI.prefakeload + ' %';
    };
    LoadingUI.prototype.timerComFunc = function (event) {
        LoadingUI.prefakeloaddone = true;
        if (LoadingUI.prerealloaddone) {
            this.textField.text = '100%';
            setTimeout(function () {
                PromoData.stage.createGameScene();
            }, 500);
        }
    };
    LoadingUI.prototype.createTextField = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.backgroundColor = 0xFFFFFF;
        this.textField.y = 600;
        this.textField.x = this.width / 2 - 50;
        this.textField.textAlign = "center";
        var timer = new egret.Timer(50, 99);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    LoadingUI.prototype.createView = function () {
        inLib.track('h5_promo_egret-jd_index_enter');
        if (inLib.com.getQueryString('goVr')) {
            console.log(inLib.com.getQueryString('goVr'));
            inLib.awake('in://camera?channel=web&type=ar&scene=jingdong');
        }
        var shareOptions = {
            shareTitle: '没想到你这么会装。。。',
            shareDesc: '快跳上飞毯，去小人国装你所想',
            shareLink: 'https://h5.in66.com/inpromo/2017/egret/jd13/index.html',
            shareImg: 'http://inimg02.jiuyan.info/in/2017/09/15/344FEA74-37BA-40E6-94EB-E22CEC691C57.jpg',
            shareTrack: 'h5_promo_jd_share'
        };
        inLib.share(shareOptions);
        var loadingBg = new egret.Bitmap(RES.getRes("loadingBg_jpg"));
        loadingBg.width = this.width;
        loadingBg.height = this.height;
        this.addChild(loadingBg);
        var loadingGif = new Gif('00-loading');
        this.addChild(loadingGif);
        loadingGif.x = this.width / 2;
        loadingGif.y = 350;
        loadingGif.play("loading", "loading");
        this.createTextField();
    };
    LoadingUI.prototype.fadeOut = function (onComplete) {
        if (onComplete === void 0) { onComplete = function () { }; }
        egret.Tween.get(this).to({ "alpha": 0 }, 500).call(onComplete, this);
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        var rate = Math.round(current / total) * 100;
        // this.textField.text = `${rate}%`;
    };
    return LoadingUI;
}(egret.Sprite));
LoadingUI.prefakeload = 0;
LoadingUI.prerealloaddone = false;
LoadingUI.prefakeloaddone = false;
__reflect(LoadingUI.prototype, "LoadingUI");
