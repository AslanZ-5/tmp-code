import React  from "react";
import TodoListItem from "./todo-list-item";
const TodoList = () => {
    return (
      <ul>
      <li><TodoListItem txt='Drink Coffe' /></li>
      <li><TodoListItem txt='Do Something Important' important/></li>
    </ul>
    )
  }
export default TodoList;