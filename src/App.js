import React, { Component } from 'react';

import Header from './components/Header/Header'
import UserList from "./components/UserList/UserList";

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <UserList/>
            </div>
        );
    }
}

export default App;
