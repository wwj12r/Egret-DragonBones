class Scene021 extends egret.Sprite {
    loadingGif: Gif;
    private speed: number = 10;
    private len;
    private addLen: number = 0;
    public isMoving: boolean = false;
    private isLastMoving: boolean = false;
    private kite: Gif;

    public contentLayer: egret.DisplayObjectContainer  

    private _page021_01: Page021_01;
    private _page021_02: Page021_02;
    private _page021_03: Page021_03;
    private _page021_04: Page021_04;
    private _page021_05: Page021_05;
    private _page021_06: Page021_06;

    private topLayer: egret.Sprite;

    private _bg_021_02: egret.Bitmap;
    private _bg_021_03: egret.Shape;
    private _bg_021_06: egret.Bitmap;

    private touchArea: egret.Bitmap;
    private touchTxt: egret.Bitmap;
    private touchWrapper: egret.Bitmap;
    private touched = false
    private just021_06 = false

    private touchBegin: boolean = false 
    public constructor() {
        super();
        this.width = PromoData.stageW
        this.height = PromoData.stageH
        this.touchEnabled = true
        if (PromoData.skip) {
            this.just021_06 = true 
        }
        this.createView()
    }
    
   
    public create021_01(frontX: number, frontY: number = 750): void {
         // 01
        this._page021_01 = new Page021_01()
        this._page021_01.scaleY = 1.01
        this._page021_01.x = frontX 
        this._page021_01.y = -5 
        this.contentLayer.addChild(this._page021_01) 
    }
    
    public create021_02(frontX: number, frontY: number = 750): void {
        // 02
        this._page021_02 = new Page021_02()
        this._page021_02.x = frontX 
        this.contentLayer.addChildAt(this._page021_02, 0)

        this._bg_021_02 = new egret.Bitmap(RES.getRes("02_02_bg_jpg"));
        this._bg_021_02.width = this._page021_02.width
        this._bg_021_02.x = this._page021_02.x
        this.contentLayer.addChildAt(this._bg_021_02, 0);
    }
    
    public create021_03(frontX: number, frontY: number = 750): void {
         // 03
        this._page021_03 = new Page021_03()
        this.contentLayer.addChildAt(this._page021_03, 3)
        this._page021_03.x = frontX 

        this._bg_021_03 =  new egret.Shape();
        this._bg_021_03.graphics.beginFill(0xfed1ea);
        this._bg_021_03.graphics.drawRect(0, 0, this._page021_03.width, PromoData.stageH);
        this._bg_021_03.graphics.endFill();
        this._bg_021_03.x = this._page021_03.x;
        this.contentLayer.addChildAt(this._bg_021_03, 0);
    }
    
    public create021_04(frontX: number, frontY: number = 750): void {
         // 04
        this._page021_04 = new Page021_04()
        // this.contentLayer.addChild(this._page021_04)
        this._page021_04.x = frontX 
        this.contentLayer.addChildAt(this._page021_04, 5);
    }
    
    public create021_05(frontX: number, frontY: number = 750): void {
        // 05
        this._page021_05 = new Page021_05()
        this._page021_05.x = frontX 
        this.contentLayer.addChildAt(this._page021_05, 4)
    }

    public create021_06(frontX: number, frontY: number = 750): void {
        // 06
        this._page021_06 = new Page021_06()
        this.contentLayer.addChildAt(this._page021_06, 0)
        this._page021_06.x = frontX 

        this._bg_021_06 = new egret.Bitmap(RES.getRes("02_06_bg_jpg"));
        this._bg_021_06.width = this._page021_06.width
        this._bg_021_06.x = this._page021_06.x 
        this.contentLayer.addChildAt(this._bg_021_06, 0); 
    }

   public clearView(all: boolean = true, page: string = '') {
      if ((all || page == '_page021_01') && this._page021_01 && this._page021_01.$parent) {
        console.log('remove _page021_01')
        this.contentLayer.removeChild(this._page021_01) 
      }
      
      if ((all || page == '_page021_02') && this._page021_02 && this._page021_02.$parent) {
        console.log('remove _page021_02')
        this.contentLayer.removeChild(this._page021_02) 
      }
      
      if ((all || page == '_page021_03') && this._page021_03 && this._page021_03.$parent) {
        console.log('remove _page021_03')
        this.contentLayer.removeChild(this._page021_03) 
      }
      
      if ((all || page == '_page021_04') && this._page021_04 && this._page021_04.$parent) {
        console.log('remove _page021_04')
        this.contentLayer.removeChild(this._page021_04) 
      }
      
      if ((all || page == '_page021_05') && this._page021_05 && this._page021_05.$parent) {
        console.log('remove _page021_05')
        this.contentLayer.removeChild(this._page021_05) 
      }
   } 

    public createView(): void {
        
        this.contentLayer = new egret.DisplayObjectContainer  
        this.contentLayer.x = 0
        this.contentLayer.y = 0
        this.addChild(this.contentLayer)
        if (this.just021_06) {
            this.create021_06(-750);    
            return
        }
        this.create021_01(0)
    }

    public createOtherViews(): void {
        this.create021_02(this._page021_01.x + this._page021_01.width - 800)
        this.create021_03(this._page021_02.x + this._page021_02.width - 200)
        this.create021_04(this._page021_03.x + this._page021_03.width - 800)
        this.create021_05(this._page021_04.x + this._page021_04.width - 320)
        this.create021_06(this._page021_05.x + this._page021_05.width - 300)
        this.len = 13910//this._page021_06.x + this._page021_06.width
        console.log(this.len) // 14710
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

        this.kite = new Gif('kite',true);
        this.kite.x = this.width / 2 - 280;
        this.kite.y = this.height / 2;
        this.kite.scaleX = 1.5
        this.kite.scaleY = 1.5
        this.addChild(this.kite)
        this.kite.play("armaturekite", "animationkite")
        this.topLayer = new egret.Sprite;
        this.topLayer.x = this.topLayer.y = 0;
        this.addChild(this.topLayer)

        let ballon = new egret.Bitmap(RES.getRes("ballon_png"));
        ballon.x = 2000;
        ballon.y = 200;
        this.topLayer.addChild(ballon);
        egret.Tween.get(ballon,{loop:true})
            .to({y: 250}, 1000)
            .to({y: 200}, 1000)

        let cloud2_24 = new egret.Bitmap(RES.getRes("cloud2-24_png"));
        cloud2_24.x = 4600;
        cloud2_24.y = -200;
        this.topLayer.addChild(cloud2_24);
        egret.Tween.get(cloud2_24,{loop:true})
            .to({y: -240}, 1000)
            .to({y: -200}, 1000)

        let cloud2_23 = new egret.Bitmap(RES.getRes("cloud2-23_png"));
        cloud2_23.x = 4600;
        cloud2_23.y = 108;
        this.topLayer.addChild(cloud2_23);
        egret.Tween.get(cloud2_23,{loop:true})
            .to({y: 140}, 1000)
            .to({y: 108}, 1000)

        let cloud2_22 = new egret.Bitmap(RES.getRes("cloud2-22_png"));
        cloud2_22.x = 4600;
        cloud2_22.y = 416;
        this.topLayer.addChild(cloud2_22);
        egret.Tween.get(cloud2_22,{loop:true})
            .to({y: 350}, 1000)
            .to({y: 416}, 1000)

        let fur = new egret.Bitmap(RES.getRes("fur_png"));
        fur.x = 6809;
        fur.y = -172;
        this.topLayer.addChild(fur);
        egret.Tween.get(fur,{loop:true})
            .to({y: -100}, 1000)
            .to({y: -172}, 1000)

        this.createTouchArea()
        inLib.track('h5_promo_egret-jd_main_page_enter')
    }

    public createTouchArea(): void {
        this.touchArea = new egret.Bitmap(RES.getRes("btn_1_png"));
        this.touchArea.width = 93
        this.touchArea.height = 93
        this.touchArea.x = this.width - 200
        this.touchArea.y = 600
        this.touchArea.touchEnabled = true

        this.touchTxt = new egret.Bitmap(RES.getRes("btn_txt_png"));
        this.touchTxt.width = 184
        this.touchTxt.height = 75
        this.touchTxt.x = this.width - 240;
        this.touchTxt.y = 520
        this.addChild(this.touchTxt);
        let tw = egret.Tween.get(this.touchTxt, { loop: true });
        tw.to({ "alpha": 0 }, 1000);

        this.touchWrapper = new egret.Bitmap(RES.getRes("btn_2_png"));
        this.touchWrapper.width = 133
        this.touchWrapper.height = 133
        this.touchWrapper.x = this.width - 220;
        this.touchWrapper.y = 580
        this.addChild(this.touchWrapper);
        this.addChild(this.touchArea);
        this.addTouchAreaListener()
    }

    public addTouchAreaListener() {
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
            console.log('TOUCH_BEGIN')
            if (!this.touchBegin) {
                inLib.track('h5_promo_egret-jd_touch_begin')
                this.touchBegin = true
            }
            this.isMoving = true
            this.touchWrapper.alpha = 0
        }, this)
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{
			if(this.touchArea.hitTestPoint(e.stageX,e.stageY)){
				this.isMoving = true;
				this.touchWrapper.alpha = 0;
			} else {
				this.isMoving = false;
				this.touchWrapper.alpha = 1;
			}
		},this)
        this.touchArea.addEventListener(egret.TouchEvent.TOUCH_END, (e) => {
            // console.log('TOUCH_END')
            this.isMoving = false;
            this.touchWrapper.alpha = 1
        }, this)
    }

    public clearPreView() {
        // console.log(this.addLen)
        let pageRemove: number[] = [2500, 5500, 7800, 9650, 12250]
        if (this.addLen > pageRemove[0] && this.addLen < pageRemove[0] + 30 ) {
           this.clearView(false, '_page021_01') 
        } 
        if (this.addLen > pageRemove[1] && this.addLen < pageRemove[1] + 30 ) {
           this.clearView(false, '_page021_02') 
        } 
        if (this.addLen > pageRemove[2] && this.addLen < pageRemove[2] + 30) {
            this.clearView(false, '_page021_03')
        }
        if (this.addLen > pageRemove[3] && this.addLen < pageRemove[3] + 30) {
            this.clearView(false, '_page021_04')
        }
        if (this.addLen > pageRemove[4] && this.addLen < pageRemove[4] + 30) {
            this.clearView(false, '_page021_05')
        } 
    }
    // public autoAddPage() {
    //     if (this._current_page == '_page021_01' &&  (this._page021_01.width - PromoData.stageW - this.addLen <= 400) ) {
    //         // 02
    //         this._page021_02 = new Page021_02()
    //         this._page021_02.x = this._page021_01.x + this._page021_01.width - 600
    //         this.addChildAt(this._page021_02, 0)

    //         this._bg_021_02 = new egret.Bitmap(RES.getRes("02_02_bg_jpg"));
    //         this._bg_021_02.width = this._page021_02.width
    //         this._bg_021_02.x = this._page021_02.x
    //         this.addChildAt(this._bg_021_02, 0);
    //         this._current_page = '_page021_02'
    //     }

    // }

    public onEnterFrame() {
        if (!this.touched && this.isMoving) {
            this.removeChild(this.touchTxt)
            this.touched = true
        }

        if (this.isMoving && !this.isLastMoving) {
            if (this.addLen + 300 + this.speed >= this.len - PromoData.stageW) {
                this.speed = this.len - PromoData.stageW - 300 - this.addLen
                this.isLastMoving = true
            }
            // console.log(this.speed)
            if (this.speed < 10) {
                this.speed = 0
            }
            if (this.speed == 0) {
                PromoData.scene021.removeChild(this.touchArea)
                PromoData.scene021.removeChild(this.touchWrapper)
                PromoData.scene021.clearView()
            }
            // this.autoAddPage()
            this.addLen += this.speed
            // console.log(this.addLen)
            if (this.topLayer) {
                this.topLayer.x -= this.speed
            }
            this.contentLayer.x -= this.speed
            this.clearPreView()
            // kite运动
            if (this.addLen < 100) {
                this.kite.y -= 0.5
            } else if (this.addLen < 2200) {
                this.kite.y += 1
            } else if (this.addLen < 3590) {
                this.kite.y -= 2.2
            } else if (this.addLen < 4570) {
                this.kite.y += 1.5
            } else if (this.addLen < 5610) {
                this.kite.y -= 3
            } else if (this.addLen < 6950) {
                this.kite.y += 1
            } else if (this.addLen < 7160) {
                // this.kite.y -= 1.5
            } else if (this.addLen < 8330) {
                this.kite.y += 2.9
            } else if (this.addLen < 9550) {
                this.kite.y -= 2
            } else if (this.addLen < 10910) {
                this.kite.y += 1.5
            } else if (this.addLen < 12380) {
                // this.kite.y -= 1.5
            }
        }
    }
}
