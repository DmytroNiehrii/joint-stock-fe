import React, { Component } from 'react'
import Header from './Header/Header'
import UserList from "./UserList/UserList"
import {Route, Switch} from 'react-router-dom'
import Menu, {MenuItem} from './Menu'

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <UserList/>
                <Menu>
                    <MenuItem to='/header'>header</MenuItem>
                    <MenuItem to='/users'>users</MenuItem>
                    <MenuItem to='/nothing'>nothing</MenuItem>
                </Menu>
                <Switch>
                    <Route path = '/header' component = {Header} />
                    <Route path = '/users' component = {UserList} />
                    <Route path = '/nothing' />
                </Switch>



            </div>
        );
    }
}

export default App;
