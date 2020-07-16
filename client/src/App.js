import React from 'react';
import './App.css';
import IssuesTable from './components/IssuesTable';
import { AddIssue } from './components/AddIssue';
import { GlobalProvider } from './context/GlobalState';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <main>
      <h1><strong>Issues list</strong></h1>
      <GlobalProvider>
        <AddIssue />
        <IssuesTable />
      </GlobalProvider>
      <ToastContainer />
    </main >
  );
}

export default App;
