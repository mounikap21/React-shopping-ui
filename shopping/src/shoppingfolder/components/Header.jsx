import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
      <div className="left">
        <div className="title">
            <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
            <li>Women</li>
            <li>Men</li>
            <li>kids</li>
            <li>Footware</li>
            <li>Accessories</li>
            <li>Beauty</li>
            <li>Watches</li>
        </ul>
        <div className="search">
            <input type='text' placeholder='search..'/>
        </div>
        </div>
      <div className="right">
        <div className="signin">
            Signin / Signup
        </div>
        </div>
        <div className="cart">
            Cart
        </div>
    </div>
  )
}

export default Header
