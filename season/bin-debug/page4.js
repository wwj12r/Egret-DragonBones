var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page4 = (function () {
    function page4() {
        page4.init();
    }
    page4.init = function () {
        var page4 = new Gif('page4', true);
        page4.x = 9600;
        page4.y = 450;
        page4.scaleX = 2;
        page4.scaleY = 2;
        gameStart.bottomLayer.addChild(page4);
        page4.play("page4Armature", "page4Animation");
        var heye1 = new egret.Bitmap(RES.getRes("heye1_png"));
        gameStart.middleLayer.addChild(heye1);
        heye1.x = 10200;
        heye1.y = 750;
        heye1.anchorOffsetX = 300;
        heye1.anchorOffsetY = 750;
        heye1.scaleX = 1.05;
        heye1.scaleY = 1.05;
        egret.Tween.get(heye1, { loop: true })
            .to({ rotation: -2 }, 1000)
            .to({ rotation: 0 }, 1000);
        var heye3 = new egret.Bitmap(RES.getRes("heye3_png"));
        gameStart.middleLayer.addChild(heye3);
        heye3.x = 11000;
        heye3.y = 510;
        heye3.anchorOffsetX = 400;
        heye3.anchorOffsetY = 520;
        egret.Tween.get(heye3, { loop: true })
            .to({ rotation: -2 }, 1000)
            .to({ rotation: 0 }, 1000);
        var fish5 = new egret.Bitmap(RES.getRes("fish5_png"));
        gameStart.middleLayer.addChild(fish5);
        fish5.x = 10000;
        fish5.y = 300;
        fish5.alpha = 0;
        egret.Tween.get(fish5, { loop: true })
            .to({ x: 10100, alpha: 1 }, 500)
            .to({ x: 10600, alpha: 1 }, 2000);
        var fish6 = new egret.Bitmap(RES.getRes("fish5_png"));
        gameStart.middleLayer.addChild(fish6);
        fish6.x = 10000;
        fish6.y = 100;
        fish6.alpha = 0;
        egret.Tween.get(fish6, { loop: true })
            .to({ x: 10200, alpha: 1 }, 500)
            .to({ x: 11000, alpha: 1 }, 1500)
            .to({ x: 11100, alpha: 0 }, 500);
        var heye2 = new egret.Bitmap(RES.getRes("heye2_png"));
        gameStart.middleLayer.addChild(heye2);
        heye2.x = 10600;
        heye2.y = 750;
        heye2.anchorOffsetX = 300;
        heye2.anchorOffsetY = 595;
        egret.Tween.get(heye2, { loop: true })
            .to({ rotation: 2 }, 1000)
            .to({ rotation: 0 }, 1000);
        var fish7 = new egret.Bitmap(RES.getRes("fish5_png"));
        gameStart.middleLayer.addChild(fish7);
        fish7.x = 10500;
        fish7.y = 400;
        fish7.alpha = 0;
        egret.Tween.get(fish7, { loop: true })
            .to({ x: 10600, alpha: 1 }, 500)
            .to({ x: 11100, alpha: 1 }, 2000);
        var heye4 = new egret.Bitmap(RES.getRes("heye4_png"));
        gameStart.middleLayer.addChild(heye4);
        heye4.x = 11100;
        heye4.y = 530;
        heye4.anchorOffsetX = 450;
        heye4.anchorOffsetY = 300;
        egret.Tween.get(heye4, { loop: true })
            .to({ rotation: -2 }, 800)
            .to({ rotation: 0 }, 800);
        var boy = new egret.Bitmap(RES.getRes("boy_png"));
        gameStart.middleLayer.addChild(boy);
        boy.x = 10400;
        boy.y = 579;
        var tree_fire = new egret.Bitmap(RES.getRes("tree_fire_png"));
        gameStart.middleLayer.addChild(tree_fire);
        tree_fire.x = 10475;
        tree_fire.y = 550;
        tree_fire.scaleX = 2;
        tree_fire.scaleY = 2;
        egret.Tween.get(tree_fire, { loop: true })
            .to({ alpha: 0 }, 1000)
            .to({ alpha: 1 }, 1000);
        this.page4title = new egret.Bitmap(RES.getRes("page4title_png"));
        gameStart.middleLayer.addChild(this.page4title);
        this.page4title.x = 9600;
        this.page4title.y = 50;
        this.page4title.alpha = 0;
    };
    return page4;
}());
__reflect(page4.prototype, "page4");
