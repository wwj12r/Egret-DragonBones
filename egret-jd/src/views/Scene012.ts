class Scene012 extends egret.Sprite {
    public loadingGif: Gif;
    public next: Function
    public constructor(next: Function) {
        super();
        this.width = PromoData.stageW
        this.height = PromoData.stageH
        this.next = next
        this.createView()
    }
    public createView(): void {
        this.loadingGif = new Gif('012_1');
        this.addChild(this.loadingGif)
        this.loadingGif.x = this.width / 2;
        this.loadingGif.y = 350;
        let cb = function() {
            PromoData.stage.removeChild(PromoData.scene012)
            this.next()
        }
        this.loadingGif.play("yun", "ani", 1, cb.bind(this))
        this.loadingGif.display.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frameEvent, this);
    }

    public frameEvent(evt: dragonBones.FrameEvent) {
        if (evt.frameLabel === 'yun') {
            PromoData.stage.promo.createScene021()
            console.log("armature 播放到了一个关键帧！ 帧标签为：", evt.frameLabel);
        }
        if (evt.frameLabel === 'yun2') {
            PromoData.scene021.createOtherViews()
        }
    }
}
