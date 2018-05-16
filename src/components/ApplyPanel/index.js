import React, {Component} from 'react'
import Button from '../Button'
import './style.css'

export default class ApplyPanel extends Component {

    render() {
        const {applyHandler, cancelHandler} = this.props
        return (
            <div className='applyPanelContainer'>
                <Button className='applyButton' label='Apply' onClickHandler={applyHandler}/>
                <Button className='cancelButton' label='Cancel' onClickHandler={cancelHandler}/>
            </div>
        )
    }
}