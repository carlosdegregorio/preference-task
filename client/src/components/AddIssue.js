import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button';

export const AddIssue = () => {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Todo');
    const [severity, setSeverity] = useState('High');
    const [description, setDescription] = useState('');

    const { addIssue } = useContext(GlobalContext);
    const onSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const newIssue = {
                title: title,
                description: description,
                severity: severity,
                status: status
            }
            await addIssue(newIssue);
            setValidated(false);
            setTitle('');
            setSeverity('High');
            setStatus('Todo');
            setDescription('');
        } else
            setValidated(true);
    };
    return (
        <section id="issueForm">
            <Form onSubmit={onSubmit} noValidate validated={validated} >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title..." value={title} onChange={e => setTitle(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">Please provide a valid title</Form.Control.Feedback>
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
                    <Form.Control as="textarea" type="text" placeholder="Enter a description..." rows="5" value={description} onChange={e => setDescription(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">Please provide a valid description</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </section>
    )
}
