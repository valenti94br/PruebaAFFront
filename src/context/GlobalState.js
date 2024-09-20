import React, { createContext } from 'react';
import axios from 'axios'

const initialState = {
    reports: [],
};

export const GlobalContext = createContext(initialState);