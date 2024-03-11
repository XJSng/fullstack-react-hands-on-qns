import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUserAndPass = () => {
        if (username == "rotiprataguy" && password == "rotiprata123") {
            alert("Login success")
        } else {
            alert("Invalid login")
        }
    }

    return <>
        <h1>Login Form</h1>
                    <div>
                <label className='me-1 mt-3'>Username:</label>
                <input type="text" className="form-control-sm"
                    value={username}
                    onChange={(e) => {
                        // all `onChange` event handlers take one parameter
                        // - the event. The event contains every info about the change
                        // like which key is pressed, which form control etc. etc.
                        setUsername(() => e.target.value)
                    }} />
            </div>
            <div>
                <label className='me-1 mt-3'>Password:</label>
                <input type="text" className="form-control-sm"
                    value={password}
                    onChange={(e) => {
                        setPassword(() => e.target.value)
                    }} />
            </div>
            <div>
                <button className="btn mt-3 btn-primary" onClick={handleUserAndPass}>Submit</button>
            </div>
    
    </>
}