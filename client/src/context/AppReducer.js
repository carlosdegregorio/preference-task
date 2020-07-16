

export default (state, action) => {
    switch (action.type) {
        case 'CREATE_ISSUE':
            return {
                ...state,
                issues: [action.payload, ...state.issues]
            }
        case 'READ_ISSUES':
            return {
                ...state,
                loading: false,
                issues: action.payload
            }
        case 'UPDATE_ISSUE':
            return {
                ...state,
                issues: state.issues[state.issues.indexOf(action.payload._id)] = action.payload
            }
        case 'DELETE_ISSUE':
            return {
                ...state,
                issues: state.issues.filter(issue => issue.id !== action.payload)
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}