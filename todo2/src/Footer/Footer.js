import TasksFilter from "../TasksFilter"
const Footer = ({filter,onFilter,clearComleted,data}) => {
  const buttons = [
    {name:'all', label:'All'},
    {name:'active', label:'Active'},
    {name:'completed', label:'Completed'}
  ]
  const filterItems = buttons.map(item => {
    return (
      <li key={item.name} className="active"><TasksFilter onFilter={() => onFilter(item.name)} filter={filter} fl={item} /></li>
    )
  })
  const ItemsLeft = data.filter(item => !item.done).length
    return ( 
        <footer className="footer">
        <span className="todo-count">{ItemsLeft} items left</span>
        <ul className="filters">
         {filterItems}
        </ul>
        <button onClick={clearComleted} className="clear-completed">Clear completed</button>
      </footer>
     );
}
 
export default Footer;