import React from "react";
import './todo-list-item.css'


export default class TodoListItem extends React.Component {
  constructor(){
    super()
    this.onClickLabel = () => {
      this.setState({
        done:true
      })
    }
    this.onMarkImportant = () => {
      this.setState({
        important:true
      })
    }
    this.state = {
      done: false,
      important:false
    }
  }
  render() {
    const {label} = this.props
    
    const {done,important} = this.state
    let className = 'todo-list-item'
    if(done){
      className += ' done'
    }
    if(important){
      className += ' important'
    }
  return (<span className={className}>
      <span className="todo-list-item-label"
            onClick={this.onClickLabel}>
              
               {label}
            
            </span>
      <div className="btn-wrap">
      <button type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={this.onMarkImportant}>
      <i className="fa fa-exclamation" />
    </button>

    <button type="button"
            className="btn btn-outline-danger btn-sm float-right">
      <i className="fa fa-trash-can" />
    </button>
    </div>
      </span>)
  }
}

