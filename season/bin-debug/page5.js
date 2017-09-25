var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page5 = (function () {
    function page5() {
        page5.init();
    }
    page5.init = function () {
        var lake = new egret.Bitmap(RES.getRes("lake_jpg"));
        gameStart.bottomLayer.addChild(lake);
        lake.x = 11066;
        lake.y = 0;
        egret.Tween.get(lake, {
            loop: true
        })
            .to({ x: 11100 }, 1500)
            .to({ x: 11066 }, 1500);
        var color = new egret.Bitmap(RES.getRes("color_png"));
        gameStart.bottomLayer.addChild(color);
        color.x = 11066;
        color.y = 20;
        // color.alpha = 0.5
        egret.Tween.get(color, {
            loop: true
        })
            .to({ x: 11200 }, 2500)
            .to({ x: 11066 }, 2500);
        var fish2 = new Gif('fish2', true);
        fish2.x = 11600;
        fish2.y = 550;
        fish2.scaleX = 5;
        fish2.scaleY = 5;
        fish2.alpha = 0;
        fish2.rotation = 0;
        gameStart.bottomLayer.addChild(fish2);
        fish2.play("Sprite", "Sprite");
        egret.Tween.get(fish2, {
            loop: true
        })
            .to({ x: 11700, y: 400, alpha: 0.3 }, 500)
            .to({ x: 12000, y: -500, alpha: 0.3 }, 4000)
            .to({ x: 12100, y: -700, alpha: 0 }, 500)
            .wait(2000);
        var cloud2 = new egret.Bitmap(RES.getRes("cloud2_png"));
        gameStart.middleLayer.addChild(cloud2);
        cloud2.x = 12906;
        cloud2.y = -60;
        egret.Tween.get(cloud2, {
            loop: true
        })
            .to({ y: -80 }, 1500)
            .to({ y: -60 }, 1500);
        var cloud1 = new egret.Bitmap(RES.getRes("cloud1_png"));
        gameStart.middleLayer.addChild(cloud1);
        cloud1.x = 12716;
        cloud1.y = 350;
        egret.Tween.get(cloud1, {
            loop: true
        })
            .to({ y: 360 }, 1500)
            .to({ y: 350 }, 1500);
        var halo = new egret.Bitmap(RES.getRes("halo_png"));
        gameStart.bottomLayer.addChild(halo);
        halo.x = 11066;
        halo.y = 20;
        halo.alpha = 0.5;
        egret.Tween.get(halo, {
            loop: true
        })
            .to({ x: 11200 }, 2500)
            .to({ x: 11066 }, 2500);
        var cloud3 = new egret.Bitmap(RES.getRes("cloud3_png"));
        gameStart.middleLayer.addChild(cloud3);
        cloud3.x = 12266;
        cloud3.y = -50;
        cloud3.scaleX = 0.5;
        cloud3.scaleY = 0.5;
        cloud3.anchorOffsetX = 600;
        cloud3.anchorOffsetY = 200;
        egret.Tween.get(cloud3, {
            loop: true
        })
            .to({ scaleX: 0.7, scaleY: 0.7, alpha: 0 }, 1500)
            .to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 1500);
        var cloud4 = new egret.Bitmap(RES.getRes("cloud3_png"));
        gameStart.middleLayer.addChild(cloud4);
        cloud4.x = 12766;
        cloud4.y = 720;
        cloud4.anchorOffsetX = 600;
        cloud4.anchorOffsetY = 200;
        egret.Tween.get(cloud4, {
            loop: true
        })
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 0 }, 1500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 1500);
        this.page5title = new egret.Bitmap(RES.getRes("page5title_png"));
        gameStart.middleLayer.addChild(this.page5title);
        this.page5title.x = 12450;
        this.page5title.y = 70;
        this.page5title.alpha = 0;
    };
    return page5;
}());
__reflect(page5.prototype, "page5");
