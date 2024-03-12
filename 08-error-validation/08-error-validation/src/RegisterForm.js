import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterForm() {

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameValidation = () => {
    if (userName.length < 4 || userName.length > 10) {
      return "Username must be 4 to 10 characters long."
    }
  }

  let passwordConditions = ["!", "@", "#", "$", "%", "^", "&", "*"]
  const hasDigit = /[0-9]/.test(password);
  const hasAlphabet = /[a-zA-Z]/.test(password);

  const passwordValidation = () => {
    if (!passwordConditions.some(e => password.includes(e))) {
      return "Password must have at least one special character"
    } else if (!hasDigit) {
      return "Password must have at least one digit"
    } else if (!hasAlphabet) {
      return "Password must have at least one alphabet"
    }
  }

  return (
    <React.Fragment>
      <div className='container'>
        <label className='mt-3'>Username:</label>
        <input type="text"
          name="username"
          value={userName}
          onChange={(e) => { setUsername(e.target.value) }} />
        <span class="error">{usernameValidation()}</span>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email"
        className='mt-3'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} />
        <span class="error">{
          (!email.includes("@") ? "Email Address must contain an '@' character" : "")}</span>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password"
        className='mt-3'
        value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <span className="ms-3" class="error">{passwordValidation()}</span>
      </div>
    </React.Fragment>
  )
}