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

  selectButton = (cat, group, target) => this.state[cat].map((button) => {
    delete button.marked;
    button.selected = group === cat && button.name === target && !button.selected;

    return button;
  });

  markSwitchers = (group, target) => this.state.switchers.map((switcher) => {
    delete switcher.selected;
    switcher.marked = switcher[group] && switcher[group].indexOf(target) !== -1 && !target.selected;

    return switcher;
  });

  selectSwitcher = target => this.state.switchers.map((switcher) => {
    delete switcher.marked;
    switcher.selected = switcher.id === target.id && !switcher.selected;

    return switcher;
  });

  markButtons = (group, target) => this.state[group].map((button) => {
    delete button.selected;
    button.marked =
      target[group] && target[group].indexOf(button.name) !== -1 && !target.selected;

    return button;
  });

  handleSwitchClick = (switcher) => {
    this.setState(() => ({
      devices: this.markButtons('devices', switcher),
      rooms: this.markButtons('rooms', switcher),
      switchers: this.selectSwitcher(switcher)
    }));
  };

  handleButtonClick = (group, target, active) => {
    this.setState(() => ({
      devices: this.selectButton('devices', group, target),
      rooms: this.selectButton('rooms', group, target),
      switchers: this.markSwitchers(group, target)
    }));
  };

  render() {
    return (
      <div id="app">
        <HomePage>
          <Header key='header' />
          <Board
            key='main'
            switchers={this.state.switchers}
            handleSelection={this.handleSwitchClick}
          />
          <Controllers
            key='section'
            handleSelection={this.handleButtonClick}
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
