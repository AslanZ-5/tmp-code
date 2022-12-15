import React  from "react";
import ReactDOM  from "react-dom";
import TodoHeader from "./components/todo-header";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
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