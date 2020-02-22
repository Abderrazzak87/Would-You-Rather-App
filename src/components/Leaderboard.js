import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar'

class Leaderboard extends Component {

    render() {

        const { users, data } = this.props

        return(
            <Fragment>
                <NavigationBar />
                <h1 className="h1">Would You Rather Leaderboard</h1>
                <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th className='padding-right'>User</th>
                                <th>Question Created</th>
                                <th>Question Answered</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            {
                                data.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <ul className='nav'>
                                                <li>
                                                    <img
                                                        src={users[user.id].avatarURL}
                                                        alt={`Avatar for ${users[user.id].name}`}
                                                        className='avatar'/>
                                                </li>
                                                <li className='usertab'>{users[user.id].name}</li>
                                            </ul>

                                        </td>
                                        <td>{user.questionCreactedNbr}</td>
                                        <td>{user.questionAnsweredNbr}</td>
                                        <td>{user.questionAnsweredNbr + user.questionCreactedNbr}</td>
                                    </tr>

                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    const data = Object.keys(users).map((id) => {
      return {
        id,
        questionCreactedNbr: users[id].questions.length,
        questionAnsweredNbr: Object.keys(users[id].answers).length
      }  
    }).sort((a, b) => (b.questionCreactedNbr + b.questionAnsweredNbr) - (a.questionCreactedNbr + a.questionAnsweredNbr))

    return {
        users,
        data
    }
}

export default connect(mapStateToProps)(Leaderboard)