import React from 'react'
import { useState,useEffect } from 'react'
import "../styles/Transactions.css"
import Transaction from './Transaction.jsx'
import { getAllTransactions } from '../helpers/fetch.js'
import { getBankTotal } from '../helpers/helpers.js'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const bankTotal = getBankTotal(transactions)
    useEffect(()=>{
        getAllTransactions()
        .then((data)=> setTransactions(data.transactions))
    },[])

  return (
    <div className='transactions-wrapper'>
        <h2 className='transactions-list-header'>Transactions</h2>
        <h3 className='total-amount'>Bank Total: ${bankTotal}</h3>
        <ul className='transactions'>
            {transactions.map(transaction=> (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>

    </div>
  )
}

export default Transactions