import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { ListPost } from '../store/list-store'

function Card({post}) {

const{deletePost}=useContext(ListPost)

  return (
    <div id='card'>
        <h1>{post.title}
          <span className='delete' onClick={()=>{deletePost(post.id)}}><FaDeleteLeft /></span>
          </h1>
        <p className='post-content'>{post.body}</p>
        {post.tags.map((tag)=>(<span className='tags' key={tag}>{tag}</span>))}
    </div>
  )
}

export default Card