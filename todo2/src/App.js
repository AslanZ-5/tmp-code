import './App.css';
import Footer from './Footer';
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm';

import {Component} from 'react'


export default class App extends Component{
    genId = 100
    state = {
      todoData:[
        {title:'Completed task',created:'created 17 seconds ago',done:false,id:1},
        {title:'Editing task',created:'created 137 seconds ago',done:false,id:2},
        {title:'Active task',created:'created 217 seconds ago',done:false,id:3}
      ],
      filter:'all'
    }
    onFilter = (filter) => {
      return this.setState({
        filter
      })
    }
    clearComleted = () => {
      const newArr = this.state.todoData.filter(item => !item.done)
      return this.setState(
        {
          todoData:newArr
        }
      )
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
    AddItem = (val) => {
      const newItem = {title:val,created:'created 32 seconds ago',done:false,id:this.genId++}
      return this.setState({
        todoData:[...this.state.todoData,newItem]
      })
    }
    FilterArr = (arr,filter) =>{
        switch(filter){
          case 'all':
            return arr
          case 'active':
            return arr.filter(item => !item.done)
          case 'completed':
            return arr.filter(item => item.done)
          default:
            return arr
        }
    }
  render(){
    
    const {todoData,filter} = this.state
    const data = this.FilterArr(todoData,filter)
    
    return (
      <div className="App">
         <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm AddItem={this.AddItem} />
        </header>
        <section className="main">
         <TaskList onDoneToggle={this.onDoneToggle}
                   data={data}
                   onDeleteItem={this.onDeleteItem} />
         <Footer onFilter={this.onFilter}
                 filter={filter} 
                 clearComleted={this.clearComleted}
                 data={data}/>
        </section>
      </section>
      </div>
    )
  }
}