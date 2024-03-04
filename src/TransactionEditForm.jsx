import React, { useEffect, useState } from 'react'
import { updateTransaction, getOneTransaction } from '../helpers/fetch'
import { useNavigate, useParams } from 'react-router-dom'

const TransactionEditForm = () => {
  const { id } = useParams()
  const [transaction, setTransaction] = useState({
    transaction_name:"",
    amount:0,
    date:"",
    from:"",
    category:"",
    type:""
  })
  const navigate = useNavigate()

  function handleChange(e){
    setTransaction({
      ...transaction,
      [e.target.id]:e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    transaction.amount = Number(transaction.amount).toFixed(2)
    updateTransaction(id,transaction)
    .then((res)=>{
      navigate(`/transactions/${id}`)
    })
  }

  useEffect(()=>{
    getOneTransaction(id)
    .then((res)=> {
        setTransaction(res.transaction)
    })
  },[id])

  return (
    <div className='form-page-wrapper'>
      <h2>Add a New Transaction</h2>
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <label htmlFor="transaction_name">
          <p>Transaction Title</p>
          <input type="text"
            id='transaction_name'
            name='transaction_name'
            onChange={handleChange}
            value={transaction.transaction_name}
            required
          />
        </label>
        <label htmlFor="amount">
          <p>Transaction Amount</p>
          <input
            type="text"
            id="amount"
            name="amount"
            pattern="(?!0+(\.0{1,2})?$)\d+(\.\d{1,2})?"
            title="Enter any amount above 0 with up to two decimal places"
            onChange={handleChange}
            value={transaction.amount}
          />
        </label>
        <label htmlFor="date">
          <p>Date of Transaction</p>
          <input
            type="text"
            id='date'
            name='date'
            onChange={handleChange}
            pattern="(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{2})"
            title="Please enter in mm-dd-yy format"
            value={transaction.date}
          />
        </label>
        <label htmlFor="from">
          <p>Sent To/Received From</p>
          <input type="text"
            id='from'
            name='from'
            onChange={handleChange}
            value={transaction.from}
            required
          />
        </label>
        <label htmlFor="category">
          <p>Category</p>
          <input type="text"
            id='category'
            name='category'
            onChange={handleChange}
            value={transaction.category}
            required
          />
        </label>
        <label htmlFor="type">
          <p>Transaction Type</p>
          <select id="type" name="type" onChange={handleChange} value={transaction.type}>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Deposit">Deposit</option>
          </select>
        </label>
        <div>
          <button>Update Transaction</button>
        </div>
      </form>
      </div>
  )
}

export default TransactionEditForm