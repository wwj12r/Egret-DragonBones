class Scene011 extends egret.Sprite {
    public loadingGif: Gif;
    public next: Function
    cb: Function;
    public static shp:egret.Shape;

    public  sound: egret.Sound;
    public static  soundChannel: egret.SoundChannel
    public  musicOn:boolean = false;
    public  musicLoaded:boolean = false;

    private autoplay () {
        this.sound = new egret.Sound();
        var url: string = "resource/assets/sound.mp3";
        //添加加载完成侦听
        this.sound.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
            this.musicLoaded = true 
            //获取加载到的 Sound 对象
            // var sound:egret.Sound = <egret.Sound>event.target;
            //播放音乐

        }, this);
        //开始加载
        this.sound.load(url);
    }
    public constructor(next: Function) {
        super();
        this.width = PromoData.stageW
        this.height = PromoData.stageH
        this.next = next
        this.createView()
    }

    public createView(): void {
        this.autoplay()
        let bg: egret.Bitmap = new egret.Bitmap(RES.getRes("01-bg_jpg"));
        bg.width = this.width
        bg.height = this.height
        this.addChild(bg);

        this.loadingGif = new Gif('01');
        this.addChild(this.loadingGif);
        this.loadingGif.x = this.width / 2;
        this.loadingGif.y = 350;

        let skip: egret.Bitmap = new egret.Bitmap(RES.getRes("skip_png"));
        skip.width = 163 * 0.8
        skip.height = 50 * 0.8 
        skip.x = this.width - 200 
        skip.y = 20 
        skip.touchEnabled = true
        skip.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            inLib.track('h5_promo_egret-jd_touch_skip')
            PromoData.skip = true
            PromoData.stage.removeChild(PromoData.scene011)
            PromoData.stage.promo.createScene021()
        }, this)
        this.addChild(skip);
        inLib.track('h5_promo_egret-jd_title_page_enter')
    }

    public createTapArea(next): void {
        Scene011.shp = new egret.Shape();
        Scene011.shp.graphics.beginFill(0xff0000, 0);
        Scene011.shp.graphics.drawRect(0, 0, 400, 150);
        Scene011.shp.graphics.endFill();
        Scene011.shp.x = this.width / 2 - 200
        Scene011.shp.y = 500
        this.addChild(Scene011.shp)
        Scene011.shp.touchEnabled = true;
        Scene011.shp.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            inLib.track('h5_promo_egret-jd_title_enter')
            Scene011.soundChannel = this.sound.play(0,0);
            this.next()
        }, this);
    }

    public play() {
        let cb = function () { this.createTapArea() }
        this.loadingGif.play("armatureName", "ani_1", 1, cb.bind(this));
    }
}
