var inLib = inLib || {};
(function (context, inLib) {
    inLib.com = {
        isWeChat: function () {
            return /micromessenger/gi.test(this.ua())
        },
        isAndroid: function () {
            return /android|adr/gi.test(this.ua())
        },
        isIos: function () {
            return /iphone|ipod|ipad/gi.test(this.ua())
        },
        isInApp: function () {
            return /infashion/gi.test(this.ua())
        },
        isWYMusic: function () {
            return /neteasemusic/gi.test(this.ua())
        },
        ua: function () {
            return context.navigator.userAgent.toLowerCase()
        },
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = context.location.search.substr(1).match(reg);
            return r && decodeURIComponent(r[2]);
        },
        getCookie: function (name) {
            var reg = new RegExp("(^|\\s)" + name + "=([^;]*)(;|$)");
            var r = document.cookie.match(reg);
            return r && unescape(r[2]);
        },
        getToken: function() {
            return this.getQueryString('_token') || this.getCookie('tg_auth');
        }
    }
})(window, inLib)