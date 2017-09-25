$(function () {
	// <script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	///promo/commonapi/getweixinjssdkconfig
	///webview/webview-common/get-weixin-jssdk-config
    var WX_SDK = (/^qa/.test(location.host) ? '//qa.in66.com':'//www.in66.com')  +'/promo/commonapi/getweixinjssdkconfig';
	//鍒嗕韩鐨勭粍浠�
	function ShareCompt(options) {
		this.isWeChat = /MicroMessenger/.test(navigator.userAgent) || false;
		this.createConfig(options);
		this.init();
		return this;
	}

	ShareCompt.prototype.createConfig = function (options) {
		var self = this;
		this.options = options;
		if (this.options.shareImg) {
			this.options.shareImgUrl =
				this.options.shareImgSrc = //ios 鍗曞浘 鍜� 灏忓浘銆� 瀹夊崜灏忓浘
				// this.options.shareImageUrl = //瀹夊崜鍗曞浘
				this.options.shareImg;
		}
	}

	ShareCompt.prototype.init = function () {
		var self = this;
		if (self.isWeChat && self.options && WX_SDK) {
			$.ajax({
				url: WX_SDK,
				data: {
					redirectUrl: location.href.split('#')[0]
				},
				success: function (res) {
					res.succ && config(res.data);
				}
			});

			function config(data) {
				wx.config({
					debug: false,
					appId: data.appId,
					timestamp: data.timestamp,
					nonceStr: data.nonceStr,
					signature: data.signature,
					jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
				});
				self.wxConfig();
			}
		}
	}

	ShareCompt.prototype.wxConfig = function () {
		var self = this;
		var shareObj = {
			title: self.options['shareTitle'],
			link: self.options['shareLink'],
			imgUrl: self.options['shareImgUrl'],
			desc: self.options['shareDesc'],
			success: function () {
				if (self.options['shareTrack']) {
					Tracker.addAll(self.options['shareTrack']);
				}
				(self.options.success || function () {})();
			},
			cancel: function () {
				// 鐢ㄦ埛鍙栨秷鍒嗕韩鍚庢墽琛岀殑鍥炶皟鍑芥暟
			}
		};
		wx.error(function(res){
	
		});
		wx.ready(function () {
			wx.onMenuShareTimeline(shareObj);
			wx.onMenuShareAppMessage(shareObj);
		});
	}

	ShareCompt.prototype.changeConfig = function (options) {
		var self = this;
		this.createConfig(options);
		if (self.isWeChat && self.options && WX_SDK) {
			self.wxConfig();
		}
	}

	$.extend($, {
		share: function (options) {
			return new ShareCompt(options);
		}
	});


	//褰撴湁share 鍙傛暟鑷姩瀹炰緥鍖�
	if (typeof window.SHARE == 'object') {
		$.share(SHARE);
	}
});