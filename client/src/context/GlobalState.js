import React, { createContext, useReducer, useEffect, useState } from 'react'
import io from 'socket.io-client';
const ENDPOINT = "localhost:4001";

const initialState = {issues: []};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [initialState, setIssues] = useState([]);
    const socket = io(ENDPOINT);

    useEffect(() => {
        socket.on('GET_ISSUES', res => setIssues(res.issues));
    }, [initialState])

    console.log(initialState)

    const deleteIssue = (id) => {
        socket.emit("DELETE_ISSUE", id);
    }

    const addIssue = (issue) => {
        socket.emit("CREATE_ISSUE", issue);
        
    }
    const updateIssue = (issue) => {
        socket.emit("UPDATE_ISSUE", issue);
    }

    return (
        <GlobalContext.Provider value={{ issues: initialState, deleteIssue, addIssue, updateIssue }}>
            {children}
        </GlobalContext.Provider>
    );
};