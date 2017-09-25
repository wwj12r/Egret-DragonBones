var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var gameStart = (function () {
    function gameStart() {
    }
    gameStart.autoplay = function () {
        var _this = this;
        this.sound = new egret.Sound();
        var url = "resource/assets/sound.mp3";
        //添加加载完成侦听
        this.sound.addEventListener(egret.Event.COMPLETE, function (event) {
            //获取加载到的 Sound 对象
            // var sound:egret.Sound = <egret.Sound>event.target;
            //播放音乐
            _this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                if (_this.musicOn) {
                    return;
                }
                _this.musicOn = true;
                _this.soundChannel = _this.sound.play(0, 0);
            }, false);
        }, this);
        //开始加载
        this.sound.load(url);
    };
    gameStart.init = function (stage) {
        var _this = this;
        this.autoplay();
        stage.addChild(this.bgLayer);
        stage.addChild(this.touchLayer);
        // stage.addChild(this.alertLayer)
        // this.bgLayer.scaleX = this.bgLayer.scaleY = 0.5
        // this.bgLayer.scaleX = this.bgLayer.scaleY = this.touchLayer.scaleX = this.touchLayer.scaleY = 0.5
        var stageW = this.stageW = stage.stage.stageWidth;
        var stageH = this.stageH = stage.stage.stageHeight;
        if (window.orientation != 0 && window.orientation != undefined) {
            stageW = 1207;
            stageH = 750;
        }
        console.log(stageW, stageH);
        this.bgLayer.x = stageW;
        // let load_bg = new egret.Bitmap(RES.getRes("load_bg_jpg"));
        // load_bg.width = stageW
        // load_bg.height = stageH
        // this.alertLayer.addChild(load_bg);
        // let load_txt = new egret.Bitmap(RES.getRes("load_txt_png"));
        // load_txt.x = stageW/2;
        // load_txt.y = 380;
        // load_txt.rotation = -90;
        // load_txt.anchorOffsetX = 353;
        // load_txt.anchorOffsetY = 31;
        // load_txt.scaleX = load_txt.scaleY = 0.7
        // this.alertLayer.addChild(load_txt)
        var bg = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.bgLayer.addChild(bg);
        this.bgLayer.addChild(this.bottomLayer);
        this.bgLayer.addChild(this.boatLayer);
        this.bgLayer.addChild(this.middleLayer);
        this.bgLayer.addChild(this.topLayer);
        bg.width = 14673;
        bg.height = 750;
        bg.x = 0;
        bg.y = 0;
        bg.alpha = 0;
        var pre_skip = new egret.Bitmap(RES.getRes("pre_skip_png"));
        pre_skip.x = stageW - 180;
        pre_skip.y = 23;
        pre_skip.touchEnabled = true;
        this.touchLayer.addChild(pre_skip);
        pre_skip.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var img = new Image();
            img.src = location.protocol + '//stats1.jiuyan.info/onepiece/router.html?action=shouye_skip';
            location.href = 'https://h5.in66.com/inpromo/2017/pr-season/index.html';
        }, this);
        var cloud = new egret.Sprite;
        cloud.x = 500;
        cloud.y = 0;
        this.middleLayer.addChild(cloud);
        var cloudright1 = new egret.Bitmap(RES.getRes("cloud1_png"));
        cloud.addChild(cloudright1);
        cloudright1.x = -500;
        cloudright1.y = 350;
        var cloudright2 = new egret.Bitmap(RES.getRes("cloud2_png"));
        cloud.addChild(cloudright2);
        cloudright2.x = -350;
        cloudright2.y = -60;
        var cloudright3 = new egret.Bitmap(RES.getRes("cloud2_png"));
        cloud.addChild(cloudright3);
        cloudright3.x = 0;
        cloudright3.y = 150;
        gameStart.boat.x = 1100;
        gameStart.boat.y = 680;
        gameStart.boat.alpha = 0;
        gameStart.boatLayer.addChild(gameStart.boat);
        var moving = new Gif('moving', true);
        gameStart.boat.addChild(moving);
        moving.play("movingArmature", "movingAnimation");
        gameStart.boat2.x = 10700;
        gameStart.boat2.y = 300;
        gameStart.boatLayer.addChild(gameStart.boat2);
        var boat2 = new egret.Bitmap(RES.getRes("boat2_png"));
        boat2.x = 176;
        boat2.y = 86;
        boat2.anchorOffsetX = 146;
        boat2.anchorOffsetY = 46;
        egret.Tween.get(boat2, { loop: true })
            .to({ scaleX: 0.9, scaleY: 0.9 }, 1000)
            .to({ scaleX: 1, scaleY: 1 }, 1000);
        gameStart.boat2.addChild(boat2);
        var wave2 = new egret.Bitmap(RES.getRes("wave2_png"));
        wave2.x = 146;
        wave2.y = 46;
        wave2.alpha = 0;
        wave2.anchorOffsetX = 146;
        wave2.anchorOffsetY = 46;
        egret.Tween.get(wave2, { loop: true })
            .to({ scaleX: 1, scaleY: 1, alpha: 0 }, 800)
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 700)
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 500);
        gameStart.boat2.addChild(wave2);
        this.touchLayer.width = stageW;
        this.touchLayer.height = stageH;
        this.touchLayer.x = 0;
        this.touchLayer.y = 0;
        this.touchLayer.touchEnabled = true;
        var startX = 0;
        var going = false;
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            if (going) {
                return;
            }
            startX = e.stageX;
        }, this);
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (e.stageX - startX < -5 && !going) {
                going = true;
                egret.Tween.get(Main.loadingView)
                    .to({ x: -1334, alpha: 0 }, 2500, egret.Ease.sineIn)
                    .call(function () {
                    stage.removeChild(Main.loadingView);
                });
                egret.Tween.get(_this.bgLayer)
                    .to({ alpha: 1, x: -300 }, 3500, egret.Ease.sineInOut)
                    .call(function () {
                    egret.Tween.get(gameStart.boat)
                        .to({ alpha: 1 }, 500);
                    _this.middleLayer.removeChild(cloud);
                    var rightbtn = new btn;
                });
                _this.touchLayer.removeChild(pre_skip);
                egret.Tween.get(cloudright3)
                    .to({ x: -700 }, 2500, egret.Ease.sineOut);
                egret.Tween.get(cloud)
                    .to({ x: -200 }, 2000, egret.Ease.sineOut);
                egret.Tween.get(bg)
                    .to({ alpha: 1 }, 3500);
            }
        }, this);
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        this.touchLayer.addChild(topMask);
        new page1();
        new page2();
        new page3();
        new page4();
        new page5();
        new page6();
    };
    return gameStart;
}());
gameStart.bgLayer = new egret.Sprite;
gameStart.bottomLayer = new egret.Sprite;
gameStart.boatLayer = new egret.Sprite;
gameStart.middleLayer = new egret.Sprite;
gameStart.topLayer = new egret.Sprite;
gameStart.touchLayer = new egret.Sprite;
gameStart.alertLayer = new egret.Sprite;
gameStart.boat = new egret.Sprite;
gameStart.boat2 = new egret.Sprite;
gameStart.musicOn = false;
gameStart.stageW = 1207;
gameStart.stageH = 750;
__reflect(gameStart.prototype, "gameStart");
