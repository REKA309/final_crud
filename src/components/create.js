import React from "react";
import {useState} from 'react'
import {  Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";
export default function Create()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
       axios.post('https://6420631682bea25f6d002332.mockapi.io/user',{
        firstName,lastName,checkbox
       })
    }
    return(<div className="createParent">
        <h1>Create User</h1>
        <div className="card">
            <div className="card-body">
            <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
        </Form.Field>
        <button type="button" onClick={postData} className="btn btn-primary">Submit</button>
    </Form>
            </div>
        </div>
    </div>
    )
}