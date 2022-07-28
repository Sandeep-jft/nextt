import React from 'react'
import Navbar from './components/Navbar'

export const getStaticProps = async (props)=>{

  console.log('the props here', props );
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();

  return {
    props:{
      data
    }
  }
}

const Index = ( props ) => {

  return (
    <>
    <Navbar />
    <h1 style={{color:'green'}} >Home</h1>
    {
      props.data.map(item=>{
        return (
          <div key={item.id.toString()} style={{textAlign:'center',margin:10}} >
          <h5>Title: {item.title}</h5>
          <h5>Title: {item.body}</h5>
        </div>
        )
      })
    }
    </>
  )
}

export default Index