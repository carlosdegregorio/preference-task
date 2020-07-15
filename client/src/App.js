import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css'
import IssuesTable from './components/IssuesTable';

function App() {

  let issues = [
    { "id":"0", "title": "Issue 1", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "id":"1", "title": "Issue 2", "description": "In as name to here them deny wise this.", "status": "Todo", "severity": "Low" },
    { "id":"2", "title": "Issue 3", "description": "Up unpacked friendly ecstatic so possible humoured do.", "status": "Todo", "severity": "Medium" },
    { "id":"3", "title": "Issue 4", "description": "He as compliment unreserved projecting.", "status": "Done", "severity": "Low" },
    { "id":"4", "title": "Issue 5", "description": "Now seven world think timed while her.", "status": "Done", "severity": "Low" },
    { "id":"5", "title": "Issue 6", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "High" },
    { "id":"6", "title": "Issue 7", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "id":"7", "title": "Issue 8", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Done", "severity": "Medium" },
    { "id":"8", "title": "Issue 9", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" },
    { "id":"9", "title": "Issue 10", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" },
    { "id":"10", "title": "Issue 1", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "id":"11", "title": "Issue 2", "description": "In as name to here them deny wise this.", "status": "Todo", "severity": "Low" },
    { "id":"12", "title": "Issue 3", "description": "Up unpacked friendly ecstatic so possible humoured do.", "status": "Todo", "severity": "Medium" },
    { "id":"13", "title": "Issue 4", "description": "He as compliment unreserved projecting.", "status": "Done", "severity": "Low" },
    { "id":"14", "title": "Issue 5", "description": "Now seven world think timed while her.", "status": "Done", "severity": "Low" },
    { "id":"15", "title": "Issue 6", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "High" },
    { "id":"16", "title": "Issue 7", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Todo", "severity": "High" },
    { "id":"17", "title": "Issue 8", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Done", "severity": "Medium" },
    { "id":"18", "title": "Issue 9", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" },
    { "id":"19", "title": "Issue 10", "description": "Subjects to ecstatic children he. Could ye leave up as built match.", "status": "Doing", "severity": "Medium" }
  ];
  return (
    <main className="App">
      <h1><strong>Issues list</strong></h1>
      <section id="issueForm">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Enter title" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option>Todo</option>
                <option>Doing</option>
                <option>Done</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSeverity">
              <Form.Label>Severity</Form.Label>
              <Form.Control as="select">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter a description..."  rows="5"/>
            </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </section>

      <IssuesTable issues={issues} />
    </main >
  );
}

export default App;
