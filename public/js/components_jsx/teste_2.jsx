define(function(require) {
    var React = require('react');

    return React.createClass({

        getInitialState: function() {
            return {
                valor_x: false
            }
        },
        updateValue: function() {
            var a = parseInt($(this.refs.input_a).val()),
                b = parseInt($(this.refs.input_b).val()),
                c = parseInt($(this.refs.input_c).val());

            var delta = (b*b) - (4*a*c);

            if (delta < 0) {
                return this.setState({
                    valor_x: 'não possui raizes reais'
                })
            }

            var x1 = (-1*b + Math.sqrt(delta))/(2*a);
            var x2 = (-1*b - Math.sqrt(delta))/(2*a);

            return this.setState({
                valor_x: x1 + ' e ' + x2
            })
        },
        render: function() {
            var p = this.props,
                s = this.state;

            return (
                <div className="main">
                    <h2>Digite o valor das 3 variáves para obter o valor de x</h2>
                    <h3><i>𝑎∗𝑥^2+𝑏∗𝑥+𝑐=0</i></h3>

                    <form>
                        <div class="form-group">
                            <label for="input_a">Valor de A</label>
                            <input type="number" className="form-control" id="input_a" ref="input_a" onKeyUp={this.updateValue} placeholder="Valor de A" />
                        </div>
                        <div class="form-group">
                            <label for="input_b">Valor de B</label>
                            <input type="number" className="form-control" id="input_b" ref="input_b" onKeyUp={this.updateValue} placeholder="Valor de B" />
                        </div>
                        <div class="form-group">
                            <label for="input_c">Valor de C</label>
                            <input type="number" className="form-control" id="input_c" ref="input_c" onKeyUp={this.updateValue} placeholder="Valor de C" />
                        </div>
                    </form>

                    <p>Valores de x = <b>{s.valor_x && s.valor_x}</b></p>
                </div>
            );
        }
    });
});
