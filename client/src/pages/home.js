import React from 'react'
// import { useQuery, gql } from "@apollo/client";
// import { GET_POSTS } from '../utils/queries';

import '../styles/home.css';
import GetPosts from '../components/GetPosts';

const Home = () => {

  return (
    <div class='homeBody'>
      <GetPosts />
    </div>
  )
}

export default Home