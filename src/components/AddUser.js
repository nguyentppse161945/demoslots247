import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';
const AddUser = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    return (
        <div className='container card border-primary'>
            <Form className='mt-3'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Name"
                        value={name} onChange={(event) => {
                            setName(event.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(event) => {
                        setUsername(event.target.value)
                    }} />
                </Form.Group>
                <Button variant='primary' className='mb-3' style={{ width: '100%' }} onClick={() => {
                    dispatch(addUser({ id: 0, name: name, username: username }))
                }}>ADD USER</Button>
            </Form>
        </div>
    );
};

export default AddUser;
