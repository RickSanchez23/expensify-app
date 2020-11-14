import moment from "moment";

export default [
  {
    id: '1',
    description: "Rent",
    amount: 310,
    createAt: moment().subtract(4, "days").valueOf(),
  },
  {
    id: '2',
    description: "Coffee",
    amount: 2,
    createAt: moment().subtract(2, "days").valueOf(),
  },
  {
    id: '3',
    description: "Gas Bill",
    amount: 12,
    createAt: moment().add(5, "days").valueOf(),
  },
  {
    id: '4',
    description: "Food",
    amount: 8,
    createAt: moment().valueOf(),
  },
];
