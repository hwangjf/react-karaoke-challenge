import React, { Component } from 'react';

class Filter extends Component {
  handleChange = (event) => {
    this.props.handleChange(event.currentTarget.value)
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.handleChange} value={this.props.value} />
      </div>
    );
  }
}

export default Filter;
