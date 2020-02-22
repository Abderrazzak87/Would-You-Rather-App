export const SIGN_IN_USER = 'SIGN_IN_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export function signInUser(id) {
    return {
        type: SIGN_IN_USER,
        id,
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER,
        id: null
    }
}