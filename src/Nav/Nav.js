import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//   }

    render() {
        let { nav } = this.props;
      
        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {Object.keys(nav).map((elem) => {
                                return <li key={elem}><a href={ nav[elem] }>{ elem }</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
