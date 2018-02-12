import React, { Component } from 'react';

import Header from './components/Header'
import User from "./components/User/index";

class App extends Component {
  render() {
      var user = {
          "id": 1,
          "createdDate": 1518105132915,
          "modifiedDate": 1518105132915,
          "version": 0,
          "firstname": "John",
          "lastname": "Smith"
      }
    return (
      <div>
        <Header/>
        <User data={user}/>
      </div>
    );
  }
}

export default App;
