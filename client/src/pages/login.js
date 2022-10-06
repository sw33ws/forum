import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../utils/auth.js';
import { LOGIN } from '../utils/mutation.js';

const Login = () => {
  const [login] = useMutation(LOGIN);
  const [ loginForm, setLoginForm ] = useState({ email: '', password: ''})

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userMutation = await login ({
        variables: { email: loginForm.email, password: loginForm.password},
      })
      const token = userMutation.data.login.token;
      Auth.login(token);
    } catch (error) {
      alert('Wrong email or password')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>

        <div>
          <label className="form-label">Email</label>
          <input type="email" name= 'email' placeholder='email' onChange={handleChange} className="form-control"></input>
        </div>

        <div>
          <label className="form-label">Password</label>
          <input type="password" name= 'password' placeholder='password' onChange={handleChange} className="form-control"></input>
        </div>

        <button type="submit" className="btn btn-primary"><span>Submit</span></button>
      </form>
    </div>
  )
}

export default Login