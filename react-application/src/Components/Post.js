import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    const {id}=useParams();
    return (
        <div>
            <h2>Post is {id}</h2>
        </div>
    )
}

export default Post
