import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signOutUser } from '../actions/authedUser'

class Session extends Component {

    handleLogout = (e) => {
        e.preventDefault()
        const { dispatch, history } = this.props
        dispatch(signOutUser())
        history.push('/')
    }

    render() {

        const { authedUser, name, avatarUrl} = this.props

        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li onClick={this.handleLogout} className='nav-li'>
                        Logout
                    </li>
                    <li className='user-name nav-li'>
                        <img 
                                    src={avatarUrl}
                                    alt={`Avatar of ${authedUser}`}
                                    className='avatar'/>
                    </li>
                    <li className='padding-zero user-name nav-li'>
                        {name}
                    </li>
                </ul>
            </Fragment>
        )
    }

}

function mapStateToStore( {authedUser, users} ) {
    const name = users[authedUser].name
    const avatarUrl = users[authedUser].avatarURL

    return {
        authedUser,
        name,
        avatarUrl,
    }

}

export default withRouter(connect(mapStateToStore)(Session))