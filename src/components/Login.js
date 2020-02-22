import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../actions/authedUser'

class Login extends Component {

    state = {
        userId: ''
    }

    handleChange = (e) => {
        this.setState({ userId: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { userId } = this.state

        if (userId !== '') {

            dispatch(signInUser(userId))
        }

        else
            alert('Please selcet a user')

    }


    render() {

        const { users, authedUser } = this.props
        const { userId } = this.state
        const name = (userId !== '') ? users[userId].name : ''
        const avatarURL = (userId !== '') ? users[userId].avatarURL : 'http://www.masscue.org/wp-content/uploads/2017/03/male-no-image.jpg'
        console.log('Hello ', authedUser)


        return (
            
            <div className="container-login100">
                <div className="wrap-login100 p-t-85 p-b-20">
                    <form className='login100-form' onSubmit={this.handleSubmit}>
                        <span className="login100-form-title p-b-70">
                            Welcom to the Would You Rather App
					    </span>
                        <span className="login100-form-avatar">
                            <img src={avatarURL}
                                alt={`Avatar of ${name}`}
                            />
                        </span>
                        <div className="wrap-input100 validate-input m-t-85 m-b-35">
                            <select className="wrap-input100 validate-input m-t-85 m-b-35"
                                value={userId}
                                onChange={event => this.handleChange(event)}>
                                <option value='' disabled> Please select a user</option>
                                {
                                    Object.keys(users).map(user => (
                                        <option key={user} value={user}>
                                            {users[user].name}
                                        </option>

                                    ))
                                }
                            </select>
                        </div>

                        <button className='btn' type='submit' disabled={userId === ''}>
                            Login
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser,
    }

}

export default connect(mapStateToProps)(Login)