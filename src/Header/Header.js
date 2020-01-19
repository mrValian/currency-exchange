import React from 'react';
import './Header.css';

import Nav from '../Nav';

export default class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

    render() {

        let { nav } = this.props;
      
        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="main-header">
                    <div className="container">
                        <h1 className="site-title">React Lite Level</h1>
                    </div>
                </div>
                <Nav nav={ nav } />
            </header>
        );
    }
}
