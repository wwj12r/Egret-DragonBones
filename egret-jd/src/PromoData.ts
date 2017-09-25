class PromoData {
	public static stageW: number = 0;
	public static stageH: number = 0;
	public static stage: Main;
	public static scene011: Scene011;
	public static scene012: Scene012;
	public static scene021: Scene021;
	public static skip: boolean = false;


	public static initData(stage: Main) {
		PromoData.stageW = egret.MainContext.instance.stage.stageWidth;
		PromoData.stageH = egret.MainContext.instance.stage.stageHeight;
		PromoData.stage = stage;
	}
}