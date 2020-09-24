import reducer from "../reducer";

test("adds todo", async () => {
  const state = { todos: [{ value: "a" }] };
  const newState = reducer(state, { type: "ADD_TODO", payload: { value: "b" } });

  expect(newState.todos).toEqual([{ value: "a" }, { value: "b" }]);
});

test("delete a todo", async () => {
  const state = { todos: [{ value: "a" }, { value: "b" }] };
  const newState = reducer(state, { type: "DELETE", payload: "b" });

  expect(newState.todos).toEqual([{ value: "a" }]);
});
