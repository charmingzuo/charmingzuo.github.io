$(function () {
    var $mapEl = $('#baidu-map');

    if ($mapEl[0] && $mapEl.is(':visible')) {

        window.g_InitBaiduMap = function () {
            var x = 113.9582;
            var y = 22.5465;
            var map = new BMap.Map('baidu-map');
            var point = new BMap.Point(x, y);
            var marker = new BMap.Marker(new BMap.Point(x, y), {
                icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
                    scale: 1,
                    fillColor: 'red',
                    fillOpacity: 0.8
                })
            });

            map.centerAndZoom(point, 15);
            map.setCurrentCity('深圳');
            map.enableScrollWheelZoom(true);
            map.addOverlay(marker);
        };

        var s = document.createElement('script');
        s.src = 'http://api.map.baidu.com/api?v=2.0&ak=Ht0Ke4fTceiIR6Qanj0Sw4GD&callback=g_InitBaiduMap';
        s.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(s);
    }
});