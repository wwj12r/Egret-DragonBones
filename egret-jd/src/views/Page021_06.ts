class Page021_06 extends egret.Sprite {
    private gif: Gif;
    public constructor() {
        super();
        this.width = 2300  
        this.height = PromoData.stageH

        this.createView()
    }

    public createView(): void {
        // let shp: egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0x000000);
        // shp.graphics.drawRect(0, 0, this.width, this.height);
        // shp.graphics.endFill();
        // this.addChild(shp)

        this.gif = new Gif('02_06');
        this.addChild(this.gif)
        this.gif.width = this.width
        this.gif.height = this.height
        this.gif.x = this.width / 2 - 10;
        this.gif.y = this.height / 2;
        this.gif.play("armature2-6", "animation2-6")

        let goVR: egret.Shape = new egret.Shape();
        goVR.graphics.beginFill(0xffffff, 0);
        goVR.graphics.drawRect(1100, 260, 450, 130);
        goVR.graphics.endFill();
        this.addChild(goVR)
        goVR.$touchEnabled = true
        goVR.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            this.goVR()
        }, this);

        let goOut: egret.Shape = new egret.Shape();
        goOut.graphics.beginFill(0xffffff, 0);
        goOut.graphics.drawRect(1430, 570, 300, 150);
        goOut.graphics.endFill();
        this.addChild(goOut)
        goOut.$touchEnabled = true
        goOut.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            this.goOut()
        }, this);
    }

    public goVR() {
        PromoData.scene021.clearView()
       console.log('==> goVR <==') 
       inLib.track('h5_promo_egret-jd_go_vr')
    //    console.log(inLib.com.isInApp)
       if (Scene011.soundChannel) {
           Scene011.soundChannel.stop()
       }
       if (inLib.com.isInApp()) {
          inLib.awake('in://camera?channel=web&type=ar&scene=jingdong')
       } else {
          //location.href = location.protocol + '//m.in66.com/applinks?protocol=' + encodeURIComponent('in://camera?channel=web&type=ar&scene=jingdong')
          let applinks: string = location.protocol + '//m.in66.com/applinks'  
          let uri: string = 'https://h5.in66.com/inpromo/2017/egret/jd16/index.html?goVr=true'
          if (inLib.com.isIos) {
            uri = encodeURIComponent(uri)
          }
          uri =  `in://webview?url=${encodeURIComponent(uri)}`
          location.href = [applinks, '?protocol=', encodeURIComponent(uri)].join('')
       }
    }

   public goOut() {
       PromoData.scene021.clearView()
       inLib.track('h5_promo_egret-jd_go_out')
       if (Scene011.soundChannel) {
           Scene011.soundChannel.stop()
       } 
       location.href = 'https://pro.m.jd.com/mall/active/a2zdYEpPtYorGkfTrQdyAUoajHG/index.html'
       console.log('==> goOUt <==') 
    }
}
