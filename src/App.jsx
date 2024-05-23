import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Post from './Components/Post'
import PostList from './Components/ListPost'
import { useState } from 'react'
import PostListProvider from './store/list-store'

function App() {

  const[select,setSelect]=useState("Home")

  
  
  return (
    <PostListProvider>
    <>
      <div className='wrapper'>
        <Sidebar select={select} setSelect={setSelect} />
        <div id='container'>
          <Header/>
          {select === "Home" ? <PostList/> : <Post/>}
          <Footer/>
        </div>
      </div> 
    </>
    </PostListProvider>
  )
}

export default App
