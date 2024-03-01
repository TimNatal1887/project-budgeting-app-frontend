import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
  return (
    <div className='header-wrapper'>
        <h1>Budget App</h1>
        {/* <Link to="/transactions/new"> */}
        <div className='new-transaction'>Add New Transaction</div>
        {/* </Link> */}
    </div>
  )
}

export default Header