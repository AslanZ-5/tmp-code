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
        this.setState({
            label:''
        })
    }
    render(){
        return (
        <form className="item-add-form d-flex"
              onSubmit={this.onSubmit}>
            <input 
            className="form-control"
            type='text' 
            onChange={this.onChangeLabel}
            placeholder="add to todo list"
            value={this.state.label}/>
            <button  className="btn btn-outline-secondary">Add Item</button>
        </form>
        )
    }
}