var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Gif = (function (_super) {
    __extends(Gif, _super);
    function Gif(gifName, dbbin) {
        if (dbbin === void 0) { dbbin = false; }
        var _this = _super.call(this) || this;
        _this.gifName = gifName;
        _this.dbbin = dbbin;
        _this.init();
        return _this;
    }
    Gif.prototype.play = function (armature, animationName) {
        var display = this.factory.buildArmatureDisplay(armature);
        display.animation.play(animationName, 0);
        this.addChild(display);
    };
    Object.defineProperty(Gif.prototype, "skeData", {
        get: function () {
            if (this.dbbin) {
                return RES.getRes(this.gifName + '_ske_dbbin');
            }
            else {
                return RES.getRes(this.gifName + '_ske_json');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gif.prototype, "texJson", {
        get: function () {
            return RES.getRes(this.gifName + '_tex_json');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gif.prototype, "texPng", {
        get: function () {
            return RES.getRes(this.gifName + '_tex_png');
        },
        enumerable: true,
        configurable: true
    });
    Gif.prototype.init = function () {
        this.factory = dragonBones.EgretFactory.factory;
        this.factory.parseDragonBonesData(this.skeData);
        this.factory.parseTextureAtlasData(this.texJson, this.texPng);
    };
    return Gif;
}(egret.Sprite));
__reflect(Gif.prototype, "Gif");
