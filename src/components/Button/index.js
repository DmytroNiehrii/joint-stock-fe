import React, {Component} from 'react'
import './style.css'

export default class Button extends Component {

    render() {
        const {label, onClickHandler} = this.props
        const style = this.props.className + ' button'
        return (
            <div className={style} onClick={onClickHandler}>
                <div className='hovering'>{label}</div>
            </div>
        )
    }
}