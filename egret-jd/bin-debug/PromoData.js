var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PromoData = (function () {
    function PromoData() {
    }
    PromoData.initData = function (stage) {
        PromoData.stageW = egret.MainContext.instance.stage.stageWidth;
        PromoData.stageH = egret.MainContext.instance.stage.stageHeight;
        PromoData.stage = stage;
    };
    return PromoData;
}());
PromoData.stageW = 0;
PromoData.stageH = 0;
PromoData.skip = false;
__reflect(PromoData.prototype, "PromoData");
