import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SIGN_IN_USER:
            return action.id
        case SIGN_OUT_USER:
            return action.id
        default:
            return state
    }
}