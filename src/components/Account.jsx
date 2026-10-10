import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Account() {
  // const [ loan, setLoan ] = useState()
  const [payment, setPayment] = useState(null);

  const customer = useSelector((state) => state.customer);
  console.log(customer);
  function handlePayment(amount) {
    setPayment(amount);
  }

  return (
    <div>
      <h1>Account Details</h1>
      <h2>Bal:</h2>

      <h4>Customer name: {customer?.name}</h4>

      <div>
        <label htmlFor="deposit">Deposit:</label>
        <input type="number" name="deposit" id="deposit" />
        <label htmlFor="currency">Currency:</label>
        <select name="cur" id="">
          <option value="USD">USD</option>
          <option value="EUR">EURO</option>
          <option value="GBP">British Pound</option>
        </select>
        <button type="submit">Deposit</button>
      </div>

      <div>
        <label htmlFor="withdraw">Withdraw:</label>
        <input type="number" name="withdraw" id="withdraw" />

        <button type="submit">Withdraw</button>
      </div>

      <h4>Request for a Loan:</h4>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" name="amount" id="amount" />
        <label htmlFor="purpose">Purpose:</label>
        <input type="text" name="purpose" id="purpose" />
        <button type="submit">Request</button>
      </div>
      <h4>Pay Loan:</h4>
      <div>
        <button type="submit">PayFullAmount</button>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => handlePayment(e.target.value)}
        />
        <button type="submit">Pay {payment}</button>
      </div>
    </div>
  );
}
