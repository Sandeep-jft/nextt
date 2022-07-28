import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <ul className='nav-menu' >
          <li><Link href='/home'><a > Home</a></Link></li>
          <li><Link href='/about'><a > About</a></Link></li>
          <li><Link href='/contact'><a > Contact</a></Link></li>
          <li><Link href={{
            pathname:'/blog',
            query:{
              id:50
            },
            name:"Sandeep"
          }}><a > Blog</a></Link></li>
          <li><Link href='/product'><a > Product</a></Link></li>
        </ul>
      </nav>
  )
}

export default Navbar