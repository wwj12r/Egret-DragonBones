var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PromoLogic = (function () {
    function PromoLogic(promoStage) {
        this._promoStage = promoStage;
        this.init();
    }
    PromoLogic.prototype.init = function () {
        PromoData.initData(this._promoStage);
    };
    PromoLogic.prototype.createScene011 = function (next) {
        var scene011 = new Scene011(next);
        this._promoStage.addChild(scene011);
        PromoData.scene011 = scene011;
        return scene011;
    };
    PromoLogic.prototype.createScene012 = function (next) {
        var scene012 = new Scene012(next);
        this._promoStage.addChild(scene012);
        PromoData.scene012 = scene012;
        return scene012;
    };
    PromoLogic.prototype.createScene021 = function (next) {
        if (next === void 0) { next = function () { }; }
        var scene021 = new Scene021();
        PromoData.scene021 = scene021;
        this._promoStage.addChildAt(scene021, 0);
        return scene021;
    };
    return PromoLogic;
}());
__reflect(PromoLogic.prototype, "PromoLogic");
