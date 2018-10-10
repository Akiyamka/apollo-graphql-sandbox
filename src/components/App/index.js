import React, { Component } from 'react';
import './style.css';

import Currency from 'components/Currency';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Appolo GraphQl Experement
        </header>

          <article>
            <Currency/>
          </article>
      </div>
    );
  }
}

export default App;
