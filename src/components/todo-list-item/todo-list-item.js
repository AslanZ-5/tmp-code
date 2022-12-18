import React from "react";
import './todo-list-item.css'

export default class TodoListItem extends React.Component {
  // constructor(){
  //   super()
  //   this.onClickLabel = () => {
  //     this.setState(({done}) => {
  //       return {
  //         done: !done
  //       }
  //     })
  //   }
  //   this.onMarkImportant = () => {
  //     this.setState(({important}) => {
  //       return {
  //         important: !important
  //       }
  //     })
  //   }
  //   this.state = {
  //     done: false,
  //     important:false
  //   }
  // }
  render() {
    const {label, onDeleted,important,done,onToggleDone,onToggleImportant} = this.props
    
    // const {done,important} = this.state
    let className = 'todo-list-item'
    if(done){
      className += ' done'
    }
    if(important){
      className += ' important'
    }
  return (<span className={className}>
      <span className="todo-list-item-label"
            onClick={onToggleDone}>
              
               {label}
            
            </span>
      <div className="btn-wrap">
      <button type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
      <i className="fa fa-exclamation" />
    </button>

    <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
      <i className="fa fa-trash-can" />
    </button>
    </div>
      </span>)
  }
}

