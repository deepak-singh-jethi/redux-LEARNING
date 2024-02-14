const redux = require("redux");

// Define the reducer function, which handles state updates based on dispatched actions.
const counterReducer = (state = { counter: 0 }, action) => {
  // Increment the counter in the state by 1 for any dispatched action.

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

// Create a Redux store and link it with the counterReducer function.
const store = redux.createStore(counterReducer);

// Define a subscriber function to be called whenever the state changes.
const counterSubscriber = () => {
  // Get the latest state from the store and log it to the console.
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribe the store to the counterSubscriber function to receive notifications on state changes.
store.subscribe(counterSubscriber);

// Dispatch an action (type: "increment") to the store, triggering the reducer function and state update.
store.dispatch({ type: "increment" });
