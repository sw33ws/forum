import React, {useEffect, useState} from 'react'
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from '../utils/queries';

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
        <div>
            {posts.map((val) => {
                return <div> <h1>{val.title}</h1> {val.message} </div>
            })}
            {/* {posts.map((val) => {
                return <h2> {val.message}</h2>
            })} */}
        </div>
    )
}

export default GetPosts;