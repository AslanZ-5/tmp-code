import { formatDistance, sub,parseISO } from 'date-fns'

const Task = ({data,onDeleteItem,onDoneToggle}) => {
  const created = formatDistance(parseISO(data.created),new Date(), { addSuffix: true,includeSeconds:true})
    return ( 
        <div className="view">
        <input className="toggle" type="checkbox"/>
        <label onClick={onDoneToggle}>
          <span className="description">{data.title}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={onDeleteItem} className="icon icon-destroy"></button>
      </div>
     );
}
Task.defaultProps = {
  data:{title:'*******', created:"*******"}
}
export default Task;



