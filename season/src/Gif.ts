
class Gif extends egret.Sprite {
  factory: dragonBones.EgretFactory
  dbbin: boolean;
  gifName: string;

  public constructor(gifName: string,  dbbin: boolean = false) {
    super();
    this.gifName = gifName
    this.dbbin = dbbin
    this.init()
  }

  public play(armature: string, animationName: string) {
    let display: dragonBones.EgretArmatureDisplay = this.factory.buildArmatureDisplay(armature);
    display.animation.play(animationName, 0);
    this.addChild(display);
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
