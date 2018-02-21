import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home_page';
import NotFound from '../not_found';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
};
