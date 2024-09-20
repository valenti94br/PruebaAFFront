import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from './AppReducer';


const initialState = {
    reports: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getReports = async () => {
        const res = await axios.get("http://localhost:8080/reports/getAllReports");
        dispatch({
            type: "GET_REPORTS",
            payload: res.data,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                reports: state.reports,
                getReports,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};