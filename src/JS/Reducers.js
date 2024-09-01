import { DECREMENT, INCREMENT, RESET } from "./ActionType";

const initialState = {
  count: 0,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
};
export default CounterReducer;
