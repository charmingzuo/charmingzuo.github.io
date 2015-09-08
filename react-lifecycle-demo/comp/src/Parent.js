var config = config || {};

config.parent = ({

    getDefaultProps: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c获取类的默认属性 getDefaultProps', 'font-weight:bold;color:#fcc28c;font-size:15px;');
        return {
            time: 123
        };
    },

    getInitialState: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c获取实例的默认状态 getInitialState', 'font-weight:bold;color:#fcc28c;font-size:15px;');
        return {};
    },

    componentWillMount: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c首次渲染之前 componentWillMount', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    },

    render: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c渲染 render', 'font-weight:bold;color:#fcc28c;font-size:15px;');
        return (
            <div>
                time: <Child time={this.props.time}/>
            </div>
        );
    },

    componentDidMount: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c首次渲染之后 componentDidMount', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    },

    componentWillReceiveProps: function (nextProps) {
        //this.setState({ time: this.props.time });
        console.log(line() + ' ' + '  ' + icons.parent + '%c属性被修改前 componentWillReceiveProps', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    },

    componentWillUpdate: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c更新前 componentWillUpdate', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    },

    componentDidUpdate: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c更新后 componentDidUpdate', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    },

    shouldComponentUpdate: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c检查是否需要更新 shouldComponentUpdate', 'font-weight:bold;color:#fcc28c;font-size:15px;');
        return true;
    },

    componentWillUnmount: function () {
        console.log(line() + ' ' + '  ' + icons.parent + '%c组件已移除 componentWillUnmount', 'font-weight:bold;color:#fcc28c;font-size:15px;');
    }
});