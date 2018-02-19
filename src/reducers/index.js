import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  const updatedList = () => {
    const objIndex = state.todos.findIndex((obj => obj.id === action.id));
    state.todos[objIndex].text = action.text

    return state.todos
  }

  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
      };

    case types.UPDATE_TODO:
      return {
        ...state,
        todos: updatedList(),
      };

    default:
      return state;
  }
};

export default reducer;