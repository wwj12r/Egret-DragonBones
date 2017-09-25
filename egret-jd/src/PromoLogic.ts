class PromoLogic {
    private _promoStage: Main;
    public constructor(promoStage: Main) {
        this._promoStage = promoStage;
        this.init();
    }
    private init() {
        PromoData.initData(this._promoStage)
    }
    
    public createScene011(next: Function): Scene011 {
        let scene011: Scene011 = new Scene011(next) 
        this._promoStage.addChild(scene011);
        PromoData.scene011 = scene011
        return scene011
    }

    public createScene012(next: Function): Scene012 {
        let scene012: Scene012 = new Scene012(next)
        this._promoStage.addChild(scene012)
        PromoData.scene012 = scene012
        return scene012
    }

    public createScene021(next: Function = function(){}): Scene021 {
        let scene021: Scene021 = new Scene021()
        PromoData.scene021 = scene021
        this._promoStage.addChildAt(scene021, 1)
        return scene021
    }
}

