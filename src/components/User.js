import React from 'react';
// import UsersData from './ListOfUsers';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

const User = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.users.value);  
    const [newUsername,setNewUsername]=useState('');    
    
        return (
            <div>
                <Form>
                    {userList.map((user) => (
                        <Container key={user.id}>
                            <InputGroup>
                                <h1><i className="bi bi-person-circle m-2"></i></h1>
                                <div>
                                    <h6 style={{ width: '100px' }} className=''>{user.name}</h6>
                                    <p>{user.username}</p>
                                </div>
                                <Form.Control
                                    className='m-2'
                                    type='text'
                                    placeholder='Type new username...'
                                    onChange={(e) => setNewUsername(e.target.value)} // Corrected onChange event
                                />
                                <Button
                                    variant='primary'
                                    className='m-2'
                                    onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}
                                >
                                    UPDATE
                                </Button>
                                <Button variant='danger' className='m-2'>
                                    <i
                                        className="bi bi-trash3-fill"
                                        onClick={() => {
                                            dispatch(deleteUser({ id: user.id }));
                                        }}
                                    ></i>
                                </Button>
                            </InputGroup>
                        </Container>
                        ))}
                </Form>
            </div>
        );
};

export default User;
