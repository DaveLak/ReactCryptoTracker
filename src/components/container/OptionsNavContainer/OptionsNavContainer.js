import React from 'react';

class OptionsNavContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayCurrency: 'USD',
      displayCount: 10
    }
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange(event) {
    console.log('BOOM');
    this.setState({
      displayCurrency: event.target.value
    })
  }

  render() {
    console.log('REnder');

    const { children } = this.props;

    return (
      <div className="OptionsNavContainer">
        <nav className="OptionsNav">
          <form>
            <select value={this.state.displayCurrency} onChange={this.handleCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BTC">BTC</option>
            </select>
          </form>
        </nav>
        {React.Children.map(children, child =>
          React.cloneElement(child, { ...this.state }))
        }
      </div>
    )
  }
}

export default  OptionsNavContainer;