const initialState = {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TEST':
            return {...state, test: 'test'}
        default:
            return state
    }
}

export default reducer

