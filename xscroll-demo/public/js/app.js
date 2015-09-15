var React = require('react'),
    Jquery = require('jquery'),
    XScroll = require('xscroll/dist/xscroll'),
    Infinite = require('xscroll/dist/plugins/infinite'),
    LazyLoad = require('xscroll/dist/plugins/lazyload');

var data = [
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/92/e0/31/92e0313f-e65b-9c1e-cb1c-992a15059262/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple5/v4/d5/5d/2a/d55d2a51-f0d9-3888-3d57-95075c3a52db/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/83/45/86/83458677-c4f1-ab01-fd83-08f190e5885f/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/61/f5/56/61f556f7-486a-a4fc-6d63-7f875d115c67/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/92/e0/31/92e0313f-e65b-9c1e-cb1c-992a15059262/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple3/v4/a9/c4/7b/a9c47b92-ffab-8825-4eea-858ab41484be/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/d3/69/3d/d3693d7c-8622-62f6-bfaf-305edac67945/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a1.mzstatic.com/us/r30/Purple1/v4/2c/02/5b/2c025b78-7dac-3dba-f1e1-18e8135d3ffa/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/3c/8e/da/3c8edaf8-92b8-f1c0-d5cc-0b4babdbea62/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple4/v4/8f/4e/a1/8f4ea103-feb8-cd51-a294-8479b9fd2243/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple5/v4/d5/5d/2a/d55d2a51-f0d9-3888-3d57-95075c3a52db/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/83/45/86/83458677-c4f1-ab01-fd83-08f190e5885f/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/61/f5/56/61f556f7-486a-a4fc-6d63-7f875d115c67/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple1/v4/28/c5/1d/28c51d0a-dda9-94b7-e26b-6cdd81256fdb/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a1.mzstatic.com/us/r30/Purple5/v4/81/48/7b/81487be6-b951-668b-8599-bbaa43a681b8/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a2.mzstatic.com/us/r30/Purple5/v4/97/92/0f/97920f46-330e-9ec4-0cf2-1db7dc9e8e5d/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple3/v4/da/19/c3/da19c38d-4689-bc72-8846-1ee602ab7a1c/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple1/v4/b9/23/8a/b9238a72-2650-681c-ba46-56ee7b9c86a1/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a2.mzstatic.com/us/r30/Purple5/v4/43/76/95/43769592-891a-57bd-73aa-da12d327e241/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple5/v4/3c/ce/e4/3ccee423-03e6-9312-4c3f-eec8367de2d3/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/a8/5c/d8/a85cd8cc-070d-b0ec-893b-711299619ad7/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/92/e0/31/92e0313f-e65b-9c1e-cb1c-992a15059262/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple3/v4/a9/c4/7b/a9c47b92-ffab-8825-4eea-858ab41484be/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/d3/69/3d/d3693d7c-8622-62f6-bfaf-305edac67945/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a1.mzstatic.com/us/r30/Purple1/v4/2c/02/5b/2c025b78-7dac-3dba-f1e1-18e8135d3ffa/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/3c/8e/da/3c8edaf8-92b8-f1c0-d5cc-0b4babdbea62/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple4/v4/8f/4e/a1/8f4ea103-feb8-cd51-a294-8479b9fd2243/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple5/v4/d5/5d/2a/d55d2a51-f0d9-3888-3d57-95075c3a52db/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/83/45/86/83458677-c4f1-ab01-fd83-08f190e5885f/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/61/f5/56/61f556f7-486a-a4fc-6d63-7f875d115c67/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple1/v4/28/c5/1d/28c51d0a-dda9-94b7-e26b-6cdd81256fdb/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a1.mzstatic.com/us/r30/Purple5/v4/81/48/7b/81487be6-b951-668b-8599-bbaa43a681b8/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a2.mzstatic.com/us/r30/Purple5/v4/97/92/0f/97920f46-330e-9ec4-0cf2-1db7dc9e8e5d/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple3/v4/da/19/c3/da19c38d-4689-bc72-8846-1ee602ab7a1c/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple1/v4/b9/23/8a/b9238a72-2650-681c-ba46-56ee7b9c86a1/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a2.mzstatic.com/us/r30/Purple5/v4/43/76/95/43769592-891a-57bd-73aa-da12d327e241/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple5/v4/3c/ce/e4/3ccee423-03e6-9312-4c3f-eec8367de2d3/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/a8/5c/d8/a85cd8cc-070d-b0ec-893b-711299619ad7/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/92/e0/31/92e0313f-e65b-9c1e-cb1c-992a15059262/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple3/v4/a9/c4/7b/a9c47b92-ffab-8825-4eea-858ab41484be/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    },
    {
        "avatar": "http://a5.mzstatic.com/us/r30/Purple1/v4/d3/69/3d/d3693d7c-8622-62f6-bfaf-305edac67945/icon160x160.jpeg",
        "name": "皇族♠俱乐部",
        "platform": "安卓",
        "players": "16",
        "slogan": "欢迎加入皇族。"
    },
    {
        "avatar": "http://a1.mzstatic.com/us/r30/Purple1/v4/2c/02/5b/2c025b78-7dac-3dba-f1e1-18e8135d3ffa/icon160x160.jpeg",
        "name": "乐飞豪",
        "platform": "安卓",
        "players": "1",
        "slogan": "哈哈哈还彼此彼此还哈哈哈哈哈哈还哈哈哈还"
    },
    {
        "avatar": "http://a4.mzstatic.com/us/r30/Purple5/v4/3c/8e/da/3c8edaf8-92b8-f1c0-d5cc-0b4babdbea62/icon160x160.jpeg",
        "name": "连萌部落",
        "platform": "iOS",
        "players": "72",
        "slogan": "速度进来签到领积分，想要副会长的联系"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple4/v4/8f/4e/a1/8f4ea103-feb8-cd51-a294-8479b9fd2243/icon160x160.jpeg",
        "name": "随心所欲",
        "platform": "iOS",
        "players": "4",
        "slogan": "拉力送心和积分，大家快进"
    },
    {
        "avatar": "http://a3.mzstatic.com/us/r30/Purple5/v4/d5/5d/2a/d55d2a51-f0d9-3888-3d57-95075c3a52db/icon160x160.jpeg",
        "name": "天喜哈巴狗",
        "platform": "安卓",
        "players": "1",
        "slogan": "本公会大量招人"
    }
];

var infiniteData = (function(){
    var tmp = [{
        data:{},
        style:{
            height:395,width: "100%"
        },
        recycled:false
    }];
    tmp.push({
        data:{},
        style:{
            height: 45,position: "sticky",width: "100%"
        },
        recycled:false
    });
    for (var i = 0, len = data.length;i < len; i++) {
        tmp.push({
            data:{
                num: i,
                avatar:data[i].avatar,
                name:data[i].name,
                platform:data[i].platform,
                players:data[i].players,
                slogan:data[i].slogan
            },
            style:{height:68,background:"#fff","color":"#000"}
        });
    }
    return tmp;
})();

var Container = React.createClass({
    render: function() {
        return (
            <div id="J_Scroll">
            <div className="xs-container">
                <ul className="xs-content">
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>

                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>

                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>

                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>

                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                    <li className="xs-row"></li>
                </ul>
            </div>
            </div>
        )
    }
});

React.render(
    <Container />,
    document.body
);

var Head = React.createClass({
    getInitialState: function() {
        return {num: '28.2万', player: '395.7万'};
    },
    render: function() {
        return (
            <div id="head">
                <div id="searchContainer">
                    <div id="searchContent">
                        <span id="search">请输入公会ID</span>
                    </div>
                </div>
                <div id="banner"></div>
                <h3>
                    已有<em>{this.state.num}</em>个公会入驻，累计<em>{this.state.player}</em>位玩家
                </h3>
                <div id="statusImg">
                    <button id="joinBtn"></button>
                    <button id="createBtn"></button>
                </div>
            </div>
        )
    }
});

var Nav = React.createClass({
    render: function() {
        return (
            <ul id="tabs">
                <li className="current">招募榜</li>
                <li>活跃榜</li>
            </ul>
        )
    }
});

var Player = React.createClass({
    render: function() {
        return (
            <div className="list-item">
                <div className="item-avatar">
                    <img className="lazyload" data-src={this.props.avatar} width="40" height="40"/>
                </div>
                <div className="item-info">
                    <h4>{this.props.name}</h4>
                    <p><em>{this.props.platform}</em>({this.props.players}人在玩)</p>
                    <p>{this.props.slogan}</p>
                </div>
                <div className="item-join">加入</div>
            </div>
        )
    }
});

var xscroll = new XScroll({
    renderTo: "#J_Scroll"
});

xscroll.render();

var infinite = new Infinite({
    infiniteElements: "#J_Scroll .xs-row",
    renderHook: function (el, row) {
        console.log(el, row);
        if (row.recycled) {
            React.render(
                <Player avatar={row.data.avatar} name={row.data.name} platform={row.data.platform} players={row.data.players} slogan={row.data.slogan} />, el
            )
        } else {
            if(row.style.position) {
                React.render(<Nav />, el);
            } else {
                React.render(<Head />, el);
            }
        }
    }
});

xscroll.plug(infinite);

var lazyload = new LazyLoad({
    imgsSelector:".lazyload",
    imgSetter:function(img){
        var src = img.getAttribute("data-src");
        if(src && img.style.backgroundImage && img.style.backgroundImage.match(new RegExp(src))) {
            return;
        }
        img.style.backgroundImage = 'url('+src+')';
    }
});

xscroll.plug(lazyload);

infinite.append(0, infiniteData);

xscroll.render();