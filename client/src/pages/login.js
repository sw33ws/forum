import { useMutation, useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../utils/auth.js';
import { LOGIN } from '../utils/mutation.js';

const Login = () => {
  const [login] = useMutation

  return (
    <div>
        <h1>hi Login</h1>
    </div>
  )
}

export default Login