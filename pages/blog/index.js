import React from 'react'
import Navbar from '../components/Navbar'
import Styles from '../../styles/blog.module.css'
import Image from 'next/image';
import Picture from '../../public/Pic.png'
import Link from 'next/link';

export const getStaticProps = async ()=>{
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();

  return {
    props:{
      data
    }
  }
}

const Index = (props) => {

  return (
    <>
    <h1 className={Styles.main}>Blog</h1>
    <Navbar />
    <Image src={Picture} height={150} width={400} alt='Image not found' ></Image>
    {/* <img src={'../../public/Pic.png'} style={{height:'50px',width:'50px'}} alt='Image not found' ></img> */}
    <br />
    <Image alt='Not found' 
    src='https://images.unsplash.com/photo-1658140917228-129162d2a5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    height={150} width={500} />

{
      props.data.map((item,_i)=>{
        return (
          <Link href={`blog/${item.id}`} key={item.id.toString()}>
          <div style={{textAlign:'center',margin:10, width:250, backgroundColor:'red', cursor:'pointer'}} >
          <h5>Title: {item.title}</h5>
          <h5>Body: {item.body}</h5>
          </div>
          </Link>
          
        )
      })
    }
    </>
  )
}

export default Index