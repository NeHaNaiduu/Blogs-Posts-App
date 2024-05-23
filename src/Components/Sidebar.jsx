import React from 'react'

function Sidebar({select,setSelect}) {

const handleOnClick=(tab)=>{
  setSelect(tab)
}

  return (
    <div id='sidebar'>
        <ul>
            <li className={select === 'Home' && 'active'} onClick={()=>{handleOnClick("Home")}}>Home</li>
            <li className={select === 'Create Post' && 'active'} onClick={()=>{handleOnClick("Create Post")}}>Create Post</li>
        </ul>
        <button>login</button>
    </div>
  )
}

export default Sidebar