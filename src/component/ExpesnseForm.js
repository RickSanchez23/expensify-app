import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

export default class ExpenseFrom extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount : "",
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      isDatePickerVisible: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ isDatePickerVisible: focused }));
  };

  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({ createAt }));
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { description, amount, note, createAt } = this.state;

    if (!description || !amount) {
      this.setState(() => ({ error: "Please fill all of fields!" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        amount,
        description,
        note,
        createAt: createAt.valueOf(),
      });
    }
  };

  render() {
    const {
      description,
      amount,
      note,
      createAt,
      isDatePickerVisible,
      error,
    } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        {error && <p>{error}</p>}

        <input
          value={description}
          onChange={this.onDescriptionChange}
          type={"text"}
          autoFocus
          placeholder={"Description"}
        />
        <input
          value={amount}
          onChange={this.onAmountChange}
          type={"text"}
          placeholder={"Amount"}
        />
        <textarea
          value={note}
          onChange={this.onNoteChange}
          placeholder={"Add note for your expense (optional)"}
        />

        <SingleDatePicker
          date={createAt}
          onDateChange={this.onDateChange}
          focused={isDatePickerVisible}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <button>{this.props.expense ? "Edit" : "Create"} Expense</button>
      </form>
    );
  }
}
