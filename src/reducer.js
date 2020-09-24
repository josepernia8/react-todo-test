export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      // return current state if empty
      if (!payload) {
        return state;
      }
      // return current state if duplicate
      if (state.todos.find(todo => todo.value === payload.value)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.value !== payload.value)
      };
    default:
      return state;
  }
}
