export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";

const initialState = {
  items: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newItems = state.items.map((item, index) => {
        console.log(action.payload, index);
        if (index === action.payload) {
          return { value: item.value, completed: !item.completed };
        }
        return item;
      });
      return {
        ...state,
        items: newItems
      };
    case DELETE:
      const filteredItems = state.items
        .slice(0, action.payload)
        .concat(state.items.slice(action.payload + 1));
      console.log(filteredItems, action.payload);
      return {
        ...state,
        items: filteredItems
      };
    default:
      return { ...state };
  }
};