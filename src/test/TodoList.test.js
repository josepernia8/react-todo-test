import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../context";
import reducer from "../reducer";
import TodoList from "../components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> #display", async () => {
  const todos = [{ value: "a" }, { value: "b" }, { value: "c" }];
  const dispatch = () => {};
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual(
    '<li class="list-group-item"><span>a</span><button class="delete-todo float-right btn btn-danger btn-sm ml-3">Delete</button><button class="complete-todo float-right btn btn-success btn-sm">Complete</button></li>'
  );
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual(
    '<li class="list-group-item"><span>c</span><button class="delete-todo float-right btn btn-danger btn-sm ml-3">Delete</button><button class="complete-todo float-right btn btn-success btn-sm">Complete</button></li>'
  );
});

test("<TodoList /> #deleteCalls", async () => {
  const todos = [{ value: "a" }, { value: "b" }, { value: "c" }];
  const dispatch = jest.fn();
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  list.find("button.delete-todo").forEach(b => b.simulate("click"));
  expect(dispatch.mock.calls.length).toBe(3);
});

test("<TodoList /> #deleteMutates", async () => {
  let state = { todos: [{ value: "a" }, { value: "b" }, { value: "c" }] };
  const dispatch = action => {
    state = reducer(state, action);
  };
  const list = mount(
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  await list
    .find("button.delete-todo")
    .last()
    .simulate("click");
  expect(state.todos.length).toBe(2);
  expect(state.todos).toEqual([{ value: "a" }, { value: "b" }]);
});
