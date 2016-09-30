define(function (require) {
    var React = require('react');

    return React.createClass({

        getInitialState: function () {
            return {
                valor_x: false
            };
        },
        updateValue: function () {
            var a = parseInt($(this.refs.input_a).val()),
                b = parseInt($(this.refs.input_b).val()),
                c = parseInt($(this.refs.input_c).val());

            var delta = b * b - 4 * a * c;

            if (delta < 0) {
                return this.setState({
                    valor_x: 'não possui raizes reais'
                });
            }

            var x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);

            return this.setState({
                valor_x: x1 + ' e ' + x2
            });
        },
        render: function () {
            var p = this.props,
                s = this.state;

            return React.createElement(
                'div',
                { className: 'main' },
                React.createElement(
                    'h2',
                    null,
                    'Digite o valor das 3 variáves para obter o valor de x'
                ),
                React.createElement(
                    'h3',
                    null,
                    React.createElement(
                        'i',
                        null,
                        '𝑎∗𝑥^2+𝑏∗𝑥+𝑐=0'
                    )
                ),
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement(
                            'label',
                            { 'for': 'input_a' },
                            'Valor de A'
                        ),
                        React.createElement('input', { type: 'number', className: 'form-control', id: 'input_a', ref: 'input_a', onKeyUp: this.updateValue, placeholder: 'Valor de A' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement(
                            'label',
                            { 'for': 'input_b' },
                            'Valor de B'
                        ),
                        React.createElement('input', { type: 'number', className: 'form-control', id: 'input_b', ref: 'input_b', onKeyUp: this.updateValue, placeholder: 'Valor de B' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement(
                            'label',
                            { 'for': 'input_c' },
                            'Valor de C'
                        ),
                        React.createElement('input', { type: 'number', className: 'form-control', id: 'input_c', ref: 'input_c', onKeyUp: this.updateValue, placeholder: 'Valor de C' })
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    'Valores de x = ',
                    React.createElement(
                        'b',
                        null,
                        s.valor_x && s.valor_x
                    )
                )
            );
        }
    });
});