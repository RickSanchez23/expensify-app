import React from "react";
import ExpenseFrom from "./ExpesnseForm";
import { connect } from "react-redux";
import { addExpenseAsync} from "../actions/expenses";

export class AddExpense extends React.Component {
    onExpenseFromSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h5>Add New Expense</h5>
                <ExpenseFrom onSubmit={this.onExpenseFromSubmit} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpenseAsync(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
