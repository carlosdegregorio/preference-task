import React from 'react';
import './App.css';
import IssuesTable from './components/IssuesTable';
import { AddIssue } from './components/AddIssue';
import { GlobalProvider } from './context/GlobalState';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <main>

      <h1>
        <svg width=".75em" height=".75em" viewBox="0 0 16 16" className="bi bi-exclamation-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
        <strong> Issues list</strong>
      </h1>
      <GlobalProvider>
        <AddIssue />
        <IssuesTable />
      </GlobalProvider>
      <ToastContainer />
    </main >
  );
}

export default App;
