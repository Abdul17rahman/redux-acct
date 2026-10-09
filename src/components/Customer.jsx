import React from "react";

export default function Customer() {
  return (
    <div className="customer">
      <h1>Create new customer</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="number" name="id" id="id" />
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
