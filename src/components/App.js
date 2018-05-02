import React, { Component } from 'react'
import Header from './Header/Header'
import UserList from "./User/UserList"
import CommunityList from "./Community/CommunityList"
import Community from "./Community/Community"
import Description from "./TextNote/index"
import {Route, Switch, Redirect} from 'react-router-dom'

import {RouteConst} from '../constants'


class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Redirect from='/' exact to={RouteConst.COMMUNITY_LIST}/>
                    <Route path = {RouteConst.USER_LIST} component = {UserList} />
                    <Route path = {RouteConst.COMMUNITY_LIST} component = {CommunityList}/>
                    <Route path = {RouteConst.COMMUNITY} component = {Community}/>
                    <Route path = '/test' component = {Description}/>
                    <Route path='*' render={this.notFound}/>
                </Switch>



            </div>
        );
    }
    notFound = () => <h1>Not Found</h1>
}

export default App;
