import React, {Component} from 'react'
import './style.css'
import Menu, {MenuItem} from '../Menu/Menu'
import logo from '../../assets/images/logo.svg'
import {RouteConst} from '../../constants'

export default class Header extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="header margin-bottom-m">
                <img src={logo} className="logo"/>
                <Menu>
                    <MenuItem to={RouteConst.USER_LIST}>Users</MenuItem>
                    <MenuItem to={RouteConst.COMMUNITY_LIST}>Communities</MenuItem>
                    <MenuItem to='/test'>TestComponents</MenuItem>
                </Menu>
            </div>
        )
    }
}