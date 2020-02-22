import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'
import PageError from './PageError'


class App extends Component {

  componentDidMount() {

    this.props.dispatch(handleInitialData())

  }
  render() {

    return (

      <Router>
        <Fragment>
          <LoadingBar />
         
          <Switch>
            {
              this.props.authedUser === null
                ? <Route path='/' exact component={Login} />
                : <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:question_id' component={QuestionDetails} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                </Fragment>
            }
             <Route component={PageError} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)