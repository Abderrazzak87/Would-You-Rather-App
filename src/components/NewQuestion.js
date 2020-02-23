import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar'
import { handleAddNewQuestion } from '../actions/shared'


class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo} = this.state
        const { dispatch } = this.props
        dispatch(handleAddNewQuestion(optionOne, optionTwo))
        this.setState(() => ({
            toHome: true
        }))
    }

    render() {

        const { toHome } = this.state
        
        if ( toHome ) {
            return <Redirect to='/'/>        

        }


        return (
            <Fragment>
                <NavigationBar/>
                <div className="card new">
                    <h1>Create New Question</h1>
                    <h4>Would you rather ...</h4>

                    <form onSubmit={this.handleSubmit} id='newQuestion' className='form-body'>
                        <div className='input-text-container'>
                            <input
                                className='input-text'
                                type="text"
                                name="optionOne"
                                placeholder='Option One'
                                required
                                spellCheck="false"
                                onChange={this.handleOptionOne}>
                            </input>
                            <div className='or-seperator'>
                                <hr/>
                                    <p className='inline-p'>OR</p>
                                <hr/> 
                             </div>

                            <input
                                className='input-text'
                                type="text"
                                name="optionTwo"
                                placeholder='Option Two'
                                required
                                spellCheck="false"
                                onChange={this.handleOptionTwo}>
                            </input>
                        </div>
                        <button className='btn center'>Submit</button>
                    
                    </form>
                </div>
            </Fragment>

        )
    }
}

function mapStateToPropos({autedUser, questions}) {
    return {
        autedUser,
        questions,
    }

}
export default connect(mapStateToPropos)(NewQuestion)
