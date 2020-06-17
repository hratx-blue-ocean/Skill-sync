import React from 'react';
import Search from './components/Search.jsx';
import NewPost from './components/NewPost.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Search />
        <NewPost />
      </div>
    );
  }
}

export default App;
