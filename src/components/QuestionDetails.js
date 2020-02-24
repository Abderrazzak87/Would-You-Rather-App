import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { FaCheckSquareO } from 'react-icons/lib/fa/'
import ProgressBar from './ProgressBar'
import NavigationBar from './NavigationBar'
import { formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Redirect, withRouter } from 'react-router-dom'

class QuestionDetails extends Component {

    state = {
        selectedOption: ''
    }

    selectOption = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const { question_id, dispatch } = this.props
        const answer = this.state.selectedOption
        dispatch(handleSaveQuestionAnswer(question_id, answer))

    }



    render() {

        const { question } = this.props

        if (!question)   {
            console.log('question does not exists')
            return <Redirect to="/notfound" />
        }

        const { optionOne, optionTwo, isOneAnswered, isTwoAnswered, authorName, authorAvatar, timestamp } = this.props
        const optionOneVotesNumber = question.optionOne.votes.length
        const optionTwoVotesNumber = question.optionTwo.votes.length
        const totalVotes = optionOneVotesNumber + optionTwoVotesNumber
        const optionOnePercentage = (optionOneVotesNumber / totalVotes * 100).toFixed(0)
        const optionTwoPercentage = (optionTwoVotesNumber / totalVotes * 100).toFixed(0)

        return (
            <Fragment>
                <NavigationBar />
                <div>
                    <div className={(isOneAnswered || isTwoAnswered) ? "card resut" : "card"}>
                        <div className="additional">
                            <div className="user-card">
                                <div className="name center">
                                    {(isOneAnswered || isTwoAnswered) ? `asked by ${authorName}` : `${authorName} asks`}
                                </div>
                                <div className="avat center">
                                    <img src={authorAvatar} alt={`Avatar of ${authorName}`} className="avatarcard" />
                                </div>
                                <div className="timestamp center">
                                    {timestamp}
                                </div>

                            </div>
                        </div>
                        {

                            (isOneAnswered || isTwoAnswered)
                                ? (
                                    <div className="general">
                                        <h1>Results</h1>
                                        <div className="form-body no-bottom-round">
                                        <ul className="no-padding no-margin">
                                                <li className="fix-answered full-width">
                                                    <span className='input_radio"'>{optionOne}</span>
                                                    {isOneAnswered ? <FaCheckSquareO className='padding-left answered' /> : null}
                                                    <ProgressBar percentage={optionOnePercentage} />
                                                    <span className='vote-result center'>{`${optionOneVotesNumber} out of ${totalVotes} votes`}</span>

                                                </li>
                                                <li className="fix-answered full-width">
                                                    <span className='input_radio"'>{optionTwo}</span>
                                                    {isTwoAnswered ? <FaCheckSquareO className='padding-left answered' /> : null}
                                                    <ProgressBar percentage={optionTwoPercentage}/>
                                                    <span className='vote-result center'>{`${optionTwoVotesNumber} out of ${totalVotes} votes`}</span>
                                                </li>

                                        </ul>
                                        </div>
                                    </div>





                                )
                                : (

                                    <div className="general">
                                        <h1>Would You Rather</h1>
                                        <form className="form-body no-bottom-round" onSubmit={this.handleSubmit}>
                                            <div className="radio_container-div">
                                                <label className="radio_container">
                                                    <span className="input_radio">{optionOne}</span>
                                                    <input type="radio" name="select_option" value="optionOne" onClick={this.selectOption} />
                                                </label>
                                                <label className="radio_container">
                                                    <span className="input_radio">{optionTwo} </span>
                                                    <input type="radio" name="select_option" value="optionTwo" onClick={this.selectOption} />
                                                </label>
                                                <label className="radio_container">
                                                    <input className="btn center" type="submit" value="Submit" />
                                                </label>
                                            </div>
                                        </form>
                                    </div>

                                )

                        }
                    </div>

                </div>

            </Fragment>

        )
    }

}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { question_id } = props.match.params

    const question = questions[question_id]
    if (!question)
        return question 

    const authorAvatar = users[question.author].avatarURL
    const authorName = users[question.author].name
    const timestamp = formatDate(question.timestamp)
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const isOneAnswered = question.optionOne.votes.includes(authedUser)
    const isTwoAnswered = question.optionTwo.votes.includes(authedUser)

    return {
        question_id,
        question,
        authorAvatar,
        authorName,
        timestamp,
        optionOne,
        optionTwo,
        isOneAnswered,
        isTwoAnswered,
        users,
        questions,
        authedUser,

    }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails))