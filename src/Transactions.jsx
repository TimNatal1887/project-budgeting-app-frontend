import React from 'react'
import { useState,useEffect } from 'react'
import "../styles/Transactions.css"
import Transaction from './Transaction.jsx'
import { getAllTransactions } from '../helpers/fetch.js'
import { getBankTotal } from '../helpers/helpers.js'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [bankTotal, setBankTotal] = useState(0)
    
    useEffect(()=>{
        getAllTransactions()
        .then((data)=> setTransactions(data.transactions))
    },[])

    useEffect(()=>{
        setBankTotal(getBankTotal(transactions))
    },[transactions])

  return (
    <div className='transactions-wrapper'>
        <h2 className='transactions-list-header'>Transactions</h2>
        <h3 className='total-amount'>Bank Account Total:<span className={`${bankTotal > 100 ? "rich": bankTotal > 0 ? "low":"broke"}`}>${bankTotal} </span></h3>
        <ul className='transactions'>
            {transactions.map(transaction=> (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    </div>
  )
}

export default Transactions