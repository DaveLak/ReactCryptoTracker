import React from 'react';
import './MainView.css';

const MainView = props => (
  <main className="CardHolder">
    {props.children}
  </main>
);

export default MainView;