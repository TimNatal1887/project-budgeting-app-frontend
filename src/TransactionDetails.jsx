import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import { getOneTransaction, deleteTransaction } from '../helpers/fetch'
import "../styles/TransactionDetails.css"

const TransactionDetails = () => {
  const [toggleCheck, setToggleCheck] = useState(false)
  const [transaction, setTransaction] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const { id:transaction_id, transaction_name, amount, date, type, from, category} = transaction
  
  function handleDelete(){
    deleteTransaction(id)
    .then((res)=> navigate("/"))
  }
  
  useEffect(()=>{
    getOneTransaction(id)
    .then((res)=> {
      setTransaction(res.transaction)
    })
  },[id])
  
  if(Object.keys(transaction).length < 1) return null


  return (
      <div className='detail-wrapper'>
        <h4 className='detail-header'>Transaction Details</h4>
        <hr></hr>
        <div className='detail-body'>
          <div className='details-left'>
            <p className='payment-type'><span className='payment-type-span'>Payment {type === "Withdrawal" ? "sent to":"received from"}</span>: {from}</p>
            <p className='payment-info'>Payment Category: {category}</p>
            <p className='payment-info'>Transaction type: {type}</p>
            <p className='transaction-name'>Transaction: {transaction_name}</p>
            <div className='transaction-alter-buttons'>
            <Link to={`/transactions/${transaction_id}/edit`} className='edit-link'> <p className='edit-transaction alter-transaction'>Edit Transaction</p></Link>
            <p className='delete-transaction alter-transaction' onClick={()=>setToggleCheck(true)}>Delete Transaction</p>
            </div>
          </div>
          <div className='details-right'>
            <p className='transaction-id'>Transaction ID: <span className='transaction-id-number'> {transaction_id} </span></p>
            <p className='payment-amount'>Payment Amount: <span className={`payment-amount-number ${type}`}>${amount} USD </span></p>
            <p>Payment Date: <span className={`transaction-type ${type}`}> {type === "Withdrawal" ? "Sent":"Received"} </span> on {date}</p>
          </div>
        </div>
        {toggleCheck && 
        <>
          <div className='overlay'></div>
          <div className='delete-check'>
            <p className='delete-question'>Are you sure you want to delete this transaction from your account?</p>
            <p className='delete-check-answer yes' onClick={handleDelete}>Yes</p>
            <p className='delete-check-answer no' onClick={()=>setToggleCheck(false)}>No</p>
          </div> 
        </>
        }
        
      </div>
  )
}

export default TransactionDetails