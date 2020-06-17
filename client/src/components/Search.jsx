import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class='search-container'>
        <div>
          <div class='hamburger'></div>
          <div class='hamburger'></div>
          <div class='hamburger'></div>
          <div class='hamburger'></div>
        </div>
        <input type='text' class='search-input' />
        <div class='triangle'></div>
      </div>
    );
  }
}

export default Search;
