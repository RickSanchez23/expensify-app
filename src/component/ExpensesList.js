import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";
import { getVisibleExpenses } from "../selectors/expenses";

export const ExpensesList = (props) => (
  <div>
    {
      !props.expenses || props.expenses.length === 0 ? (
          <p>there is no expenses! </p>
      ) : (
          props.expenses.map((expense, index) => (
            <Expense {...expense} key={index} />
            ))
      )
    }

  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expense, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesList);
