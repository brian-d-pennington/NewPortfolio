import React, { Component } from 'react';
import About from './About';
import Blog from './Blog';
import Links from './Links';

class App extends Component {
  render() {
    return (
      <div className="ui three column grid">
        <div className="row">
          <div className="column"></div>
          <div className="column">
            <img src={ require('./profilepic.jpg') }
               style={{border: 'solid #ff6700 3px', 
                    borderRadius: '10px'}}
               alt="brian pic">
            </img>
          </div>
          <div className="column"></div>
        </div>
        
        <div className="row">
          <div className="column" style={{textAlign: 'right'}}>
            <About />
          </div>
          <div className="column" style={{textAlign: 'center'}}>
            <Blog />
          </div>
          <div className="column">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
