class page3{
	public constructor() {
        page3.init();
	}
    public static page3title;
    public static init(){
        let page3 = new Gif('page3', true);
        page3.x = 7385;
        page3.y = 400;
        page3.scaleX = 2;
        page3.scaleY = 2;
        gameStart.middleLayer.addChild(page3);
        page3.play("page3Armature","page3Animation");

        this.page3title = new egret.Bitmap(RES.getRes("page3title_png"));
        gameStart.middleLayer.addChild(this.page3title);
        this.page3title.x = 7400;
        this.page3title.y = 30;
        this.page3title.alpha = 0;
    }
}