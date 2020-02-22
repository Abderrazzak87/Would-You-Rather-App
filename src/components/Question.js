import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Question extends Component {

    render() {

        const { question } = this.props

        if (question === null ) {
            return <p>This Question doesn't exist</p>
        }


        const { id, authorName, authorAvatar, timestamp} = this.props
        const { optionOne, optionTwo } = question


        return (
            <Link to={`/questions/${id}`} className='form margin poll-form'>

                <div className="card">
                    <div className="additional">
                        <div className="user-card">
                            <div className="name center">
                                {`${authorName} asks`}
                            </div>
                            <div className="avat center">
                                <img src={authorAvatar} alt={`Avatar of ${authorName}`} className="avatarcard" />
                            </div>
                            <div className="timestamp center">
                                {timestamp}
                            </div>

                        </div>
                    </div>
                    <div className="general">
                        <h1>Would You Rather</h1>
                        <form className="form-body no-bottom-round" onSubmit={this.handleSubmit}>
                            <div className="radio_container-div">
                                <label className="radio_container">
                                    <span className="input_radio">{optionOne.text}</span>
                                </label>
                                <label className="radio_container">
                                    <span className="input_radio">{optionTwo.text} </span>
                                </label>
                                <label className="radio_container">
                                    <input className="btn center" type="submit" value="View Question" />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToPropos({authedUser, questions, users}, {id}) {
    const question = questions[id]
    if (question === null ) 
        return question

    const authorAvatar = users[question.author].avatarURL
    const authorName = users[question.author].name
    const timestamp = formatDate(question.timestamp)

    return {
        authedUser,
        question,
        id,
        authorAvatar,
        authorName,
        timestamp,
    }

}

export default connect(mapStateToPropos)(Question)