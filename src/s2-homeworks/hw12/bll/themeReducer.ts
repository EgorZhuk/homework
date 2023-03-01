const initState = {
    themeId: 1,
}
type ChangeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}
type ActionType = ReturnType<typeof changeThemeId>
export type StateType = typeof initState

export const themeReducer = (state = initState, action: ActionType ): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
