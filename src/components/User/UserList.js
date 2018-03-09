import React from 'react'
import './style.css'
import User from "./User";
import {checkAndLoadAllUsers} from '../../AC'
import {connect} from 'react-redux'
import Loading from "../Loading/Loading";

class UserList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {checkAndLoadAllUsers } = this.props
        checkAndLoadAllUsers()
    }


    render() {
        if (this.props.loading) {
            return <Loading/>
        }
        if (!this.props.items || this.props.items.length == 0) {
            return <h2>No users</h2>
        } else {
            return (
                this.props.items.toArray().map((user, i) =>
                    <User key={user.id} data={user} viewMode='card'/>
                )
            )
        }
    }
}

const mapStateToProps = (state) => ({
    items: state.users.items,
    loading: state.users.loading,
    router: state.router
})

export default connect(mapStateToProps, { checkAndLoadAllUsers }, null, { pure: true })(UserList)