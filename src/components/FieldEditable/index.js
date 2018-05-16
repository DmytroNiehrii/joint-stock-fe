import React, {Component} from 'react'
import './style.css'

export default class FieldEditable extends Component {

    componentWillMount() {
        this.setState({
            contenteditable: 'false',
            value: this.props.value,
            isUpdated: false
        })
    }

    render() {
        const {contenteditable, value} = this.state
        return (
            <div className={this.props.className}
                 ref={(ref) => {this.ref = ref}}
                 contentEditable={contenteditable}
                 onMouseOver={this.onMouseOverHandler}
                 onMouseLeave={this.onMouseLeaveHandler}
                 onClick={this.toEditMode}
                 onBlur={this.toViewMode}
                 onInput={this.handleChange}
                 dangerouslySetInnerHTML={{__html: this.props.value}}
            />
        )
    }

    onMouseOverHandler = (event) => {
        if (this.props.contenteditable && this.state.contenteditable == 'false') {
            this.ref.className = this.props.className + ' hightlighted'
        }
    }
    onMouseLeaveHandler = (event) => {
        this.ref.className = this.props.className
    }

    toEditMode = (event) => {
        if (this.props.contenteditable) {
            this.setState({contenteditable: 'true'})
        }
    }
    toViewMode = (event) => {
        this.setState({contenteditable: 'false'})
        event.target.className = this.props.className
        this.update()
    }

    update = () => {
        if (this.state.isUpdated) {
            this.props.onUpdateHandler()
            this.setState({isUpdated: false})
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.innerHTML,
            //value: event.target.innerText,
            isUpdated: true
        })

    }

}