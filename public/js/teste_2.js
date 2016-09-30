requirejs.config({
    paths: {
        'react': '../../libs/react/react',
        'react/addons': '../../libs/react/react-with-addons',
        'react/dom': '../../libs/react/react-dom'
    }
})

define(function(require) {
    var ReactDOM = require('react/dom');
    var React = require('react/addons');
    var react_teste_2 = require('components/teste_2');

    ReactDOM.render(React.createElement(react_teste_2), document.getElementById('react_container'));
})
