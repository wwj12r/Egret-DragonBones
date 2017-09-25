var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var page2 = (function () {
    function page2() {
        page2.init();
    }
    page2.init = function () {
        var page2 = new Gif('page2', true);
        page2.x = 7250;
        page2.y = 400;
        page2.scaleX = 2;
        page2.scaleY = 2;
        gameStart.bottomLayer.addChild(page2);
        page2.play("page2Armature", "page2Animation");
        var xiaoguang = new egret.Bitmap(RES.getRes("xiaoguang_png"));
        gameStart.middleLayer.addChild(xiaoguang);
        xiaoguang.x = 3920;
        xiaoguang.y = 0;
        xiaoguang.alpha = 0;
        egret.Tween.get(xiaoguang, { loop: true })
            .to({ alpha: 1 }, 1250)
            .to({ alpha: 0 }, 1250);
        var fish1 = new egret.Bitmap(RES.getRes("fish1_png"));
        gameStart.middleLayer.addChild(fish1);
        fish1.x = 4680;
        fish1.y = 146;
        fish1.alpha = 0;
        egret.Tween.get(fish1, { loop: true })
            .to({ x: 4760, y: 136, alpha: 1 }, 1000)
            .to({ x: 4880, y: 156, alpha: 1 }, 2000)
            .to({ x: 4960, y: 146, alpha: 0 }, 1000);
        var fish2 = new egret.Bitmap(RES.getRes("fish2_png"));
        gameStart.middleLayer.addChild(fish2);
        fish2.x = 4580;
        fish2.y = 226;
        fish2.alpha = 0;
        egret.Tween.get(fish2, { loop: true })
            .to({ x: 4620, y: 220, alpha: 1 }, 1000)
            .to({ x: 4700, y: 230, alpha: 1 }, 2000)
            .to({ x: 4740, y: 220, alpha: 0 }, 1000);
        var fish3 = new egret.Bitmap(RES.getRes("fish3_png"));
        gameStart.middleLayer.addChild(fish3);
        fish3.x = 4680;
        fish3.y = 296;
        fish3.alpha = 0;
        egret.Tween.get(fish3, { loop: true })
            .to({ x: 4760, y: 290, alpha: 1 }, 1000)
            .to({ x: 4840, y: 300, alpha: 1 }, 1000)
            .to({ x: 4920, y: 290, alpha: 1 }, 1000)
            .to({ x: 5000, y: 300, alpha: 0 }, 1000);
        var fish4 = new egret.Bitmap(RES.getRes("fish4_png"));
        gameStart.middleLayer.addChild(fish4);
        fish4.x = 4689;
        fish4.y = 250;
        fish4.alpha = 0;
        egret.Tween.get(fish4, { loop: true })
            .to({ x: 4800, y: 240, alpha: 1 }, 1000)
            .to({ x: 5000, y: 260, alpha: 1 }, 2000)
            .to({ x: 5100, y: 250, alpha: 0 }, 1000);
        var snake = new egret.Bitmap(RES.getRes("snake_png"));
        gameStart.middleLayer.addChild(snake);
        snake.x = 5000;
        snake.y = 706;
        snake.anchorOffsetX = 90;
        snake.anchorOffsetY = 706;
        snake.scaleX = 1.1;
        snake.scaleY = 1.1;
        egret.Tween.get(snake, {
            loop: true
        })
            .to({ rotation: -4 }, 1500)
            .to({ rotation: 0 }, 1500);
        this.page2title = new egret.Bitmap(RES.getRes("page2title_png"));
        gameStart.middleLayer.addChild(this.page2title);
        this.page2title.x = 4500;
        this.page2title.y = 210;
        this.page2title.alpha = 0;
        var kite2 = new egret.Bitmap(RES.getRes("kite2_png"));
        gameStart.topLayer.addChild(kite2);
        kite2.x = 5206;
        kite2.y = 0;
        egret.Tween.get(kite2, {
            loop: true
        })
            .to({ y: -30 }, 1000)
            .to({ y: 0 }, 1000);
        var kite = new egret.Bitmap(RES.getRes("kite_png"));
        gameStart.topLayer.addChild(kite);
        kite.x = 5099;
        kite.y = 253;
        egret.Tween.get(kite, {
            loop: true
        })
            .to({ y: 283 }, 1000)
            .to({ y: 253 }, 1000);
    };
    return page2;
}());
__reflect(page2.prototype, "page2");
