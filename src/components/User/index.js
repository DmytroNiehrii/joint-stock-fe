import React, {Component} from 'react'
import './style.css'

export default class User extends Component {

    render() {
        const {id, createdDate, modifiedDate, firstname, lastname} = this.props.data;
        return (
            <div className="user">
                <div className="title-l bold">{firstname} {lastname}</div>
            </div>
        )
    }
}