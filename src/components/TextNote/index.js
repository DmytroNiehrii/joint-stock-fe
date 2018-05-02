import React, {Component} from 'react'
import './style.css'
import {EMPTY_LABEL} from '../../constants'

class TextNote extends Component {

    state = {
        text: EMPTY_LABEL
    }

    componentWillMount() {
        let {text} = this.props;

        this.setState({text: text})
    }

    render() {
        return (
            <div className="descriptionContainer">
                <textarea>{this.state.text}</textarea>
                <div className="descriptionToolBar">
                    <button className="descriptionToolButton">Post</button>
                    <button className="descriptionToolButton">Delete</button>
                </div>

            </div>

        );
    }
}

export default TextNote