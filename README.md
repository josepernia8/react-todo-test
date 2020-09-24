# React Todo Test

```
This repo is a fork from https://github.com/f/react-hooks-todo-app used as base for this Test
```

[![Edit react-todo-test](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/josepernia8react-todo-test-io6bz/)

## Summary
This is a simple React Todo App with 4 task to solve plus some bonus points.

<br />

## Tasks

<br />

### Main Tasks:

#### 1.- Fix input field not cleaning when adding a new todo
When you type your new todo and press enter or click the button "add" the imput should be empty.

#### 2- Error in usePersist
In the `usePersist` hook of this project there is an error making the functionality to save the todos in `localStorage` to be broken.

#### 3- Make a Complete reducer
In the file `src/reducer.js` please include a new reducer for "COMPLETE" and use the button already in the markup to use this reducer.

Notes:
 - Check `src/context.js` for the state structure.
  - Bonus points for creating a test in `src/test/TodoStore.test.js` for this.

#### 4.- Fix Test broken test
There is a broken test is `src/test/TodoStore.test.js` please fix it

<br />
<br />

### Bonust Tasks

#### 1.- Warning: A component is changing an uncontrolled input of type undefined to be controlled.
When you start typing in the input field `Enter new todo` you will get the warning mentioned in the title of this task.

Please solve this, a errors free console is a happy console!

#### 2.- Create Tests for new Complete behavior in TodoList.test.js
```
<TodoList /> #completeCalls
<TodoList /> #completeMutates
```

## License
MIT
