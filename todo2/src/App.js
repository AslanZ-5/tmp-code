import './App.css';
import Footer from './Footer';
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm';


import {Component} from 'react'


export default class App extends Component{
    genId = 100
    dt = new Date()
    state = {
      todoData:[
        {title:'Completed task',created:'2022-05-11T12:11:32',done:false,id:1},
        {title:'Editing task',created:'2021-11-11T04:32:33',done:false,id:2},
        {title:'Active task',created:'2020-12-11T01:20:10',done:false,id:3}
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
      const d = new Date()
      const newItem = {title:val,created: d.toISOString(),done:false,id:this.genId++}
      
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