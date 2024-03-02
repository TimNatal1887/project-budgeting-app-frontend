import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
  return (
    <div className='header-wrapper'>
        <Link className="home-link" to="/">
            <h1 className='budget-header'>Budget App</h1>
        </Link>
        <Link className="form-link" to="/transactions/new">
            <div className='new-transaction'>Add New Transaction</div>
        </Link>
    </div>
  )
}

export default Header