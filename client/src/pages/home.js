import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from '../utils/queries';

import GetPosts from '../components/GetPosts';

const Home = () => {

  return (
    <div>
      <GetPosts />
    </div>
  )
}

export default Home