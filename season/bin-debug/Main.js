//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        Main.loadingView = new LoadingUI();
        this.stage.addChild(Main.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onloadComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onloadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onloadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("load", 1);
        RES.loadGroup("preload", 0);
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        var _this = this;
        if (event.groupName == "load") {
            this.createLoading();
        }
        else if (event.groupName == "preload") {
            Main.prerealloaddone = true;
            console.log('realdone');
            // this.createGameScene();
            // RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            // RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            // RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            // RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            // Main.loadingView.removeChild(Main.textfield)
            // egret.Tween.get(Main.loadinggif)
            //     .to({ "alpha": 0 }, 500)
            //     .call(()=>{
            //         this.prepage();
            //     })
            if (Main.prefakeload == 99 && Main.textfield) {
                Main.textfield.text = '100%';
                setTimeout(function () {
                    RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, _this.onResourceProgress, _this);
                    RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, _this.onItemLoadError, _this);
                    Main.loadingView.removeChild(Main.textfield);
                    egret.Tween.get(Main.loadinggif)
                        .to({ "alpha": 0 }, 500)
                        .call(function () {
                        _this.prepage();
                    });
                }, 500);
            }
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    Main.prototype.onResourceProgress = function (event) {
        // if (event.groupName == "preload") {
        //     Main.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        //     // Main.textfield.text = Math.floor(event.itemsLoaded/event.itemsTotal*100) + '%'
        // }
    };
    Main.prototype.timerFunc = function (event) {
        Main.prefakeload++;
        Main.textfield.text = Main.prefakeload + '%';
    };
    Main.prototype.timerComFunc = function (event) {
        var _this = this;
        if (Main.prerealloaddone) {
            Main.textfield.text = '100%';
            setTimeout(function () {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, _this.onResourceProgress, _this);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, _this.onItemLoadError, _this);
                Main.loadingView.removeChild(Main.textfield);
                // this.createGameScene();
                egret.Tween.get(Main.loadinggif)
                    .to({ "alpha": 0 }, 500)
                    .call(function () {
                    _this.prepage();
                });
            }, 500);
        }
    };
    Main.prototype.createLoading = function () {
        var stageW = this.stage.stage.stageWidth;
        var stageH = this.stage.stage.stageHeight;
        if (window.orientation != 0 && window.orientation != undefined) {
            stageW = 1207;
            stageH = 750;
            console.log(window.orientation);
        }
        var bg = new egret.Bitmap(RES.getRes("load_bg_jpg"));
        bg.width = stageW;
        bg.height = stageH;
        Main.loadingView.addChild(bg);
        // 缓动云
        // Main.load_txt = new egret.Bitmap(RES.getRes("load_txt_png"));
        // Main.load_txt.x = stageW/2;
        // Main.load_txt.y = 380;
        // Main.load_txt.anchorOffsetX = 278;
        // Main.load_txt.anchorOffsetY = 22;
        // Main.load_txt.rotation = -90;
        // Main.loadingView.addChild(Main.load_txt);
        // egret.Tween.get(Main.load_txt)
        //     .wait(2000)
        //     .to({ alpha:0 }, 1000)
        //     .call(()=>{
        //     })
        Main.loadinggif = new Gif('load', true);
        Main.loadinggif.x = stageW / 2 + 30;
        Main.loadinggif.y = 400;
        Main.loadingView.addChild(Main.loadinggif);
        Main.loadinggif.play("Armature", "newAnimation");
        Main.textfield.text = '0%';
        Main.textfield.x = stageW / 2 - 20;
        Main.textfield.y = 530;
        Main.textfield.size = 40;
        Main.textfield.textColor = 0x878072;
        Main.loadingView.addChild(Main.textfield);
        var timer = new egret.Timer(50, 99);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    Main.prototype.prepage = function () {
        var stageW = this.stage.stage.stageWidth;
        var stageH = this.stage.stage.stageHeight;
        if (window.orientation != 0 && window.orientation != undefined) {
            stageW = 1207;
            stageH = 750;
        }
        var prelayer = new egret.Sprite();
        prelayer.alpha = 0;
        prelayer.touchEnabled = true;
        egret.Tween.get(prelayer)
            .to({ "alpha": 1 }, 2000);
        Main.loadingView.addChild(prelayer);
        // let moveStart:number = 0;
        // let going:boolean = false;
        // prelayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
        //     moveStart = e.stageX;
        // },this);
        // prelayer.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{
        //     if (e.stageX - moveStart < -5 && !going) {
        //         going = true;
        //         egret.Tween.get(Main.loadingView)
        //             .to({x:-1334,alpha:0},2000)
        //             .call(()=>{
        //                 this.stage.removeChild(Main.loadingView)
        //             })
        //     }
        // },this);
        var bg = new egret.Bitmap(RES.getRes("pre_bg_jpg"));
        bg.x = stageW / 2 - 650;
        bg.y = 0;
        prelayer.addChild(bg);
        var logo = new egret.Bitmap(RES.getRes("logo_png"));
        logo.x = 50;
        logo.y = 20;
        prelayer.addChild(logo);
        Main.pregif = new Gif('pre', true);
        Main.pregif.x = stageW / 2 + 40;
        Main.pregif.y = 380;
        prelayer.addChild(Main.pregif);
        Main.pregif.play("preArmature", "preAnimation");
        var title = new egret.Bitmap(RES.getRes("pre_title_png"));
        title.alpha = 0;
        title.x = stageW / 2 - 145;
        title.y = 100;
        prelayer.addChild(title);
        egret.Tween.get(title)
            .wait(1000)
            .to({ "alpha": 1 }, 1000);
        // 缓动云
        var cloud1 = new egret.Bitmap(RES.getRes("pre_cloud1_png"));
        cloud1.x = stageW / 2 - 500;
        cloud1.y = 30;
        cloud1.scaleX = 1.3;
        cloud1.scaleY = 1.3;
        prelayer.addChild(cloud1);
        egret.Tween.get(cloud1, {
            loop: true
        })
            .to({ x: stageW / 2 - 445 }, 2000, egret.Ease.sineInOut)
            .to({ x: stageW / 2 - 500 }, 2000, egret.Ease.sineInOut);
        var cloud2 = new egret.Bitmap(RES.getRes("pre_cloud1_png"));
        cloud2.x = stageW / 2 + 300;
        cloud2.y = 220;
        prelayer.addChild(cloud2);
        egret.Tween.get(cloud2, {
            loop: true
        })
            .to({ x: stageW / 2 + 345 }, 1500, egret.Ease.sineInOut)
            .to({ x: stageW / 2 + 300 }, 1500, egret.Ease.sineInOut);
        var cloud3 = new egret.Bitmap(RES.getRes("pre_cloud2_png"));
        cloud3.x = stageW / 2 - 445;
        cloud3.y = 180;
        cloud3.scaleX = 2;
        cloud3.scaleY = 2;
        prelayer.addChild(cloud3);
        egret.Tween.get(cloud3, {
            loop: true
        })
            .to({ x: stageW / 2 - 500 }, 2000, egret.Ease.sineInOut)
            .to({ x: stageW / 2 - 445 }, 2000, egret.Ease.sineInOut);
        var cloudsun = new egret.Bitmap(RES.getRes("pre_cloudsun_png"));
        cloudsun.x = stageW / 2 + 145;
        cloudsun.y = 40;
        cloudsun.scaleX = 0.5;
        cloudsun.scaleY = 0.5;
        prelayer.addChild(cloudsun);
        egret.Tween.get(cloudsun, {
            loop: true
        })
            .to({ x: stageW / 2 + 125 }, 3000, egret.Ease.sineInOut)
            .to({ x: stageW / 2 + 145 }, 3000, egret.Ease.sineInOut);
        var cloud4 = new egret.Bitmap(RES.getRes("pre_cloud2_png"));
        cloud4.x = stageW / 2 + 105;
        cloud4.y = 350;
        cloud4.scaleX = 2;
        cloud4.scaleY = 2;
        prelayer.addChild(cloud4);
        egret.Tween.get(cloud4, {
            loop: true
        })
            .to({ x: stageW / 2 + 150 }, 2000, egret.Ease.sineInOut)
            .to({ x: stageW / 2 + 105 }, 2000, egret.Ease.sineInOut);
        var cloud5 = new egret.Bitmap(RES.getRes("pre_cloud1_png"));
        cloud5.x = stageW / 2 - 180;
        cloud5.y = 480;
        cloud5.scaleX = 0.3;
        cloud5.scaleY = 0.3;
        prelayer.addChild(cloud5);
        egret.Tween.get(cloud5, {
            loop: true
        })
            .to({ x: stageW / 2 - 160 }, 1500, egret.Ease.sineInOut)
            .to({ x: stageW / 2 - 180 }, 1500, egret.Ease.sineInOut);
        var pre_txt = new egret.Bitmap(RES.getRes("pre_txt_png"));
        pre_txt.x = stageW / 2 + 350;
        pre_txt.y = 650;
        prelayer.addChild(pre_txt);
        var pre_arrow = new egret.Bitmap(RES.getRes("pre_arrow_png"));
        pre_arrow.x = stageW / 2 + 430;
        pre_arrow.y = 620;
        pre_arrow.alpha = 0;
        prelayer.addChild(pre_arrow);
        egret.Tween.get(pre_arrow, { loop: true })
            .to({ x: stageW / 2 + 400, alpha: 1 }, 500)
            .to({ x: stageW / 2 + 380, alpha: 1 }, 500)
            .to({ x: stageW / 2 + 360, alpha: 0 }, 500);
        this.createGameScene();
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        gameStart.init(this.stage);
    };
    return Main;
}(egret.DisplayObjectContainer));
Main.textfield = new egret.TextField();
Main.prefakeload = 0;
Main.prerealloaddone = false;
__reflect(Main.prototype, "Main");
