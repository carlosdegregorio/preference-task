

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_ISSUE':
            return {
                ...state,
                issues: state.issues.filter(issue => issue.id !== action.payload)
            }
        case 'ADD_ISSUE':
            return {
                ...state,
                issues: [action.payload, ...state.issues]
            }
        case 'UPDATE_ISSUE':
            return {
                ...state,
                issues: [action.payload, ...state.issues]
            }
        case 'GET_ISSUES':
            return {
                ...state,
                issues: action.payload
            }
        default: return state;
    }
}