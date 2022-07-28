import React, { useEffect } from 'react';
import {useRouter} from 'next/router'
import Navbar from './components/Navbar';

const Error = () => {
    const route = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            goBack();
        },5000)
    }, [])

    const goBack = ()=>route.push('/');
  return (
    <div>
        <h1>Error: Page not found</h1>
        <Navbar />
        <a onClick={goBack} > 
            Go to Homepage
        </a>
    </div>
  )
}

export default Error