//how passing data between sibling in react using  callback fn

import React, { Component } from 'react';
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToPass: '', // Shared data
    };
  }

  // Callback function to update dataToPass
  updateDataToPass = (newData) => {
    this.setState({ dataToPass: newData });
  };

  render() {
    return (
      <div>
        <SiblingA updateDataToPass={this.updateDataToPass} />
        <SiblingB data={this.state.dataToPass} />
      </div>
    );
  }
}

export default ParentComponent;


// SiblingA.js
import React, { Component } from 'react';

class SiblingA extends Component {
  handleChange = (event) => {
    const newData = event.target.value;
    this.props.updateDataToPass(newData); // Trigger the callback
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type data here"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SiblingA;


// SiblingB.js
import React, { Component } from 'react';

class SiblingB extends Component {
  render() {
    return (
      <div>
        <p>Data received from SiblingA: {this.props.data}</p>
      </div>
    );
  }
}

export default SiblingB;


import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
