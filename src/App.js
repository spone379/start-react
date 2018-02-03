import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from 'containers/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Layout} />
        {/*<Route path='/phones/:id' component={Phone} />
        <Route path='/categories/:id' component={Layout} />
        <Route path='/basket' component={Basket} /> */}
      </div>
    );
  }
}

export default App;
