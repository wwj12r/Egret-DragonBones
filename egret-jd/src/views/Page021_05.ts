class Page021_05 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 2900  
        this.height = PromoData.stageH

        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0xffffff);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_05');
        this.addChild(this.gif)
        this.gif.width = this.width / 2
        this.gif.height = this.height / 2
        this.gif.x = this.width / 2 + 50;
        this.gif.y = this.height / 2;
        this.gif.scaleX = 2
        this.gif.scaleY = 2
        this.gif.play("armature2-5", "animation2-5")
    }
}
