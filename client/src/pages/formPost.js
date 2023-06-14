import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { ADD_POST } from '../utils/mutation.js';

import '../styles/formPost.css';

const Post = () => {
  const [ postInfo ] = useMutation(ADD_POST);
  const [ postForm, setPostForm] = useState({ title: '', message: ''});

  const [loggedIn, setLoggedIn] = useState(false)
    const token = localStorage.getItem('id_token')

    useEffect(() => {
        if(token){
            setLoggedIn(true)
        } else if(!token) {
            return
        }
    }, [ loggedIn, token ])

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (loggedIn) {
      await postInfo ({
        variables: { title: postForm.title, message: postForm.message }
      })
    }
    else {
      alert('please login')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostForm({
      ...postForm,
      [name]: value,
    })
  }

  return (

    <div>
    {
      loggedIn ?
      <div class='formPostBody'>
        <form id='contactInfoForm' onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" name='title' onChange={handleChange} maxLength="100"></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" name='message' onChange={handleChange} maxLength="500"></textarea>
            </div>

            <button type="submit" className="btn"><span id='submitButton'>Submit</span></button>
            </form>
    </div>:
      <><div className='form-signin'><h1 className='form-signin-text'>Please Sign in too make Posts</h1></div></>
    }
    </div>

    // <div class='formPostBody'>
    //     <form id='contactInfoForm' onSubmit={handleFormSubmit}>
    //         <div className="mb-3">
    //             <label className="form-label">Title</label>
    //             <input type="text" className="form-control" name='title' onChange={handleChange} maxLength="100"></input>
    //         </div>

    //         <div className="mb-3">
    //             <label className="form-label">Message</label>
    //             <textarea className="form-control" rows="3" name='message' onChange={handleChange} maxLength="500"></textarea>
    //         </div>

    //         <button type="submit" className="btn"><span id='submitButton'>Submit</span></button>
    //         </form>
    // </div>
  )
}

export default Post;