import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar'
import Tabs from './Tabs'
import Question from './Question'
import { handleInitialQuestions } from '../actions/shared'

class Dashboard extends Component {

    componentDidMount () {
        const { answeredQuestions, unansweredQuestions, loadingBar } = this.props
        console.log('unansweredQuestions: ', unansweredQuestions)
        console.log('answeredQuestions: ', answeredQuestions)        
        
    }

    render() {

        const { answeredQuestions, unansweredQuestions, loadingBar } = this.props
        console.log(unansweredQuestions)

        return (

            <Fragment>
                <NavigationBar />
                <Tabs>
                     <div label="Unanswred Question">
                        { loadingBar.default
                            ? <p className='loading'>Loading ...</p>
                            : Object.keys(unansweredQuestions).length !== 0
                            ? unansweredQuestions.map((id) => (
                                <Question key={id} id={id} />))
                                : null
                        }
                     </div>
                     <div label="Answred Question">
                        { loadingBar.default
                          ? <p className='loading'>Loading ...</p>
                          : Object.keys(answeredQuestions).length !== 0
                            ? answeredQuestions.map((id) => (
                                <Question key={id} id={id} />))
                            : null
                        }

                    </div>
                </Tabs>
            </Fragment>

        )
    }

}

function mapStateToProps ({ questions, authedUser, users, loadingBar }) {
    const user = users[authedUser]

    const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
            .filter(id => !answeredQuestions.includes(id))
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    return {
        answeredQuestions,
        unansweredQuestions,
        loadingBar,
    }
}

export default connect(mapStateToProps)(Dashboard)