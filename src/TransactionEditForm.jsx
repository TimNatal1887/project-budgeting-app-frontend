import React, { useEffect, useState } from 'react'
import { updateTransaction, getOneTransaction } from '../helpers/fetch'
import { useNavigate, useParams } from 'react-router-dom'

const TransactionNewForm = () => {
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
    updateTransaction(id,transaction)
    .then((res)=>{
      navigate(`/transactions/${id}`)
    })
  }

  useEffect(()=>{
    getOneTransaction(id)
    .then((res)=> setTransaction(res.transaction))
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
          />
        </label>
        <label htmlFor="amount">
          <p>Transaction Amount</p>
          <input type="number"
            id='amount'
            name='amount'
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date">
          <p>Date of Transaction</p>
          <input type="text"
            id='date'
            name='date'
            onChange={handleChange}
          />
        </label>
        <label htmlFor="from">
          <p>Sent To/Received From</p>
          <input type="text"
            id='from'
            name='from'
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          <p>Category</p>
          <input type="text"
            id='category'
            name='category'
            onChange={handleChange}
          />
        </label>
        <label htmlFor="type">
          <p>Transaction Type</p>
          <select id="type" name="transactiontype" onChange={handleChange}>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Deposit">Deposit</option>
          </select>
        </label>
        <div>
          <button>Submit</button>
        </div>
      </form>
      </div>
  )
}

export default TransactionNewForm