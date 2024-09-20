const reports = (state, action) => {
    switch (action.type) {
        case "GET_REPORTS":
            return {
                ...state,
                reports: action.payload,
            };

        case "DELETE_REPORT":
            return {
                ...state,
                reports: state.reports.filter(report => report._id !== action.payload._id),
            };
        case "ARCHIVE_REPORT":
            return {
                ...state,
                reports: state.reports.map(report =>
                    report._id === action.payload._id ? action.payload : report
                ),
            };

        default:
            return state;
    }
};
export default reports;