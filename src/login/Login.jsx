
import React, { useState } from 'react'
import MainLayout from '../mainLayout/MainLayout'
import './login.css'


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login() {

    const [username, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        console.log('here');
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        // setToken(token);
    }
    return (

        <MainLayout>

            <div className="login-form">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} className="btn btn-dark">Submit</button>
                </form>
            </div>
        </MainLayout >
    )
}
