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
import NotFoundPage from './NotFoundPage'
import ProtectedRoute from './ProtectedRoute'


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
            <Route path="/" exact component={Login} />
            <ProtectedRoute path='/dashboard' exact component={Dashboard} />
            <ProtectedRoute path='/questions/:question_id' component={QuestionDetails} />
            <ProtectedRoute path='/add' exact component={NewQuestion} />
            <ProtectedRoute path='/leaderboard' exact component={Leaderboard} />
            <Route path="/notfound" component={NotFoundPage} />
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