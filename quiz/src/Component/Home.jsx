import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className='home-container'>
        <div className='texts'>
        <h1>Quiz App</h1>
        <button>Play</button>
        </div>
      
      </div>
    );
  }
}

export default Home;
