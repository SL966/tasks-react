import {initialPeople, UserType} from './HW8'

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check18', payload: number }


export const homeWorkReducer = (state = initialPeople, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check18': {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}

