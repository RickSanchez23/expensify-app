import React from "react";
import ExpenseFrom from "./ExpesnseForm";
import { connect } from "react-redux";
import { deleteExpense, editExpense } from "../actions/expenses";

export class EditExpense extends React.Component {
  onDeleteClick = () => {
    this.props.deleteExpense(this.props.expense.id);
    this.props.history.push("/");
  }

  onSubmitExpenseFrom = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h5>Edit Expense</h5>
        <ExpenseFrom
          expense={this.props.expense}
          onSubmit={this.onSubmitExpenseFrom}
        />
        <button onClick={this.onDeleteClick}>delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (itemId) => dispatch(deleteExpense(itemId)),
  editExpense: (itemId, expense) => dispatch(editExpense(itemId, expense)),
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expense.find((item) => item.id === props.match.params.id),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
