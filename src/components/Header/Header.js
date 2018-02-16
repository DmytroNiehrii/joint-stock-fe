import React, {Component} from 'react'
import './style.css'
import Menu, {MenuItem} from '../Menu/Menu'
import logo from '../../assets/images/logo.svg'

export default class Header extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="header margin-bottom-m">
                <img src={logo} className="logo"/>
                <Menu>
                    <MenuItem to='/header'>header</MenuItem>
                    <MenuItem to='/users'>users</MenuItem>
                    <MenuItem to='/nothing'>nothing</MenuItem>
                </Menu>
            </div>
        )
    }
}