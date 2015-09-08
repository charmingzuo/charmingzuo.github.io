var config = config || {};

config.child = ({

    getDefaultProps: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c获取类的默认属性 getDefaultProps', 'color:#98FB98;font-size:15px;');
        return {
            time: 123
        };
    },

    getInitialState: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c获取实例的默认状态 getInitialState', 'color:#98FB98;font-size:15px;');
        return {
            time: this.props.time
        };
    },

    componentWillMount: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c首次渲染之前 componentWillMount', 'color:#98FB98;font-size:15px;');
    },

    render: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c渲染 render', 'color:#98FB98;font-size:15px;');
        return <div>{this.state.time}</div>;
    },

    componentDidMount: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c首次渲染之后 componentDidMount', 'color:#98FB98;font-size:15px;');
    },

    componentWillReceiveProps: function (nextProps) {
        //this.setState({ time: this.props.time });
        console.log(line() + ' ' + '    ' + icons.child + '%c属性被修改前 componentWillReceiveProps', 'color:#98FB98;font-size:15px;');
    },

    componentWillUpdate: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c更新前 componentWillUpdate', 'color:#98FB98;font-size:15px;');
    },

    componentDidUpdate: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c更新后 componentDidUpdate', 'color:#98FB98;font-size:15px;');
    },

    shouldComponentUpdate: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c检查是否需要更新 shouldComponentUpdate', 'color:#98FB98;font-size:15px;');
        return true;
    },

    componentWillUnmount: function () {
        console.log(line() + ' ' + '    ' + icons.child + '%c组件已移除 componentWillUnmount', 'color:#98FB98;font-size:15px;');
    }
});