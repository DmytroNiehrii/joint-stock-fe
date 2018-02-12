import React, {Component} from 'react'
import './style.css'
import logo from '../../logo.svg';

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <div className="title-xl">Primary font</div>
            </div>
        )
    }
}