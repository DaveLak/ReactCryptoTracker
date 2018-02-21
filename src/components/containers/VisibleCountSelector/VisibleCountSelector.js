import React from 'react';

class VisibleCountSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  handleCountChange(event) {
    const {updateDisplayCount} = this.props;
    updateDisplayCount(event.target.value);
  }

  render() {
    const {count} = this.props;
    return (
      <select value={count} onChange={this.handleCountChange}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    );
  }
}

export default VisibleCountSelector;