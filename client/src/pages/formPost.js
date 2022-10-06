import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_POST } from '../utils/mutation.js';

const Post = () => {
  const [ postInfo ] = useMutation(ADD_POST);
  const [ postForm, setPostForm] = useState({ title: '', message: ''});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await postInfo ({
      variables: { title: postForm.title, message: postForm.message }
    })
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
        <form id='contactInfoForm' onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" name='title' onChange={handleChange} maxLength="100"></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" name='message' onChange={handleChange} maxLength="500"></textarea>
            </div>

            <button type="submit" className="btn btn-primary"><span id='submitButton'>Submit</span></button>
            </form>
    </div>
  )
}

export default Post;