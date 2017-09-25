class page6{
	public constructor() {
        page6.init();
	}
    public static page6title;
    public static goinbtn;
    public static init(){
		Main.loadinggif.alpha = 1;
        Main.loadinggif.x = 14100;
        Main.loadinggif.y = 400;
        gameStart.bottomLayer.addChild(Main.loadinggif);

        this.goinbtn = new egret.Bitmap(RES.getRes("goin_png"));
        this.goinbtn.x = 13900;
        this.goinbtn.y = 530;
		this.goinbtn.alpha = 0;
        gameStart.bgLayer.addChild(this.goinbtn);

        this.page6title = new egret.Bitmap(RES.getRes("page6title_png"));
        gameStart.middleLayer.addChild(this.page6title);
        this.page6title.x = 13750;
        this.page6title.y = 70;
        this.page6title.alpha = 0;
    }
}