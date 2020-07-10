const initialState = {
    Pictures: ''
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'GET_POINTS_TABLE':
            return {
                ...state,
                Pictures: action.payload
            }
        default:
            return state;
    }
}