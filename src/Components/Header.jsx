import React from 'react'

function Header() {
  return (
    <header>
        <ul className='options-list'>
            <li className='active'>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>About</li>
        </ul>
        <ul className='inputs-list'>
            <input type="text" />
            <button className='login'>Login</button>
            <button className='sign-up'>Sign-up</button>
        </ul>
    </header>
  )
}

export default Header