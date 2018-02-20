import React from 'react';

class VisibleCoinList extends React.Component {

  componentWillMount() {
    const { setVisibleCoins , count } = this.props;
    setVisibleCoins(count);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default VisibleCoinList;