import React from 'react';
import './CardHolder.css';

class CardHolder extends React.Component {

  render() {
    return (
      <main className="CardHolder">
        {this.props.children}
      </main>
    );
  }

}

export default CardHolder;