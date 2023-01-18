import React, {useEffect, useState} from 'react'
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from '../utils/queries';

import '../styles/getPost.css';

function GetPosts() {

    const {error, loading, data} = useQuery(GET_POSTS);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (data) {
            setPosts(data.posts)
        }
    }, [data])
    console.log(data)
    return(
        <div class='postBody'>
            {posts.map((val) => {
                return <div class='post'> <h1 class='postTitle'>{val.title}</h1> <p class='postText'>{val.message}</p></div>
            })}
        </div>
    )
}

export default GetPosts;