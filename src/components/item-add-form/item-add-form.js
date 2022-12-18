import React, {Component} from "react";
import './item-add-form.css'
export default class ItemAddForm extends Component {
    state = {
        label:''
    }
    onChangeLabel = (e) => {
        this.setState({
            label:e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdditem(this.state.label)
        e.target.firstElementChild.value = ''
    }
    render(){
        return (
        <form className="item-add-form d-flex"
              onSubmit={this.onSubmit}>
            <input 
            className="form-control"
            type='text' 
            onChange={this.onChangeLabel}
            placeholder="add to todo list"/>
            <button  className="btn btn-outline-secondary">Add Item</button>
        </form>
        )
    }
}