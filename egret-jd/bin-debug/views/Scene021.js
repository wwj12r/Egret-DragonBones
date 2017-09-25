var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene021 = (function (_super) {
    __extends(Scene021, _super);
    // public  sound: egret.Sound;
    // public static  soundChannel: egret.SoundChannel
    // public  musicOn:boolean = false;
    // public  musicLoaded:boolean = false;
    function Scene021() {
        var _this = _super.call(this) || this;
        _this.speed = 10;
        _this.addLen = 0;
        _this.isMoving = false;
        _this.isLastMoving = false;
        _this.touched = false;
        _this.just021_06 = false;
        _this.touchBegin = false;
        _this.width = PromoData.stageW;
        _this.height = PromoData.stageH;
        _this.touchEnabled = true;
        if (PromoData.skip) {
            _this.just021_06 = true;
        }
        _this.createView();
        return _this;
    }
    // private autoplay () {
    //     this.sound = new egret.Sound();
    //     var url: string = "resource/assets/sound.mp3";
    //     //添加加载完成侦听
    //     this.sound.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
    //         this.musicLoaded = true 
    //         //获取加载到的 Sound 对象
    //         // var sound:egret.Sound = <egret.Sound>event.target;
    //         //播放音乐
    //     }, this);
    //     //开始加载
    //     this.sound.load(url);
    // }
    Scene021.prototype.create021_06 = function (frontX, frontY) {
        if (frontY === void 0) { frontY = 750; }
        // 06
        this._page021_06 = new Page021_06();
        this.addChildAt(this._page021_06, 0);
        this._page021_06.x = frontX;
        this._bg_021_06 = new egret.Bitmap(RES.getRes("02_06_bg_jpg"));
        this._bg_021_06.width = this._page021_06.width;
        this._bg_021_06.x = this._page021_06.x;
        this.addChildAt(this._bg_021_06, 0);
    };
    Scene021.prototype.createView = function () {
        if (this.just021_06) {
            this.create021_06(-750);
            return;
        }
        // this.autoplay()
        // 01
        this._page021_01 = new Page021_01();
        this._page021_01.scaleY = 1.01;
        this._page021_01.x = 0;
        this._page021_01.y = -5;
        this.addChild(this._page021_01);
        this._current_page = '_page021_01';
        // 02
        this._page021_02 = new Page021_02();
        this._page021_02.x = this._page021_01.x + this._page021_01.width - 800;
        this.addChildAt(this._page021_02, 0);
        this._bg_021_02 = new egret.Bitmap(RES.getRes("02_02_bg_jpg"));
        this._bg_021_02.width = this._page021_02.width;
        this._bg_021_02.x = this._page021_02.x;
        this.addChildAt(this._bg_021_02, 0);
        // 03
        this._page021_03 = new Page021_03();
        this.addChildAt(this._page021_03, 3);
        this._page021_03.x = this._page021_02.x + this._page021_02.width - 200;
        this._bg_021_03 = new egret.Shape();
        this._bg_021_03.graphics.beginFill(0xfed1ea);
        this._bg_021_03.graphics.drawRect(0, 0, this._page021_03.width, PromoData.stageH);
        this._bg_021_03.graphics.endFill();
        this._bg_021_03.x = this._page021_03.x;
        this.addChildAt(this._bg_021_03, 0);
        // 04
        this._page021_04 = new Page021_04();
        this.addChild(this._page021_04);
        this._page021_04.x = this._page021_03.x + this._page021_03.width - 800;
        this.addChildAt(this._page021_04, 5);
        // 05
        this._page021_05 = new Page021_05();
        this.addChild(this._page021_05);
        this._page021_05.x = this._page021_04.x + this._page021_04.width - 320;
        this.addChildAt(this._page021_05, 4);
        this.create021_06(this._page021_05.x + this._page021_05.width - 300);
        this.len = 13910; //this._page021_06.x + this._page021_06.width
        console.log(this.len); // 14710
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.kite = new Gif('kite', true);
        this.kite.x = this.width / 2 - 280;
        this.kite.y = this.height / 2;
        this.kite.scaleX = 1.5;
        this.kite.scaleY = 1.5;
        this.addChild(this.kite);
        this.kite.play("armaturekite", "animationkite");
        this.topLayer = new egret.Sprite;
        this.topLayer.x = this.topLayer.y = 0;
        this.addChild(this.topLayer);
        var ballon = new egret.Bitmap(RES.getRes("ballon_png"));
        ballon.x = 2000;
        ballon.y = 200;
        this.topLayer.addChild(ballon);
        egret.Tween.get(ballon, { loop: true })
            .to({ y: 250 }, 1000)
            .to({ y: 200 }, 1000);
        // let kite2 = new egret.Bitmap(RES.getRes("kite2_png"));
        // kite2.x = 4800;
        // kite2.y = 500;
        // this.topLayer.addChild(kite2);
        // egret.Tween.get(kite2,{loop:true})
        //     .to({y: 550}, 1000)
        //     .to({y: 500}, 1000)
        var cloud2_24 = new egret.Bitmap(RES.getRes("cloud2-24_png"));
        cloud2_24.x = 4600;
        cloud2_24.y = -200;
        this.topLayer.addChild(cloud2_24);
        egret.Tween.get(cloud2_24, { loop: true })
            .to({ y: -240 }, 1000)
            .to({ y: -200 }, 1000);
        var cloud2_23 = new egret.Bitmap(RES.getRes("cloud2-23_png"));
        cloud2_23.x = 4600;
        cloud2_23.y = 108;
        this.topLayer.addChild(cloud2_23);
        egret.Tween.get(cloud2_23, { loop: true })
            .to({ y: 140 }, 1000)
            .to({ y: 108 }, 1000);
        var cloud2_22 = new egret.Bitmap(RES.getRes("cloud2-22_png"));
        cloud2_22.x = 4600;
        cloud2_22.y = 416;
        this.topLayer.addChild(cloud2_22);
        egret.Tween.get(cloud2_22, { loop: true })
            .to({ y: 350 }, 1000)
            .to({ y: 416 }, 1000);
        // let kite1 = new egret.Bitmap(RES.getRes("kite1_png"));
        // kite1.x = 4600;
        // kite1.y = 100;
        // this.topLayer.addChild(kite1);
        // egret.Tween.get(kite1,{loop:true})
        //     .to({y: 190}, 1000)
        //     .to({y: 100}, 1000)
        // let cloud2_21 = new egret.Bitmap(RES.getRes("cloud2-21_png"));
        // cloud2_21.x = 4600;
        // cloud2_21.y = 280;
        // this.topLayer.addChild(cloud2_21);
        // egret.Tween.get(cloud2_21,{loop:true})
        //     .to({y: 250,x: 4690}, 1000)
        //     .to({y: 280,x: 4600}, 1000)
        var fur = new egret.Bitmap(RES.getRes("fur_png"));
        fur.x = 6809;
        fur.y = -172;
        this.topLayer.addChild(fur);
        egret.Tween.get(fur, { loop: true })
            .to({ y: -100 }, 1000)
            .to({ y: -172 }, 1000);
        this.createTouchArea();
        inLib.track('h5_promo_egret-jd_main_page_enter');
    };
    Scene021.prototype.createTouchArea = function () {
        this.touchArea = new egret.Bitmap(RES.getRes("btn_1_png"));
        this.touchArea.width = 93;
        this.touchArea.height = 93;
        this.touchArea.x = this.width - 200;
        this.touchArea.y = 600;
        this.touchArea.touchEnabled = true;
        this.touchTxt = new egret.Bitmap(RES.getRes("btn_txt_png"));
        this.touchTxt.width = 184;
        this.touchTxt.height = 75;
        this.touchTxt.x = this.width - 240;
        this.touchTxt.y = 520;
        this.addChild(this.touchTxt);
        var tw = egret.Tween.get(this.touchTxt, { loop: true });
        tw.to({ "alpha": 0 }, 1000);
        this.touchWrapper = new egret.Bitmap(RES.getRes("btn_2_png"));
        this.touchWrapper.width = 133;
        this.touchWrapper.height = 133;
        this.touchWrapper.x = this.width - 220;
        this.touchWrapper.y = 580;
        this.addChild(this.touchWrapper);
        this.addChild(this.touchArea);
        this.addTouchAreaListener();
    };
    Scene021.prototype.addTouchAreaListener = function () {
        var _this = this;
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log('TOUCH_BEGIN');
            if (!_this.touchBegin) {
                inLib.track('h5_promo_egret-jd_touch_begin');
                _this.touchBegin = true;
            }
            _this.isMoving = true;
            _this.touchWrapper.alpha = 0;
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (_this.touchArea.hitTestPoint(e.stageX, e.stageY)) {
                _this.isMoving = true;
                _this.touchWrapper.alpha = 0;
            }
            else {
                _this.isMoving = false;
                _this.touchWrapper.alpha = 1;
            }
        }, this);
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            // console.log('TOUCH_END')
            _this.isMoving = false;
            _this.touchWrapper.alpha = 1;
        }, this);
    };
    Scene021.prototype.autoAddPage = function () {
        if (this._current_page == '_page021_01' && (this._page021_01.width - PromoData.stageW - this.addLen <= 400)) {
            // 02
            this._page021_02 = new Page021_02();
            this._page021_02.x = this._page021_01.x + this._page021_01.width - 600;
            this.addChildAt(this._page021_02, 0);
            this._bg_021_02 = new egret.Bitmap(RES.getRes("02_02_bg_jpg"));
            this._bg_021_02.width = this._page021_02.width;
            this._bg_021_02.x = this._page021_02.x;
            this.addChildAt(this._bg_021_02, 0);
            this._current_page = '_page021_02';
        }
    };
    Scene021.prototype.onEnterFrame = function () {
        // if (this.musicLoaded && !this.musicOn) {
        //     this.musicOn = true;
        //     Scene021.soundChannel = this.sound.play(0, 0);
        // }
        if (!this.touched && this.isMoving) {
            this.removeChild(this.touchTxt);
            this.touched = true;
        }
        if (this.isMoving && !this.isLastMoving) {
            if (this.addLen + 300 + this.speed >= this.len - PromoData.stageW) {
                this.speed = this.len - PromoData.stageW - 300 - this.addLen;
                this.isLastMoving = true;
            }
            console.log(this.speed);
            if (this.speed < 10) {
                this.speed = 0;
            }
            if (this.speed == 0) {
                PromoData.scene021.removeChild(this.touchArea);
                PromoData.scene021.removeChild(this.touchWrapper);
            }
            // this.autoAddPage()
            this.addLen += this.speed;
            // console.log(this.addLen)
            if (this.topLayer) {
                this.topLayer.x -= this.speed;
            }
            if (this._bg_021_02) {
                this._bg_021_02.x -= this.speed;
            }
            if (this._bg_021_03) {
                this._bg_021_03.x -= this.speed;
            }
            if (this._bg_021_06) {
                this._bg_021_06.x -= this.speed;
            }
            if (this._page021_01) {
                this._page021_01.x -= this.speed;
            }
            if (this._page021_02) {
                this._page021_02.x -= this.speed;
            }
            if (this._page021_03) {
                this._page021_03.x -= this.speed;
            }
            if (this._page021_04) {
                this._page021_04.x -= this.speed;
            }
            if (this._page021_05) {
                this._page021_05.x -= this.speed;
            }
            if (this._page021_06) {
                this._page021_06.x -= this.speed;
            }
            // kite运动
            if (this.addLen < 100) {
                this.kite.y -= 0.5;
            }
            else if (this.addLen < 2200) {
                this.kite.y += 1;
            }
            else if (this.addLen < 3590) {
                this.kite.y -= 2.2;
            }
            else if (this.addLen < 4570) {
                this.kite.y += 1.5;
            }
            else if (this.addLen < 5610) {
                this.kite.y -= 3;
            }
            else if (this.addLen < 6950) {
                this.kite.y += 1;
            }
            else if (this.addLen < 7160) {
            }
            else if (this.addLen < 8330) {
                this.kite.y += 2.9;
            }
            else if (this.addLen < 9550) {
                this.kite.y -= 2;
            }
            else if (this.addLen < 10910) {
                this.kite.y += 1.5;
            }
            else if (this.addLen < 12380) {
            }
        }
    };
    return Scene021;
}(egret.Sprite));
__reflect(Scene021.prototype, "Scene021");
