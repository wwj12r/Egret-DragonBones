class LoadingUI extends egret.Sprite {
    public constructor() {
        super();
        this.width = PromoData.stageW
        this.height = PromoData.stageH
    }

    private textField: egret.TextField;
    private static prefakeload : number = 0;
    public static prerealloaddone : boolean = false;
    public static prefakeloaddone : boolean = false;

    private timerFunc(event:egret.TimerEvent) {
        LoadingUI.prefakeload ++;
        this.textField.text = LoadingUI.prefakeload + ' %'
    }

    private timerComFunc(event: egret.TimerEvent) {
        LoadingUI.prefakeloaddone = true;
        if (LoadingUI.prerealloaddone){
            this.textField.text = '100%'
            setTimeout(()=>{
                PromoData.stage.createGameScene();
            }, 500);
        }

    }
    private createTextField(): void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.backgroundColor = 0xFFFFFF;
        this.textField.y = 600;
        this.textField.x = this.width / 2 - 50;
        this.textField.textAlign = "center";
        var timer: egret.Timer = new egret.Timer(50, 99);

        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);

        timer.start();
    }

    public createView(): void {
        inLib.track('h5_promo_egret-jd_index_enter')
        if (inLib.com.getQueryString('goVr')) {
            console.log(inLib.com.getQueryString('goVr'))
            inLib.awake('in://camera?channel=web&type=ar&scene=jingdong')
        }
        let shareOptions = {
            shareTitle: '没想到你这么会装。。。', // 分享标题
            shareDesc: '快跳上飞毯，去小人国装你所想', // 分享描述
            shareLink: 'https://h5.in66.com/inpromo/2017/egret/jd16/index.html', // 分享链接
            shareImg: 'http://inimg02.jiuyan.info/in/2017/09/15/344FEA74-37BA-40E6-94EB-E22CEC691C57.jpg',
            shareTrack: 'h5_promo_jd_share'
        };
        inLib.share(shareOptions)
        let loadingBg: egret.Bitmap = new egret.Bitmap(RES.getRes("loadingBg_jpg"));
        loadingBg.width = this.width
        loadingBg.height = this.height
        this.addChild(loadingBg);

        let loadingGif: Gif = new Gif('00-loading');
        this.addChild(loadingGif);
        loadingGif.x = this.width / 2;
        loadingGif.y = 350;
        loadingGif.play("loading", "loading");

        this.createTextField();
    }

    public fadeOut(onComplete = function() {}) {
        egret.Tween.get(this).to({ "alpha": 0 }, 500).call(onComplete, this)
    }

    public setProgress(current: number, total: number): void {
        let rate = Math.round(current / total) * 100
        // this.textField.text = `${rate}%`;
    }
}
