import './App.css';
import Footer from './Footer';
import TaskList from './TaskList'

import {Component} from 'react'


export default class App extends Component{
    state = {
      todoData:[
        {title:'Completed task',created:'created 17 seconds ago',done:false,id:1},
        {title:'Editing task',created:'created 137 seconds ago',done:false,id:2},
        {title:'Active task',created:'created 217 seconds ago',done:false,id:3}
      ]
    }
    onDoneToggle = (id) => {
      const inx = this.state.todoData.findIndex(item => item.id === id)
      const item = this.state.todoData[inx]
      const newItem = {...item, done:!item.done}
      return this.setState({
        todoData:[...this.state.todoData.slice(0,inx),newItem,...this.state.todoData.slice(inx+1)]
      })
    }
    onDeleteItem = (id) => {
      // console.log(id)
      const inx = this.state.todoData.findIndex(item => item.id === id)
      return this.setState({
        todoData:[...this.state.todoData.slice(0,inx),...this.state.todoData.slice(inx+1)]
      })
    }
  render(){
    const {todoData:data} = this.state
    return (
      <div className="App">
         <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
        </header>
        <section className="main">
         <TaskList onDoneToggle={this.onDoneToggle}
                   data={data}
                   onDeleteItem={this.onDeleteItem} />
         <Footer />
        </section>
      </section>
      </div>
    )
  }
}