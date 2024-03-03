import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Transactions from './Transactions.jsx'
import TransactionDetails from "./TransactionDetails.jsx"
import TransactionNewForm from "./TransactionNewForm.jsx"
import TransactionEditForm from './TransactionEditForm.jsx'

const App = () => {
  

  return(
    <div className='page-container'>
    <Header></Header>  
    <div className='page-wrapper'>
    <Routes>
      <Route path='/'>
        <Route index element={<Transactions />} />
        <Route path='transactions/:id' element={< TransactionDetails />}/>
        <Route path='transactions/:id/edit' element={<TransactionEditForm />}/>
      </Route>
      <Route 
      path="/transactions/new"
      element={< TransactionNewForm />}
      />
    </Routes>
    </div>
   </div>
  ) 
}

export default App
