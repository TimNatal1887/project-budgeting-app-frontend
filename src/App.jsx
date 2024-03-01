import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Transactions from './Transactions.jsx'

const App = () => {
  

  return(
    <div className='page-container'>
    <Header></Header>  
    <Routes>
      <Route 
      path='/'
      element={<Transactions />}
      />
    </Routes>
   </div>
  ) 
}

export default App
