import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});
const resetCount = () => ({
  type: "RESET",
});

const setCount = (count) => ({
  type: "SET",
  count,
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
});
const unsubscribe = store.subscribe(() => {
  console.log("state", JSON.stringify(store.getState()));
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 150 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount(23976));
