import React, {Component}  from "react";
import './app.css'
import TodoHeader from "../todo-header";
import TodoInput from "../todo-input";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component{
  maxId = 100
  state = {
    todoData:[
      this.createTodoItem("Drink some Coffe"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ]
  }
  createTodoItem(label){
    return {
      label,
      important:false,
      done:false,
      id:this.maxId++
    }
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
  addItem = (text) => {
    this.setState(({todoData}) => {
      const newItem = this.createTodoItem(text)
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData:newArr
      }
    })
  }
  onToggleDone = (id) => {
    console.log('ToggleDone', id)
  }
  onToggleImportant = (id) => {
    console.log('ToggleImportant', id)
  }
  render() {
    return (
      <div className="todo-app">
          <TodoHeader toDo={3} done='4'/>
          <div className="top-panel d-flex">
          <TodoInput/>
          <ItemStatusFilter/>
          </div>
          
         <TodoList onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}
                   data={this.state.todoData}
                   />
         <ItemAddForm onAdditem={this.addItem}/>
        </div>
        )
  }
  
};
