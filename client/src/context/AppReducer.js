

export default (state, action) => {
    switch (action.type) {

        case 'READ_ISSUES':
            return {
                ...state,
                loading: false,
                issues: action.payload
            }
        default: return state;
    }
}