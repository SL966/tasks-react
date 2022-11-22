
export type InitialStateType = typeof initialState

let initialState = {}

export const homeWorkReducer = (state = initialState, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}