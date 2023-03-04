import React from 'react';
import backgound from './patakazii/src/background.jpg';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My Component</h1>
        <img src={backgound} alt="My Image" />
      </div>
    );
  }
}

export default MyComponent;
