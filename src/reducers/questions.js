import { RECEIVE_QUESTIONS, ADD_NEW_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_NEW_QUESTION: {
            return {
                ...state,
                [action.question.id]: action.question
            }

        }
        case SAVE_QUESTION_ANSWER: {
            return {
                ...state,
                [action.questionID]: {
                    ...state[action.questionID],
                    [action.answer]: {
                        ...state[action.questionID][action.answer],
                        votes: state[action.questionID][action.answer].votes.concat([action.userID])
                    }
                }
            }

        }
        default:
            return state
    }
}