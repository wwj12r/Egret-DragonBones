var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page1 = (function () {
    function page1() {
        page1.init();
    }
    page1.init = function () {
        var page1 = new Gif('page1', true);
        page1.x = 7365;
        page1.y = 370;
        page1.scaleX = 2;
        page1.scaleY = 2;
        gameStart.bottomLayer.addChild(page1);
        page1.play("page1Armature", "page1Animation");
        var fish1 = new Gif('fish1', true);
        fish1.x = 1000;
        fish1.y = 200;
        fish1.scaleX = 2;
        fish1.scaleY = 2;
        fish1.alpha = 0;
        gameStart.bottomLayer.addChild(fish1);
        fish1.play("Sprite1", "Sprite1");
        egret.Tween.get(fish1, {
            loop: true
        })
            .to({ x: 1100, "alpha": 1 }, 400)
            .to({ x: 2000, "alpha": 1 }, 2000)
            .to({ x: 2100, "alpha": 0 }, 400)
            .wait(1000);
        var tree = new egret.Bitmap(RES.getRes("tree_png"));
        gameStart.middleLayer.addChild(tree);
        tree.x = 2310;
        tree.y = 0;
        var xianren = new egret.Bitmap(RES.getRes("xianren_png"));
        gameStart.middleLayer.addChild(xianren);
        xianren.x = 2000;
        xianren.y = 355;
        xianren.alpha = 0;
        egret.Tween.get(xianren, {
            loop: true
        })
            .to({ x: 1900, "alpha": 1 }, 800)
            .to({ x: 1800, "alpha": 0 }, 800)
            .to({ x: 1700, "alpha": 1 }, 800)
            .to({ x: 1600, "alpha": 0 }, 800)
            .to({ x: 1500, "alpha": 1 }, 800)
            .to({ x: 1400, "alpha": 0 }, 800);
        this.page1title = new egret.Bitmap(RES.getRes("page1title_png"));
        gameStart.middleLayer.addChild(this.page1title);
        this.page1title.x = 1700;
        this.page1title.y = 210;
        this.page1title.alpha = 0;
        var tree_light = new egret.Bitmap(RES.getRes("tree_light_png"));
        gameStart.middleLayer.addChild(tree_light);
        tree_light.x = 2317;
        tree_light.y = 535;
        tree_light.alpha = 1;
        egret.Tween.get(tree_light, {
            loop: true
        })
            .to({ "alpha": 0 }, 500)
            .to({ "alpha": 1 }, 500);
        for (var i = 0; i < 10; i++) {
            var rdm = Math.random();
            var rdmh = Math.random();
            var tree_fire = new egret.Bitmap(RES.getRes("tree_fire_png"));
            gameStart.middleLayer.addChild(tree_fire);
            tree_fire.x = 2317 + rdm * 200 + i * 150;
            tree_fire.y = rdmh * 500;
            egret.Tween.get(tree_fire, {
                loop: true
            })
                .to({ x: 2317 + rdm * 200 + i * 150 + Math.random() * 100, y: rdmh * 500 + Math.random() * 100 }, 800 + Math.random() * 500)
                .to({ x: 2317 + rdm * 200 + i * 150 + Math.random() * 100, y: rdmh * 500 + Math.random() * 100 }, 800 + Math.random() * 500)
                .to({ x: 2317 + rdm * 200 + i * 150, y: rdmh * 500 }, 800 + Math.random() * 500);
        }
        var tree_halo = new egret.Bitmap(RES.getRes("tree_halo_png"));
        gameStart.middleLayer.addChild(tree_halo);
        tree_halo.x = 3410;
        tree_halo.y = 486;
        tree_halo.alpha = 1;
        egret.Tween.get(tree_halo, {
            loop: true
        })
            .to({ "alpha": 0 }, 500)
            .to({ "alpha": 1 }, 500);
    };
    return page1;
}());
page1.page1title = new egret.Bitmap;
__reflect(page1.prototype, "page1");
