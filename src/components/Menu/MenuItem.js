import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'


export default class MenuItem extends Component {
    state = {
        isHightlighted: false
    }
    onMouseEnter() {
        this.setState({
            isHightlighted: true
        })
    }
    onMouseLeave() {
        this.setState({
            isHightlighted: false
        })
    }

    render() {
        let className = 'menuItem'
        if (this.state.isHightlighted) {
            className = className + ' menuItemHightlighted'
        }
        return (
            <div className={className} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
                <NavLink className='navLink' to={this.props.to} activeStyle={{color: '#ffffff'}}>{this.props.children}</NavLink>
            </div>
        )
    }
}