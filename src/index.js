import React  from "react";
import ReactDOM  from "react-dom";
import TodoHeader from "./components/todo-header";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
const App = () => {
  const todoData = [
    {label:"Drink some Coffe", important:false,id:"1"},
    {label:"Make Awesome App", important:true,id:"2"},
    {label:"Have a lunch", important:false,id:"3"}
  ]
  return (
<div>
    <TodoHeader/>
    <TodoInput/>
   <TodoList data={todoData}/>
  </div>
  )
};

ReactDOM.render(<App />,document.getElementById('root'))