
const Task = ({data,onDeleteItem,onDoneToggle}) => {
    return ( 
        <div className="view">
        <input className="toggle" type="checkbox"/>
        <label onClick={onDoneToggle}>
          <span className="description">{data.title}</span>
          <span className="created">{data.created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={onDeleteItem} className="icon icon-destroy"></button>
      </div>
     );
}
 
export default Task;



