import { RECEIVE_USERS, ADD_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users'

export default function users(state = {}, action) {

    switch (action.type) {
        case RECEIVE_USERS: {
            return {
                ...state,
                ...action.users
            }
        }
        case ADD_USER_QUESTION: {
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    questions: state[action.userID].questions.concat([action.questionID])
                }
            }
        }
        case ADD_USER_QUESTION: {
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    questions: state[action.userID].questions.concat([action.questionID])
                }
            }
        }
        case SAVE_USER_ANSWER: {
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    answers: { 
                        ...state[action.userID].answers,
                        [action.questionID]: action.answer
                    }
                }
            }
        }
        default:
            return state
    }

}