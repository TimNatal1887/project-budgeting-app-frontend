import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneTransaction } from '../helpers/fetch'
import "../styles/TransactionDetails.css"

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    getOneTransaction(id)
    .then((res)=> {
      setTransaction(res.transaction)
    })
  },[id])

  if(Object.keys(transaction).length < 1) return null
  const {transaction_name, amount, date, type, from, category} = transaction
  return (
      <div className='detail-wrapper'>
        <h4 className='detail-header'>Transaction details</h4>
        <hr></hr>
        <div className='detail-body'>
          <div className='details-left'>
            <p><span className='payment-type'>Payment {type === "Withdrawal" ? "sent ":"received "}</span> {type === "Withdrawal" ? "to ":"from "}{from}</p>
          </div>
          <div className='details-right'>

          </div>
        </div>
      </div>
  )
}

export default TransactionDetails