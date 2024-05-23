import React, { useContext } from 'react'
import Card from './Card'
import { ListPost } from '../store/list-store'

const PostList=()=>{
  const{listPost} = useContext(ListPost);

  return (
    <>
    {listPost.length === 0 &&
    <div className='empty-container'>
      <h1 className='empty-message'>No recent posts!</h1>
    </div> }
    {listPost.map((post)=>(
      <Card key={post.id} post={post}/>
      ))}
    </>
  )
}

export default PostList