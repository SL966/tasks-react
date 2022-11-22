export type InitialStateType = {
    isLoading: boolean
}

const initState: InitialStateType = {
    isLoading: false
}

export type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState,
                               action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isLoading
}) as const