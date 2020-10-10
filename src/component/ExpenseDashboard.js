import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseTextFilterFiled from "./ExpenseTextFilterFiled";

const ExpenseDashboard = () => (
  <div>
    <ExpenseTextFilterFiled />
    <ExpensesList />
  </div>
);

export default ExpenseDashboard;
