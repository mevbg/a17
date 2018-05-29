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
  state = JSON.parse(localStorage.getItem('state')) || {
    devices,
    rooms,
    switchers
  };

  selectButton = (group, target) => this.state[group].map((originButton) => {
    const button = originButton;

    delete button.marked;
    button.selected =
      target.group === group &&
      button.name === target.name &&
      !button.selected;

    return button;
  });

  markSwitchers = button => this.state.switchers.map((originSwitcher) => {
    const switcher = originSwitcher;

    delete switcher.selected;
    switcher.marked =
      switcher[button.group] &&
      switcher[button.group].indexOf(button.name) !== -1 &&
      !button.selected;

    return switcher;
  });

  selectSwitcher = target => this.state.switchers.map((originSwitcher) => {
    const switcher = originSwitcher;

    delete switcher.marked;
    switcher.selected =
      switcher.id === target.id &&
      !switcher.selected;

    return switcher;
  });

  markButtons = (group, switcher) => this.state[group].map((originButton) => {
    const button = originButton;

    delete button.selected;
    button.marked =
      switcher[group] &&
      switcher[group].indexOf(button.name) !== -1 &&
      !switcher.selected;

    return button;
  });

  saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  handleSwitchClick = (switcher) => {
    this.setState(() => ({
      devices: this.markButtons('devices', switcher),
      rooms: this.markButtons('rooms', switcher),
      switchers: this.selectSwitcher(switcher)
    }), this.saveStateToLocalStorage);
  };

  handleButtonClick = (button) => {
    this.setState(() => ({
      devices: this.selectButton('devices', button),
      rooms: this.selectButton('rooms', button),
      switchers: this.markSwitchers(button)
    }), this.saveStateToLocalStorage);
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
