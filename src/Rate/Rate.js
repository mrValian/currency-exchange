import React from 'react';
import './Rate.css';
import Calculator from '../Calculator';

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currency: {},
        date: '',
        basebill: '',
    };
    this.getCurrencyExchange();
    this.arrBills = ["USD", "DKK", "IDR", "RON"];
  }

    getCurrencyExchange = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                this.setState({
                    date: data.date,
                });
                let result= {};
                for (let i = 0; i < this.arrBills.length; i++) {
                    result[this.arrBills[i]] = data.rates[this.arrBills[i]];
                }
                this.setState({
                    currency: result,
                    basebill: data.base,
                });
            });
    }

    render() {
        
        let { date, currency, basebill } = this.state;

        return (
            <div>
                <h3> Курс валют на { date } за { basebill }</h3>
                <div className="flex-container">
                    {Object.keys(currency).map((elem, i) => (
                        <div className="block flex-item" key={elem}>
                            <div className="currency-name">{ elem }</div>
                            <div className="currency-in">{ currency[elem].toFixed(2) }*</div>
                            <div className="currency-out">*за одну еденицу базавой валюты</div>
                        </div>
                    ))}
                </div>
                <Calculator rate={ currency } basebill={ basebill } />
            </div>
        );
    }
}
