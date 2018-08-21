//====================================================|
// HOME PAGE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './homepage.scss';

// Helpers
import getComponent from '../../../helpers/get-component';


//--------------------------| Component

const HomePage = props => (
  <div className={styles.root}>
    <header className={styles.header}>
      {getComponent(props.children, 'header')}
    </header>

    <main className={styles.main}>
      <section className={styles.section}>
        {getComponent(props.children, 'main')}
      </section>

      <section className={styles.section}>
        {getComponent(props.children, 'section')}
      </section>
    </main>
  </div>
);


//--------------------------| Export

export default HomePage;
