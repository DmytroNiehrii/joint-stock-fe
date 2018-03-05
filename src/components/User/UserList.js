import React from 'react'
import './style.css'
import User from "./User";
import {loadUsers} from '../../services/api/User'

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        loadUsers((data) => this.setState({items: data}))
    }

    render() {
        if (this.state.items.length == 0) {
            return <h2>No users</h2>
        } else {
            return (
                this.state.items.map((user, i) =>
                    <User key={user.id} data={user} viewMode='card'/>
                )
            )
        }
    }
}