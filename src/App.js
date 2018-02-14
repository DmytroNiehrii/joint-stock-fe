import React, { Component } from 'react';

import Header from './components/Header/Header'
import UserList from "./components/UserList/UserList";

class App extends Component {

    render() {
        var user = [
            {
                "id": 1,
                "createdDate": 1518105132915,
                "modifiedDate": 1518105132915,
                "version": 0,
                "firstname": "John",
                "lastname": "Smith"
            },
            {
                "id": 2,
                "createdDate": 1518105132915,
                "modifiedDate": 1518105132915,
                "version": 0,
                "firstname": "Lily",
                "lastname": "Belly"
            }
        ]
        return (
            <div>
                <Header/>
                <UserList/>
            </div>
        );
    }
}

export default App;
