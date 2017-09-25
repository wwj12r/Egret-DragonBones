class Page021_01 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 2500 
        this.height = PromoData.stageH
        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_01');
        // this.gif.width = this.width / 2
        // this.gif.height = this.height / 2
        this.gif.width = this.width
        this.gif.height = this.height
        this.gif.x = this.width / 2 + 10;
        this.gif.y = this.height / 2;
        // this.gif.scaleX = 2
        // this.gif.scaleY = 2
        this.addChild(this.gif)
        this.gif.play("armature2-1", "animation2-1")

        let cloud2_1 = new egret.Bitmap(RES.getRes("cloud2-1_png"));
        cloud2_1.x = -50;
        cloud2_1.y = 0;
        this.addChild(cloud2_1);
    }
}
