class Page021_04 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 2530  
        this.height = PromoData.stageH
        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_04');
        this.gif.width = this.width / 2
        this.gif.height = this.height / 2
        this.gif.x = this.width / 2;
        this.gif.y = this.height / 2;
        this.gif.scaleX = 2
        this.gif.scaleY = 2
        this.addChild(this.gif)
        this.gif.play("armature2-4", "animation2-4")

        let cloud2_4 = new egret.Bitmap(RES.getRes("cloud2-4_png"));
        cloud2_4.x = this.width / 2 + 870;
        cloud2_4.y = 500;
        this.addChild(cloud2_4);
        // egret.Tween.get(cloud2_4,{loop:true})
        //     .to({y: 520}, 1000)
        //     .to({y: 500}, 1000)
    }
}
