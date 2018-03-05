import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Router, Route, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import App from './App'
import history from '../history'
import {ConnectedRouter} from 'react-router-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history = {history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root;