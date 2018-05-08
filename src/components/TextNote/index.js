import React, {Component} from 'react'
import './style.css'
import {EMPTY_LABEL} from '../../constants'

class TextNote extends Component {

    state = {
        text: EMPTY_LABEL
    }

    componentWillMount() {
        let {text} = this.props;

        this.setState({value: text})
    }

    render() {
        return (
            <div className="descriptionContainer">
                <textarea onChange={this.handleChange}>{this.state.value}</textarea>
                <div className="descriptionToolBar">
                    <button className="descriptionToolButton" onClick={this.props.postHandler}>Post</button>
                    <button className="descriptionToolButton">Delete</button>
                </div>

            </div>

        );
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
}

export default TextNote