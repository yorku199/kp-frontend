import React, { Component} from 'react';

import CreateData from './component/CreateData';
import ListData from './component/ListData';
import './App.css';

class App extends Component {

  render(){
      
      return (
        <div classname="App">
          <div className="container">
            <CreateData />
            <ListData />
            </div>
        </div>
      );
    }
}

export default App;
