var React = typeof require == 'function' ?
    require('react') :
    window.React;

var Switching = React.createClass({displayName: "Switching",
    getInitialState: function () {
        return {
            on: this.props.on
        };
    },
    clickHandle: function () {
        console.clear();
        console.log('%c--------------------------', 'color:#ccc');
        console.log('%csetState({on: %c' + !this.state.on + '%c})',
            'font-size:20px;color:#fff;',
            'font-size:20px;color:yellow;',
            'font-size:20px;color:#fff;');
        this.setState({on: !this.state.on});
    },
    render: function () {
        console.log('%crender(), on=%c' + this.state.on, 'font-size:20px;color:#fff;', 'font-size:20px;color:yellow;');
        return (
            React.createElement("button", {onClick: this.clickHandle, className: 'switching ' + (this.state.on ? 'on' : 'off')}, 
                this.state.on ? 'ON' : 'OFF'
            )
        );
    }
});

// exports
typeof module == 'object' ?
    (module.exports = Switching) :
    (window.Switching = Switching);