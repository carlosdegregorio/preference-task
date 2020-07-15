import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './App.css'
import IssueCard from './components/IssueCard';
function App() {

  let issues = [
    { "title": "Issue 1", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "title": "Issue 2", "description": "In as name to here them deny wise this.", "status": "Todo", "severity": "Low" },
    { "title": "Issue 3", "description": "Up unpacked friendly ecstatic so possible humoured do.", "status": "Todo", "severity": "Medium" },
    { "title": "Issue 4", "description": "He as compliment unreserved projecting.", "status": "Done", "severity": "Low" },
    { "title": "Issue 5", "description": "Now seven world think timed while her.", "status": "Done", "severity": "Low" },
    { "title": "Issue 6", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "High" },
    { "title": "Issue 7", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "title": "Issue 8", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Done", "severity": "Medium" },
    { "title": "Issue 9", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" },
    { "title": "Issue 10", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" },
  ];

  return (
    <main className="App">
      <h1><strong>Issues list</strong></h1>
      <section id="issueForm">
        <Form>

        </Form>
      </section>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Severity</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((item, key) => {
              return <IssueCard key={key} title={item.title} description={item.description} status={item.status} severity={item.severity}></IssueCard>;
            })}
          </tbody>
        </Table>
      </section>
    </main>
  );
}

export default App;
