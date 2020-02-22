export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addNewQuestion (question) {
    return {
        type: ADD_NEW_QUESTION,
        question,
    }

}

export function saveQuestionAnswer (userID, questionID, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        userID,
        questionID,
        answer
    }

}

