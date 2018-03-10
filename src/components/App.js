import React, { Component } from 'react'
import Header from './Header/Header'
import UserList from "./User/UserList"
import CommunityList from "./Community/CommunityList"
import Community from "./Community/Community"
import Description from "./Description/Description"
import {Route, Switch, Redirect} from 'react-router-dom'


class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Redirect from='/' exact to='/community'/>
                    <Route path = '/user' component = {UserList} />
                    <Route path = '/community' component = {CommunityList}/>
                    <Route path = '/communityCard' component = {Community}/>
                    <Route path = '/test' component = {Description}/>
                    <Route path='*' render={this.notFound}/>
                </Switch>



            </div>
        );
    }
    notFound = () => <h1>Not Found</h1>
}

export default App;
