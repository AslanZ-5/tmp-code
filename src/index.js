import React  from "react";
import ReactDOM  from "react-dom";
const TodoList = () => {
  return (
    <ul>
    <li>Learn React</li>
    <li>Build Awesom app</li>
  </ul>
  )
}
const TodoInput = () => {
  return (
    <input placeholder="search"/>

  )
}
const TodoHeader = () => {
  return (
    <h1>My todo List</h1>
  )
}

const App = () => {
  return (
<div>
    <TodoHeader/>
    <TodoInput/>
   <TodoList/>
  </div>
  )
};

ReactDOM.render(<App />,document.getElementById('root'))