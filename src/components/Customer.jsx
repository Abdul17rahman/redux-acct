import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../store/customer/customerSlice";

export default function Customer() {
  const [customer, setCustomer] = useState({ name: "", id: null });

  const dispatch = useDispatch();

  function handleCustomer() {
    // console.log(customer);
    dispatch(create(customer));
    setCustomer({ name: "", id: null });
  }
  return (
    <div className="customer">
      <h1>Create new customer</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={customer.name}
          onChange={(e) =>
            setCustomer((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          name="id"
          id="id"
          value={customer.id ?? ""}
          onChange={(e) =>
            setCustomer((prev) => ({ ...prev, id: Number(e.target.value) }))
          }
        />
      </div>
      <button type="submit" onClick={handleCustomer}>
        Submit
      </button>
    </div>
  );
}
