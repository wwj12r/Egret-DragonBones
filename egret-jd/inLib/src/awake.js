var inLib = inLib || {};
(function (context, inLib) {
  function bridgeCall (src, callback) {
    context.iframe = document.createElement('iframe')
    context.iframe.style.display = 'none'
    context.iframe.src = src
    var cleanFn = function (state) {
      // console.log(state)
      try {
        context.iframe.parentNode.removeChild(context.iframe)
      } catch (error) {}
      if (callback) callback()
    }
    context.iframe.onload = cleanFn
    document.documentElement.appendChild(context.iframe)
  }

  function JSBridge () {
    this.callbackDict = {}
    this.notificationIdCount = 0
    this.notificationDict = {}

    var that = this
    context.document.addEventListener('DOMContentLoaded', function () {
      bridgeCall('jsbridge://NotificationReady', that.trigger('jsBridgeReady', {}))
    }, false)
  }

  JSBridge.prototype = {
    constructor: JSBridge,
    // js向oc发送消息
    postNotification: function (name, userInfo) {
      this.notificationIdCount++

      this.notificationDict[this.notificationIdCount] = {
        name: name,
        userInfo: userInfo
      }

      bridgeCall('jsbridge://PostNotificationWithId-' + this.notificationIdCount)
    },
    // oc获取消息数据
    popNotificationObject: function (notificationId) {
      var result = JSON.stringify(this.notificationDict[notificationId])
      delete this.notificationDict[notificationId]
      return result
    },
    // oc向js发送消息
    trigger: function (name, userInfo) {
      if (this.callbackDict[name]) {
        var callList = this.callbackDict[name]

        for (var i = 0, len = callList.length; i < len; i++) {
          callList[i](userInfo)
        }
      }
    },
    // 绑定消息
    bind: function (name, callback) {
      if (!this.callbackDict[name]) {
        // 创建对应数组
        this.callbackDict[name] = []
      }
      this.callbackDict[name].push(callback)
    },
    // 解除绑定
    unbind: function (name, callback) {
      // 如果只提供消息名，则删除整个对应的数组
      if (arguments.length === 1) {
        delete this.callbackDict[name]
      } else if (arguments.length > 1) {
        // 搜索相应的callback，并删除
        if (this.callbackDict[name]) {
          var callList = this.callbackDict[name]

          for (var i = 0, len = callList.length; i < len; i++) {
            if (callList[i] === callback) {
              callList.splice(i, 1)
              break
            }
          }
        }
        // 如果数组为空，则删除
        if (this.callbackDict[name].length === 0) {
          delete this.callbackDict[name]
        }
      }
    }

  }

  /**
   *  Android Method
   *  'client' is given by the app.
   */
  function getprotocol (msg) {
    context.client.getprotocol(msg)
  }

  /**
   *  Invoke app function(open camera, etc) in web page which opened in UIWebView.
   *
   *  Paramter example: { iosMessage:'in://in?tovc=100',androidMessage:'in://contacts?tovc=100' }
   *
   *  Note: '_source'(_s for V2.0) is required in the url. Now only 'ios' and 'android' are supported.
   *
   */
  context.callApp = function (message) {
    if (typeof console === 'undefined') {
      context.console = {
        log: function () {},
        error: function () {}
      }
    }

    if ((typeof message === 'object') &&
      ('iosMessage' in message) && ('androidMessage' in message)) {
      if (inLib.com.isIos()) {
        context.jsBridge = new JSBridge()
        try {
          // console.log("ios:", message.iosMessage );
          context.jsBridge.postNotification('p', {
            message: message.iosMessage
          })
        } catch (e) {
          console.error(e)
        }
      } else if (inLib.com.isAndroid()) {
        try {
          // console.log("android:", message.androidMessage);
          getprotocol(message.androidMessage)
        } catch (e) {
          console.error(e)
        }
      } else {
        console.log('UA: ' + window.navigator.userAgent.toLowerCase() + '  is not supported.')
      }
    } else {
      console.error("Parameter error. The correct format should be: {iosMessage:'',androidMessage:''}.")
    }
  }
  inLib.awake = function(iosMessage, androidMessage) {
   androidMessage = androidMessage || iosMessage
   context.callApp({
       'iosMessage': iosMessage,
       'androidMessage': androidMessage
   })   
  }   
})(window, inLib)