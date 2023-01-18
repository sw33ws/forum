import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import Auth from '../utils/auth.js';
import { ADD_USER } from '../utils/mutation.js';

import '../styles/signup.css';

const Signup = () => {
  const [addUser] = useMutation(ADD_USER);
  const [ signupForm, setSignupForm ] = useState({ email: '', password: ''})

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userMutation = await addUser ({
        variables: { username: signupForm.username, email: signupForm.email, password: signupForm.password },
      });
      const token = userMutation.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
      alert("Username/Email is already taken")
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    })
  }

  return (
    <div class='signupBody'>
      <form onSubmit={handleFormSubmit} id='signupForm'>
        
        <div>
          <label className="form-label">Username</label>
          <input type="username" name= 'username' placeholder='username' onChange={handleChange} className="form-control"></input>
        </div>

        <div>
          <label className="form-label">Email</label>
          <input type="email" name= 'email' placeholder='email' onChange={handleChange} className="form-control"></input>
        </div>

        <div>
          <label className="form-label">Password</label>
          <input type="password" name= 'password' placeholder='password' onChange={handleChange} className="form-control"></input>
        </div>

        <button type="submit" className="btn"><span id='submitButton'>Submit</span></button>
      </form>
    </div>
  )
}

export default Signup