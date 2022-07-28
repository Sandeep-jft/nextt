import React from 'react'
import Navbar from './components/Navbar'
const Index = () => {
  return (
    <>
    <Navbar />
    <h1>Contact</h1>
    <h3>Contact: Styled jsx</h3>

    <style jsx>
      {`

      h1{
        color:red;
      }

      h3{
        color:green;
      }
      `}
    </style>
    </>
  )
}

export default Index