class Page021_03 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 3000 
        this.height = PromoData.stageH
        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0xeeeeee);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_03');
        this.gif.width = this.width / 2
        this.gif.height = this.height / 2
        this.gif.x = this.width / 2 - 280;
        this.gif.y = this.height / 2;
        this.gif.scaleX = 2
        this.gif.scaleY = 2
        this.addChild(this.gif)
        this.gif.play("armature2-3", "animation2-3")
    }
}
