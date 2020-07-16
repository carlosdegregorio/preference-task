import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import { toast } from 'react-toastify';
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
            toast.error(err.message);
        }
    });

    const deleteIssue = async (id) => {
        try {
            if (!socket.connected) throw new Error("There is no connection");
            else socket.emit('DELETE_ISSUE', id);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const addIssue = async (issue) => {
        try {
            console.log(socket.connected);
            if (!socket.connected) throw new Error("There is no connection");
            else socket.emit("CREATE_ISSUE", issue)
        } catch (err) {
            toast.error(err.message);
        }
    }

    const updateIssue = async (issue) => {
        try {
            
            if (!socket.connected) throw new Error("There is no connection");
            else socket.emit("UPDATE_ISSUE", issue);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <GlobalContext.Provider value={{ issues: state.issues, deleteIssue, addIssue, updateIssue }}>
            {children}
        </GlobalContext.Provider>
    );
};