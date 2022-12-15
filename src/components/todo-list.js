import React  from "react";
import TodoListItem from "./todo-list-item";
const TodoList = ({data}) => {
    const todoItems = data.map(item => {
        const {id, ...itemProps} = item
        return <li key={id}><TodoListItem {...itemProps} /></li>
    })
    return (
      <ul>
      {todoItems}
    </ul>
    )
  }
export default TodoList;