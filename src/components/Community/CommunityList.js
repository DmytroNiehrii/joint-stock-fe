import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Community from "./Community"
import {checkAndLoadAllCommunities} from '../../AC'
import {connect} from 'react-redux'
import Loading from '../Loading/Loading'
import {filtratedCommunitiesSelector} from '../../selectors'

class CommunityList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {checkAndLoadAllCommunities } = this.props
        checkAndLoadAllCommunities()
    }

    render() {
        if (this.props.loading) {
            return <Loading/>
        }
        if (!this.props.items || this.props.items.length == 0) {
            return <h2>No community</h2>
        } else {
            return (
                this.props.items.toArray().map((item, i) =>
                    <Community key={item.id} data={item} viewMode='row'/>
                )
            )
        }
    }
}

CommunityList.defaultProps = {
    items: []
}

CommunityList.propTypes = {
    items: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    items: filtratedCommunitiesSelector(state),
    loading: state.communities.loading,
    router: state.router
})

export default connect(mapStateToProps, { checkAndLoadAllCommunities }, null, { pure: true })(CommunityList)