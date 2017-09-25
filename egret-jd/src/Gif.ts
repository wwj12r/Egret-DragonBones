
class Gif extends egret.Sprite {
  factory: dragonBones.EgretFactory
  dbbin: boolean;
  gifName: string;
  display: dragonBones.EgretArmatureDisplay;

  public constructor(gifName: string,  dbbin: boolean = false) {
    super();
    this.gifName = gifName
    this.dbbin = dbbin
    this.init()
  }

  public play(armature: string, animationName: string, playTimes: number = 0, cb = null) {
    this.display = this.factory.buildArmatureDisplay(armature);
    this.display.animation.play(animationName, playTimes);
    this.addChild(this.display);
    if (cb) {
      this.display.addEventListener(dragonBones.AnimationEvent.COMPLETE, cb, this);
    }
  }

  public gotoAndPlay(armature: string, animationName: string, playTimes: number = 0) {
    this.display.animation.gotoAndPlay(animationName);
    // this.addChild(display);
  }
  
  private get skeData() {
    if (this.dbbin) {
      return RES.getRes(this.gifName + '_ske_dbbin');
    } else {
      return RES.getRes(this.gifName + '_ske_json');
    }
  }

  private get texJson() {
    return RES.getRes(this.gifName + '_tex_json');
  }

  private get texPng() {
    return RES.getRes(this.gifName + '_tex_png');
  }

  private init() {
    this.factory = dragonBones.EgretFactory.factory;
    this.factory.parseDragonBonesData(this.skeData);
    this.factory.parseTextureAtlasData(this.texJson, this.texPng);
  }
}
