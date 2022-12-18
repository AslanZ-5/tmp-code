import React from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends React.Component {
  buttons = [
    {name:'all', label:'All'},
    {name:'active', label:'Active'},
    {name:'done', label:'Done'}
  ]

  render() {
    const {filter,onFilterChange} = this.props
    const buttons = this.buttons.map(item => {
      const isActive = item.name === filter
      const clazz = isActive? 'btn-info': 'btn-outline-secondary'
      return (
        <button type="button"
                key={item.name}
                className={`btn ${clazz}`}
                onClick={() => onFilterChange(item.name)}>{item.label}</button>
      )
    })
    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  }
} 

