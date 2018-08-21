//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';

// Styles
import styles from './app.scss';

// Organisms
import Header from './components/organisms/header';
import Board from './components/organisms/board';
import Controllers from './components/organisms/controllers';

// Templates
import HomePage from './components/templates/homepage';


//--------------------------| Component

const App = () => (
  <div className={styles.root}>
    <HomePage>
      <Header key='header' />
      <Board key='main' />
      <Controllers key='section' />
    </HomePage>
  </div>
);


//--------------------------| Export

export default hot(module)(App);
