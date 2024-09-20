const reports = (state, action) => {
    switch (action.type) {
        case "GET_REPORTS":
            return {
                ...state,
                reports: action.payload,
            };
            default:
                return state;
    }
};
export default reports;