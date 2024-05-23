import React, { useContext, useRef } from 'react'
import { ListPost } from '../store/list-store';

function Post() {
  const{addPost}=useContext(ListPost)

const userIdElement=useRef();
const titleElement=useRef();
const contentElement=useRef();
const tagElement=useRef();

const handleSubmit=(e)=>{
  e.preventDefault();
  const userId=userIdElement.current.value
  const title=titleElement.current.value
  const content=contentElement.current.value
  const tag=tagElement.current.value.split(" ")

  userIdElement.current.value=""
  titleElement.current.value=""
  contentElement.current.value=""
  tagElement.current.value=""

  window.alert(`Posted!`)

  addPost(userId,title,content,tag)
}

  return (
    <form action="" onSubmit={handleSubmit}>
        <div className='user-id'>
          <label htmlFor="userid">Enter your id</label>
          <input type="text" placeholder='User id' id='userid' ref={userIdElement}/>
        </div>
        <div className='title'>
            <label htmlFor="title">Post Heading</label>
            <input type="text" id="title"  placeholder='What do you wanna post' ref={titleElement}/>
        </div>
        <div className='content'>
            <label htmlFor="content ">Post Content</label>
            <textarea placeholder='Describe your mood' id='content' ref={contentElement}></textarea>
        </div>
        <div className='post-tags'>
          <label htmlFor="tag">Any tags</label>
          <input type="text" placeholder='Tags' id='tag' ref={tagElement}/>
        </div>
        <button>Post</button>
    </form>
  )
}

export default Post