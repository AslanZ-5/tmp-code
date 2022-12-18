import React, {Component}  from "react";
import './app.css'
import TodoHeader from "../todo-header";
import TodoInput from "../todo-input";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component{
  state = {
    todoData:[
      {label:"Drink some Coffe",id:"1"},
      {label:"Make Awesome App",id:"2"},
      {label:"Have a lunch",id:"3"}
    ]
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const inx = todoData.findIndex((el) => el.id === id)
      const newArr = [
        ...todoData.slice(0,inx),
        ...todoData.slice(inx+1)
      ]
      return {todoData:newArr}
    })
  }
  render() {
    return (
      <div className="todo-app">
          <TodoHeader toDo={3} done='4'/>
          <div className="top-panel d-flex">
          <TodoInput/>
          <ItemStatusFilter/>
          </div>
          
         <TodoList onDeleted={this.deleteItem} data={this.state.todoData}/>
        </div>
        )
  }
  
};
