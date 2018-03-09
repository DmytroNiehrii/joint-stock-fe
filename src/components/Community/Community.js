import React, {Component} from 'react'
import './style.css'
import {translation} from '../../services/transtation'
import {timestampToDate} from '../../utils/dateFormat'
import {NavLink} from 'react-router-dom'
import {loadCommunity} from '../../AC'
import {connect} from 'react-redux'
import Loading from '../Loading/Loading'
import Description from '../Description/Description'

class Community extends Component {
    render() {
        const {viewMode} = this.props

        switch(viewMode) {
            case 'row':
                return this.renderRowView()
                break
            default:
                return this.renderCardView()
        }
    }

    renderRowView() {
        const {id, createdDate, modifiedDate, name, description, createdBy} = this.props.data
        const l10 = translation()
        return (
            <div className='communityRowContainer'>
                <NavLink className='title-xl bold clickable' to={'/communityCard'} onClick={this.handleCommunityClick}>{name}</NavLink>
                <div className='secondary-text'>{l10.created} {timestampToDate(createdDate)}</div>
                <div className='secondary-text'>{l10.modified} {timestampToDate(modifiedDate)}</div>
            </div>
        )
    }

    renderCardView() {
        const {loading, loaded} = this.props.selectedCommunity
        if (loading) {
            return (
                <div className='communityCardContainer'>
                    <Loading/>
                </div>
            )
        }
        const {id, createdDate, modifiedDate, name, description, createdBy} = this.props.selectedCommunity.data
        const l10 = translation()
        return (
            <div className='communityCardContainer'>
                <div className='title-xl bold'>{name}</div>
                <div className='secondary-text'>{l10.created} {timestampToDate(createdDate)}</div>
                <div className='secondary-text'>{l10.modified} {timestampToDate(modifiedDate)}</div>
                <Description text={description}/>
            </div>
        )

    }

    handleCommunityClick = () => {
        this.props.loadCommunity(this.props.data.id)
    }
}

const mapStateToProps = (state) => ({
    selectedCommunity: state.selectedCommunity,
    router: state.router
})

export default connect(mapStateToProps, { loadCommunity }, null, { pure: true })(Community)