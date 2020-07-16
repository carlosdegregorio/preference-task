import React from 'react';
import './App.css';
import IssuesTable from './components/IssuesTable';
import { AddIssue } from './components/AddIssue';
import { GlobalProvider } from './context/GlobalState';


function App() {

  return (
    <main className="App">
      <h1><strong>Issues list</strong></h1>
      <GlobalProvider>
        <AddIssue />
        <IssuesTable />
      </GlobalProvider>
    </main >
  );
}

export default App;
