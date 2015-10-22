$(function () {
    if (!g_IS_WECHAT) return;

    var wxShareData = window.g_WECHAT_DATA || {};
    if (!wxShareData) return;

    var onBridgeReady = function () {
        var logoSize = wxShareData.logoSize.split(/[x\*]/i);
        var data = {
            img_url: wxShareData.logo,
            img_width: logoSize[0] | 0,
            img_height: logoSize[1] | 0,
            "link": location.href,
            "desc": wxShareData.subject,
            "title": wxShareData.title
        };

        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', data, function (res) {
            })
        });

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', data, function (res) {
            });
        });
    };

    if (typeof WeixinJSBridge == "undefined") {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else {
        onBridgeReady();
    }
});