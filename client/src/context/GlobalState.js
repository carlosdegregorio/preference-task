import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import io from 'socket.io-client';
const ENDPOINT = "localhost:5000";
const socket = io(ENDPOINT);

const initialState = {
    issues: [],
    error: null,
    loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    socket.on('READ_ISSUES', res => {
        try {
            if (res.error) throw res.error;
            else {
                dispatch({
                    type: 'READ_ISSUES',
                    payload: res.correct.issues
                });
            }
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
            });
        }
    });

    const deleteIssue = async (id) => {
        try {
            await socket.emit('DELETE_ISSUE', id);
            
            dispatch({
                type: 'DELETE_ISSUE',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
            });
        }
    }

    const addIssue = async (issue) => {
        try {
            await socket.emit("CREATE_ISSUE", issue);
            
            dispatch({
                type: 'CREATE_ISSUE',
                payload: issue
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
            });
        }
    }

    const updateIssue = async (issue) => {
        try {
            await socket.emit("UPDATE_ISSUE", issue);
            dispatch({
                type: 'UPDATE_ISSUE',
                payload: issue
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
            });
        }
    }

    return (
        <GlobalContext.Provider value={{ issues: state.issues, deleteIssue, addIssue, updateIssue }}>
            {children}
        </GlobalContext.Provider>
    );
};