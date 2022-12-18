import React  from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'
const TodoList = ({data, onDeleted, onToggleImportant,onToggleDone}) => {
    const todoItems = data.map(item => {
        const {id} = item
        return <li className="list-group-item" key={id}><TodoListItem 
         onDeleted={() => onDeleted(id)}
         onToggleDone={() => onToggleDone(id)}
         onToggleImportant={() => onToggleImportant(id)}
         {...item} /></li>
    })
    return (
      <ul className="list-group todo-list">
      {todoItems}
    </ul>
    )
  }
export default TodoList;