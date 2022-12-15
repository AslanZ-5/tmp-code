import React  from "react";
import './app.css'
import TodoHeader from "../todo-header";
import TodoInput from "../todo-input";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

const App = () => {
  const todoData = [
    {label:"Drink some Coffe", important:false,id:"1"},
    {label:"Make Awesome App", important:true,id:"2"},
    {label:"Have a lunch", important:false,id:"3"}
  ]
  return (
<div className="todo-app">
    <TodoHeader toDo={3} done='4'/>
    <div className="top-panel d-flex">
    <TodoInput/>
    <ItemStatusFilter/>
    </div>
    
   <TodoList data={todoData}/>
  </div>
  )
};
export default App;