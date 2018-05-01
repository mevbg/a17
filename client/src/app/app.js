// =========================| App |========================= //



//--------------------------| Import

import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/organisms/header';
import Board from './components/organisms/board';
import Controllers from './components/organisms/controllers';
import HomePage from './components/templates/homepage';
import { rooms, devices, switchers } from '../model.json';
import './app.scss';


//--------------------------| Body

class App extends React.Component {
  state = {
    devices,
    rooms,
    switchers
  };

  updateCategory = (cat, group, target, active) => this.state[cat].map((item) => {
    item.active = group === cat && item.name === target && !item.active;

    return item;
  });

  updateSwitchers = (group, target, active) => this.state.switchers.map((switcher) => {
    if (switcher[group] && switcher[group].indexOf(target) !== -1 && active) {
      switcher.glow = true;
    }
    else {
      delete switcher.glow;
    }

    return switcher;
  });

  handleSelection = (group, target, active) => {
    this.setState(() => ({
      devices: this.updateCategory('devices', group, target, active),
      rooms: this.updateCategory('rooms', group, target, active),
      switchers: this.updateSwitchers(group, target, active)
    }));
  };

  render() {
    return (
      <div id="app">
        <HomePage>
          <Header key='header' />
          <Board key='main' switchers={this.state.switchers} />
          <Controllers
            key='section'
            handleSelection={this.handleSelection}
            devices={this.state.devices}
            rooms={this.state.rooms}
          />
        </HomePage>
      </div>
    );
  }
}


//--------------------------| Export

export default hot(module)(App);
