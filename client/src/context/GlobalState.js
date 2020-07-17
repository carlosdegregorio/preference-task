import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import io from 'socket.io-client';

// Back-edn address
const ENDPOINT = "localhost:5000";
const socket = io(ENDPOINT);

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        socket.on('READ_ISSUES', res => {
            try {
                if (res.error) throw res.error;
                else setIssues(res.correct.issues);
            } catch (err) {
                console.log(err);
                toast.error(err.message);
            }
        });
        socket.on("DELETE_OK", res => toast.success(res));
        socket.on("UPDATE_OK", res => toast.success(res));
        socket.on("CREATE_OK", res => toast.success(res));
    }, [])

    const deleteIssue = async (id) => {
        try {
            if (!socket.connected) throw new Error("There is no connection");
            socket.emit('DELETE_ISSUE', id);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const addIssue = async (issue) => {
        try {
            if (!socket.connected) throw new Error("There is no connection");
            await socket.emit("CREATE_ISSUE", issue);
        } catch (err) {
            console.log(err);
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
        <GlobalContext.Provider value={{ issues, deleteIssue, addIssue, updateIssue }}>
            {children}
        </GlobalContext.Provider>
    );
};