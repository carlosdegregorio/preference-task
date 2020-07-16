import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button';

export const AddIssue = () => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Todo');
    const [severity, setSeverity] = useState('High');
    const [description, setDescription] = useState('');

    const { addIssue } = useContext(GlobalContext);
    const onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const newIssue = {
            title: title,
            description: description,
            severity: severity,
            status: status
        }
        addIssue(newIssue);
    };
    return (
        <section id="issueForm">
            <Form onSubmit={onSubmit} noValidate>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Enter title..." value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={status} onChange={e => setStatus(e.target.value)}>
                            <option>Todo</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridSeverity">
                        <Form.Label>Severity</Form.Label>
                        <Form.Control as="select" value={severity} onChange={e => setSeverity(e.target.value)}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter a description..." rows="5" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </section>
    )
}
