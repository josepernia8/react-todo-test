import React, { useContext } from "react";
import Store from "../context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  const header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map((todo, index) => (
                <li key={`todo-${index}`} className="list-group-item">
                  <span style={ todo.completed ? { textDecoration: "line-through" } : {}}>{todo.value}</span>
                  <button
                    className="delete-todo float-right btn btn-danger btn-sm ml-3"
                    onClick={() => dispatch({ type: "DELETE", payload: todo })}
                  >
                    Delete
                  </button>
                  <button
                    className="complete-todo float-right btn btn-success btn-sm"
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
