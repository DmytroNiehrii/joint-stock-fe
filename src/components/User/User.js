import React, {Component} from 'react'
import './style.css'
import {timestampToDate} from '../../utils/dateFormat'
import {translation} from '../../services/transtation'

export default class User extends Component {

    render() {
        const {viewMode} = this.props

        switch(viewMode) {
            case 'card':
                return this.renderCardView()
                break
            default:
                return this.renderRowView()
        }
    }

    renderRowView() {
        const {id, createdDate, modifiedDate, firstname, lastname} = this.props.data
        return (
            <div className="user margin-bottom-s">
                <div className="title-l bold">{firstname} {lastname}</div>
            </div>
        )
    }

    renderCardView() {
        const {id, createdDate, modifiedDate, firstname, lastname} = this.props.data
        const l10 = translation()
        return (
            <div className='userCardContainer'>
                <div className='title-xl bold'>{firstname} {lastname}</div>
                <div className='secondary-text'>{l10.created} {timestampToDate(createdDate)}</div>
                <div className='secondary-text'>{l10.modified} {timestampToDate(modifiedDate)}</div>
            </div>
        )

    }
}