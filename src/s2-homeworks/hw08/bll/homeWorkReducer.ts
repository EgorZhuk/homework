import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload==='up') state = state.sort((a,b)=>a.name.localeCompare(b.name))
            else state = state.sort((a,b)=> b.name.localeCompare(a.name))

            return state // need to fix
        }
        case 'check': {
            state=state
              .sort((a,b)=>a.name.localeCompare(b.name))
              .filter(a=>a.age>=action.payload)

            return state // need to fix
        }
        default:
            return state
    }
}
