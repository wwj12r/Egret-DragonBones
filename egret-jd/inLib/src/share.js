var inLib = inLib || {};
(function (context, inLib) {
    // <script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    ///promo/commonapi/getweixinjssdkconfig
    ///webview/webview-common/get-weixin-jssdk-config
    var WX_SDK = location.protocol + '//www.in66.com/promo/commonapi/getweixinjssdkconfig';
    if (location.href.indexOf('chat.in66.com') > 0) {
        WX_SDK = '/webview/webview-common/get-weixin-jssdk-config';
    }
    //分享的组件
    function ShareCompt(options) {
        this.isInApp = inLib.com.isInApp() || false;
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
                this.options.shareImgSrc = //ios 单图 和 小图、 安卓小图
                // this.options.shareImageUrl = //安卓单图
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
        } else if (self.isInApp && self.options) {
            self.inConfig();
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
                (self.options.success || function () { })();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        };
        wx.error(function (res) {

        });
        wx.ready(function () {
            wx.onMenuShareTimeline(shareObj);
            wx.onMenuShareAppMessage(shareObj);
        });
    }

    ShareCompt.prototype.inConfig = function () {
        var self = this;
        var html = [];
        $.each(self.options, function (i, v) {
            if (i == 'shareTrack') {
                var url = location.protocol + "//stats1.jiuyan.info/onepiece/router.html?action=" + v + "&_token=" + inLib.com.getToken();
                html.push('<input type="hidden" id="shareCallback" value="' + url + '">');
                $('#shareCallback').remove();
            } else {
                html.push('<input type="hidden" id="' + i + '" value="' + v + '">');
                $('#' + i).remove();
            }
        });
        $('body').prepend(html.join(''));
    }

    ShareCompt.prototype.changeConfig = function (options) {
        var self = this;
        this.createConfig(options);
        if (self.isWeChat && self.options && WX_SDK) {
            self.wxConfig();
        } else if (self.isInApp && self.options) {
            self.inConfig();
        }
    }

    inLib.share = function (options) {
        return new ShareCompt(options);
    }

    //当有share 参数自动实例化
    if (typeof window.SHARE == 'object') {
        inLib.share(SHARE);
    }
})(window, inLib)