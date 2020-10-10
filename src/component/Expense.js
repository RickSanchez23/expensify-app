import React from "react";
import { NavLink } from "react-router-dom";

const Expense = ({ amount, description, createAt, id}) => {
  return (
    <div>
      <NavLink to={"/edit/" + id}>
        <h3>{description}</h3>
      </NavLink>
      <p>{amount}$ - {createAt}</p>
    </div>
  );
};

export default Expense;
