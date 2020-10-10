import React from "react";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../actions/filters";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import moment from "moment";

class ExpenseTextFilterFiled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(props.filters.startDate),
      endDate: moment(props.filters.endDate),
      focusedInput: null,
    };
  }

  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  };

  onOrderChange = (e) => {
    if (e.target.value === "date") {
      this.props.dispatch(sortByDate());
    } else {
      this.props.dispatch(sortByAmount());
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    this.props.dispatch(setStartDate(moment(startDate).valueOf()));
    this.props.dispatch(setEndDate(moment(endDate).valueOf()));
  };

  render() {
    return (
      <div>
        <input value={this.props.filters.text} onChange={this.onTextChange} />
        <select onChange={this.onOrderChange} value={this.props.filters.sortBy}>
          <option value={"date"}>Date</option>
          <option value={"amount"}>Amount</option>
        </select>

        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseTextFilterFiled);
