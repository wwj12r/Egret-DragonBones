class Page021_02 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 3100 
        this.height = PromoData.stageH
        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_02');
        this.gif.width = this.width
        this.gif.height = this.height
        this.gif.x = this.width / 2 - 60;
        this.gif.y = this.height / 2;
        // this.gif.scaleX = 2
        // this.gif.scaleY = 2
        this.addChild(this.gif)
        this.gif.play("armature2-2", "animation2-2")
    }
}
