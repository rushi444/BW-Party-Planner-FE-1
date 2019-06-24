import { ADD, DELETE, TOGGLE_COMPLETED } from "../reducers/shoppingReducer";

export const addItem = item => {
  return {
    type: ADD,
    payload: item
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteItem = id => {
  return {
    type: DELETE,
    payload: id
  };
};