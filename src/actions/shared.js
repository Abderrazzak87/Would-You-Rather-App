import { getInitialUsers, getInitialQuestions, getInitialData, saveQuestion as saveQuestionAPI, saveQuestionAnswer as saveQuestionAnswerAPI } from '../utils/api'
import { receiveUsers, addUserQuestion, saveUserAnswer } from './users'
import { receiveQuestions, addNewQuestion, saveQuestionAnswer } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData() {
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}
export function handleInitialUsers() {

    return (dispatch) => {
        dispatch(showLoading())
        return getInitialUsers()
            .then (users => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }

}

export function handleInitialQuestions() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialQuestions()
        .then (questions => {
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function handleAddNewQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveQuestionAPI({optionOneText, optionTwoText, author})
            .then((question) => {
                dispatch(addNewQuestion(question))
                dispatch(addUserQuestion(authedUser, question.id))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        console.log('Im in the handleSaveQuestionAnswer and the authedUser is', authedUser)
        console.log('Im in the handleSaveQuestionAnswer and the questionid is', qid)
        console.log('Im in the handleSaveQuestionAnswer and the answer is', answer)
        dispatch(showLoading())
        return saveQuestionAnswerAPI({authedUser, qid, answer})
        .then(() => {
            dispatch(saveQuestionAnswer(authedUser, qid, answer))
            dispatch(saveUserAnswer(authedUser, qid, answer))
            dispatch(hideLoading())
        })
    }
}