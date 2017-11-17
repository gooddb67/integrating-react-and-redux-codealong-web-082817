import React, { Component } from 'react';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <button>Click Me</button>
        <Counter store={this.props.store} />
      </div>
    );
  }
}

export default App;
