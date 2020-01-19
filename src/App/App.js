import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../Header';
import Rate from '../Rate';
import Cookie from '../Cookie';
import Footer from '../Footer';
import Contact from '../Contact';
import Points from '../Points';

export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {

    let { nav } = this.props;

    return (
        <div>
            <Header nav={nav} />
            <div className="container">
                <main>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ Rate } />
                            <Route exact path="/points" component={ Points } />
                            <Route exact path="/contact" component={ Contact } />
                        </Switch>
                    </Router>
                </main>
            </div>

            <div className="container" id="cookie_info">
                <div className="site-content">
                    <Cookie />
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}
