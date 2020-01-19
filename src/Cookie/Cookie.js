import React from 'react';
import './Cookie.css';

export default class Cookie extends React.Component {
//   constructor(props) {
//     super(props);
//   }

    render() {
      
        return (
            <div className="well">
                На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
            </div>
        );
    }
}
