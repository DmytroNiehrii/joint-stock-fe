import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import './style.css'

export default class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className='menu' style={{color: 'white'}}>
                {this.props.children}
            </div>
        )
    }
}

export {MenuItem}