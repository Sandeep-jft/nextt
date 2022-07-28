import {useRouter} from 'next/router';
import Navbar from '../components/Navbar';

export const getStaticPaths = async ()=>{
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();

  const paths = data.map(elem=>{
    return {
      params:{
        id:elem.id.toString()
      }
    }
  })

  return {
    paths,
    fallback:false
  }

}

export const getStaticProps = async (context)=>{

  const {id} = context.params;
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await posts.json();


  return {
    props:{
      data
    }
  }
}

const Index = ( props ) => {
  const params = useRouter();
  const id = params.query.id;
  return (
   <>
    <Navbar />
      <h1>The id : {props.data.id}</h1>
      <h1>The body : {props.data.body}</h1>
      <h1>The title : {props.data.title}</h1>
   </>
  )
}

export default Index