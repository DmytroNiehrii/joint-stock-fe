import React, {Component} from 'react'
import './style.css'
import {translation} from '../../services/transtation'
import {timestampToDate} from '../../utils/dateFormat'
import {NavLink} from 'react-router-dom'
import history from '../../history'
import {loadCommunity, saveCommunity} from '../../AC'
import {connect} from 'react-redux'
import Loading from '../Loading/Loading'
import TextNote from '../TextNote/index'
import ApplyPanel from '../ApplyPanel/index'

class Community extends Component {

    componentDidMount() {
        this.setState({data: this.props.selectedCommunity.data})
    }

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
                <NavLink className='title-xl bold clickable' to={'/community/' + id} onClick={this.handleCommunityClick}>{name}</NavLink>

                <div className='secondary-text'>{l10.created} {timestampToDate(createdDate)}</div>
                <div className='secondary-text'>{l10.modified} {timestampToDate(modifiedDate)}</div>
            </div>
        )
    }

    renderCardView() {
        const {loading, loaded} = this.props.selectedCommunity
        if (!loaded && !loading) {
            this.loadCommunityToStore(this.props.match.params.id)
        }
        if (loading) {
            return (
                <div className='communityCardContainer'>
                    <Loading/>
                </div>
            )
        }
        if (loaded) {
            const {id, createdDate, modifiedDate, name, description, createdBy} = this.props.selectedCommunity.data
            const l10 = translation()
            return (
                <div className='communityCardContainer'>
                    <div className='title-xl bold'>{name}</div>
                    <div className='secondary-text'>{l10.created} {timestampToDate(createdDate)}</div>
                    <div className='secondary-text'>{l10.modified} {timestampToDate(modifiedDate)}</div>
                    <TextNote text={this.props.selectedCommunity.data.description} postHandler={this.postHandler} />
                    <ApplyPanel applyHandler={this.save} cancelHandler={this.back}/>
                </div>
            )
        }

        return (
            <div className='communityCardContainer'/>
        )

    }

    back = () => {
        history.goBack()
    }
    save = () => {
        this.props.saveCommunity(Object.assign(
            this.props.selectedCommunity.data,
            {description: '123'}
        ))
    }

    postHandler = () => {
        this.setState({handled: true})
    }

    handleCommunityClick = () => {
        this.loadCommunityToStore(this.props.data.id)
    }

    loadCommunityToStore = (id) => {
        this.props.loadCommunity(id)
    }
}

const mapStateToProps = (state) => ({
    selectedCommunity: state.selectedCommunity,
    router: state.router
})

export default connect(mapStateToProps, { loadCommunity, saveCommunity }, null, { pure: true })(Community)