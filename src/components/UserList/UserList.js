import React from 'react'
import './style.css'
import User from "../User/User";
import {loadUsers} from '../../services/api/Users'

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        loadUsers((data) => this.setState({users: data}))
    }

    render() {
        return (
            <div className="user-container">
                {this.state.users.map((user, i) =>
                    <User key={user.id} data={user} viewMode='card'/>
                )}
            </div>
        )
    }
}