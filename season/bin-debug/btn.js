var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var btn = (function (_super) {
    __extends(btn, _super);
    function btn() {
        var _this = _super.call(this) || this;
        _this.moving = false;
        _this.playing = true;
        _this.speed = 10;
        _this.init();
        return _this;
    }
    btn.prototype.init = function () {
        var _this = this;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        var stageW = gameStart.touchLayer.width;
        var music = new egret.Bitmap(RES.getRes("music_png"));
        gameStart.touchLayer.addChild(music);
        music.x = stageW - 75;
        music.y = 55;
        music.anchorOffsetX = music.anchorOffsetY = 35;
        music.touchEnabled = true;
        egret.Tween.get(music, { loop: true })
            .to({ rotation: 360 }, 10000);
        var stopTime;
        music.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            if (_this.playing) {
                _this.playing = false;
                stopTime = gameStart.soundChannel.position;
                gameStart.soundChannel.stop();
                egret.Tween.pauseTweens(music);
            }
            else {
                _this.playing = true;
                gameStart.soundChannel = gameStart.sound.play(stopTime, 0);
                egret.Tween.resumeTweens(music);
            }
        }, this);
        this.rightbtnlight = new egret.Bitmap(RES.getRes("rightbtnlight_png"));
        gameStart.touchLayer.addChild(this.rightbtnlight);
        this.rightbtnlight.x = stageW - 224;
        this.rightbtnlight.y = 575;
        this.rightbtn = new egret.Bitmap(RES.getRes("rightbtn_png"));
        gameStart.touchLayer.addChild(this.rightbtn);
        this.rightbtn.x = stageW - 200;
        this.rightbtn.y = 600;
        this.rightbtn.alpha = 0;
        this.rightbtn.touchEnabled = true;
        this.moving = false;
        var realbtn = new egret.Shape();
        realbtn.graphics.beginFill(0x000000, 0.5);
        realbtn.graphics.drawRect(stageW - 250, 560, 200, 170);
        realbtn.graphics.endFill();
        realbtn.alpha = 0;
        realbtn.touchEnabled = true;
        gameStart.touchLayer.addChild(realbtn);
        var rightbtntxt = new egret.Bitmap(RES.getRes("righttxt_png"));
        gameStart.touchLayer.addChild(rightbtntxt);
        rightbtntxt.x = stageW - 240;
        rightbtntxt.y = 530;
        egret.Tween.get(this.rightbtn)
            .to({ alpha: 1 }, 1000);
        realbtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.moving = true;
            rightbtntxt.alpha = 0;
            _this.rightbtnlight.alpha = 0;
        }, this);
        gameStart.touchLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (e.stageX < stageW - 50 && e.stageX > stageW - 250 && e.stageY > 550 && e.stageY < 730) {
                _this.moving = true;
                rightbtntxt.alpha = 0;
                _this.rightbtnlight.alpha = 0;
            }
            else {
                _this.moving = false;
                _this.rightbtnlight.alpha = 1;
            }
        }, this);
        realbtn.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            _this.moving = false;
            _this.rightbtnlight.alpha = 1;
        }, this);
    };
    btn.prototype.onEnterFrame = function () {
        if (this.moving) {
            if (gameStart.bgLayer.x <= gameStart.touchLayer.width - 14660) {
                this.rightbtn.alpha = 0;
                this.rightbtnlight.y = 800;
                return;
            }
            gameStart.bgLayer.x -= this.speed;
            switch (gameStart.bgLayer.x) {
                case this.nextpoint(-750):
                    egret.Tween.get(page1.page1title)
                        .to({ "alpha": 1 }, 1000);
                    break;
                case this.nextpoint(-3488):
                    egret.Tween.get(page2.page2title)
                        .to({ "alpha": 1 }, 1000);
                    break;
                case this.nextpoint(-6430):
                    egret.Tween.get(page3.page3title)
                        .to({ "alpha": 1 }, 1000);
                    break;
                case this.nextpoint(-9008):
                    egret.Tween.get(page4.page4title)
                        .to({ "alpha": 1 }, 1000);
                    break;
                case this.nextpoint(-11500):
                    egret.Tween.get(page5.page5title)
                        .to({ "alpha": 1 }, 1000);
                    break;
                case this.nextpoint(-13200):
                    egret.Tween.get(page6.page6title)
                        .to({ "alpha": 1 }, 1000);
                    egret.Tween.get(page6.goinbtn)
                        .to({ "alpha": 1 }, 1000);
                    var realbtn = new egret.Shape();
                    realbtn.graphics.beginFill(0x000000, 0);
                    realbtn.graphics.drawRect(gameStart.touchLayer.width - 600, 560, 200, 170);
                    realbtn.graphics.endFill();
                    realbtn.touchEnabled = true;
                    gameStart.touchLayer.addChild(realbtn);
                    realbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                        var img = new Image();
                        img.src = location.protocol + '//stats1.jiuyan.info/onepiece/router.html?action=shouye_skip';
                        window.location.href = 'https://h5.in66.com/inpromo/2017/pr-season/index.html';
                    }, this);
                    break;
            }
            if (gameStart.bgLayer.x < -1130 + gameStart.touchLayer.width / 2) {
                gameStart.boat.x += this.speed;
            }
            if (gameStart.bgLayer.x > -2000) {
            }
            else if (gameStart.bgLayer.x > -3021) {
                gameStart.boat.y -= 3;
            }
            else if (gameStart.bgLayer.x > -4560) {
            }
            else if (gameStart.bgLayer.x > -5848) {
                gameStart.boat.y -= 0.6;
            }
            else if (gameStart.bgLayer.x > -6600) {
                gameStart.boat.y += 1;
            }
            else if (gameStart.bgLayer.x > -7836) {
                gameStart.boat.y -= 0.9;
            }
            else if (gameStart.bgLayer.x > -9000) {
                gameStart.boat.alpha = 0;
                gameStart.boat.y += 3.7;
            }
            else if (gameStart.bgLayer.x > -10428) {
                if (gameStart.boat.alpha <= 0.9) {
                    gameStart.boat.alpha += 0.1;
                }
                else {
                    gameStart.boat.alpha = 1;
                }
            }
            else if (gameStart.bgLayer.x > -12748) {
                gameStart.boat.alpha = 0;
                gameStart.boat2.alpha = 1;
                gameStart.boat2.x += this.speed;
            }
            else if (gameStart.bgLayer.x > -12800) {
                gameStart.boat2.alpha = 0;
            }
        }
    };
    btn.prototype.nextpoint = function (e) {
        return Math.floor(e / this.speed) * this.speed + this.speed;
    };
    return btn;
}(egret.Sprite));
__reflect(btn.prototype, "btn");
