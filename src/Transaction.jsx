import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Transaction.css"
import { formatMonthDayDate } from '../helpers/helpers'

const Transaction = ({transaction}) => {
    const { transaction_name, amount, date, type} = transaction
    
    const formattedMonthDayDate = formatMonthDayDate(date)
  return (
    <li className='transaction-list-item'>
        <p>{formattedMonthDayDate}</p>
        <Link to={`/transactions/${transaction.id}`}>
            <p>{transaction_name}</p>
        </Link>
        <p className={`amount ${type}`}><span>{type === "Deposit" ? "+":"-"}</span>{amount}</p>

    </li>
  )
}

export default Transaction