import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counterbase: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {rate: props.rate};
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({
        counterbase: (countCurrency / this.state.rate[typeCurrency]),
    });
  }

    render() {

        let { rate, basebill } = this.props;
        let { counterbase } = this.state;
      
        return (
            <div>
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу</div>
                    {/* <div><label><input type="radio" name="radio" defaultValue="0" /> купить</label></div>
                    <div><label><input type="radio" name="radio" defaultValue="1" /> продать</label></div> */}
                    <div>
                        <form onSubmit={ this.calcRate }>
                            <input name="count-currency" type="number" defaultValue="0" />
                            <select name="type-currency" id="">
                                {Object.keys(rate).map((elem, i) => (
                                    <option value={ elem } key={ elem }>{ elem }</option>
                                ))}
                            </select>
                            <input type="submit" defaultValue="calc" />
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>{basebill} {counterbase}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
