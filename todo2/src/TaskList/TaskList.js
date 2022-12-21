import Task from '../Task';
const TaskList = ({data,onDoneToggle,onDeleteItem}) => {
    
    const tasks = data.map(task => {
        const activeClass = task.done ? 'completed': '' 
        return (
            <li  key={task.id} className={activeClass}>
                <Task 
                onDeleteItem={() => onDeleteItem(task.id)}
                onDoneToggle={() => onDoneToggle(task.id)}
                data={task}/>
            </li>
        )
    })
    return ( 
        <ul className="todo-list">
            {tasks}
        </ul>
     );
}
 TaskList.defaultProps = {
  onDeleteItem: () => {},
  onDoneToggle: () => {},
  data:[]
}
export default TaskList;