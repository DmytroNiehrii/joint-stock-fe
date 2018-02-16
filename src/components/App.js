import React, { Component } from 'react'
import Header from './Header/Header'
import UserList from "./UserList/UserList"
import {Route, Switch, Redirect} from 'react-router-dom'
import Menu, {MenuItem} from './Menu/Menu'

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Redirect from='/' exact to='/users'/>
                    <Route path = '/header' component = {Header} />
                    <Route path = '/users' component = {UserList} />
                    <Route path = '/nothing' />
                    <Route path='*' render={this.notFound}/>
                </Switch>



            </div>
        );
    }
    notFound = () => <h1>Not Found</h1>
}

export default App;
